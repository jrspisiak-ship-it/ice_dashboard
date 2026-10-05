"""Daily refresh of data/live.json.

Asks Gemini (with Google Search grounding) for recent *official* releases on
ICE detention and removals, keeps only the grounding citations (links), and
writes them to data/live.json for the static page to display.

Runs in GitHub Actions. The API key comes from the GEMINI_API_KEY secret and
is never written to disk, logged, or shipped to the browser.

Usage (local test):
    GEMINI_API_KEY=... python scripts/update_live.py
"""

from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse

import requests

MODEL = "gemini-2.5-flash"
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
OUTPUT = Path(__file__).resolve().parent.parent / "data" / "live.json"
TIMEOUT_SECONDS = 60
MAX_ITEMS = 10
MAX_TITLE = 160

# Only keep citations from domains we would want a reader to open.
ALLOWED_DOMAINS = {
    "ice.gov",
    "dhs.gov",
    "cbp.gov",
    "uscis.gov",
    "justice.gov",
    "whitehouse.gov",
    "state.gov",
    "tracreports.org",
    "vera.org",
    "marshallproject.org",
    "americanimmigrationcouncil.org",
    "migrationpolicy.org",
    "aila.org",
    "ilrc.org",
    "aclu.org",
    "apnews.com",
    "reuters.com",
}

PROMPT = (
    "List the most recent official releases (last 30 days) from DHS, ICE, "
    "CBP, USCIS, EOIR, TRAC, or the Vera Institute about U.S. immigration "
    "detention population, monthly book-ins, removals, or policy changes. "
    "Cite each source with its URL."
)


def domain_allowed(url: str) -> bool:
    """True if url is https and its host is an allowed domain or subdomain."""
    parsed = urlparse(url)
    if parsed.scheme != "https" or not parsed.hostname:
        return False
    host = parsed.hostname.lower()
    return any(host == d or host.endswith("." + d) for d in ALLOWED_DOMAINS)


def fetch_citations(api_key: str) -> list[dict[str, str]]:
    """Call Gemini with search grounding and return validated citation dicts."""
    payload = {
        "contents": [{"parts": [{"text": PROMPT}]}],
        "tools": [{"google_search": {}}],
    }
    response = requests.post(
        API_URL,
        params={"key": api_key},
        json=payload,
        timeout=TIMEOUT_SECONDS,
    )
    response.raise_for_status()
    body = response.json()

    chunks = (
        body.get("candidates", [{}])[0]
        .get("groundingMetadata", {})
        .get("groundingChunks", [])
    )

    seen: set[str] = set()
    items: list[dict[str, str]] = []
    for chunk in chunks:
        web = chunk.get("web") or {}
        url = str(web.get("uri", ""))
        title = str(web.get("title", "")).strip()[:MAX_TITLE]
        if not title or not domain_allowed(url) or url in seen:
            continue
        seen.add(url)
        items.append({"title": title, "url": url})
        if len(items) >= MAX_ITEMS:
            break
    return items


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY", "").strip()
    if not api_key:
        print("GEMINI_API_KEY is not set; nothing written.", file=sys.stderr)
        return 1

    try:
        items = fetch_citations(api_key)
    except requests.RequestException as exc:
        # Do not print the response body: it could echo the key in a URL.
        print(f"Request failed: {type(exc).__name__}", file=sys.stderr)
        return 1

    if not items:
        print("No allowed citations returned; keeping previous live.json.")
        return 0

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps(
            {
                "updated": datetime.now(timezone.utc).isoformat(timespec="minutes"),
                "model": MODEL,
                "items": items,
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(items)} citations to {OUTPUT.name}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
