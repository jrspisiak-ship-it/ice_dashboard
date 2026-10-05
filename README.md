# Immigration help & facts

A single static page, in English and Spanish, for immigrants and their neighbors:
what to do if ICE comes to the door, who to call, how to find someone in detention,
how to prepare a family, and verified enforcement numbers with links to the source.

Live at https://jrspisiak-ship-it.github.io/ice_dashboard/

## Files

- `index.html`, `styles.css`, `app.js` — the page. No build step, no CDN scripts, no API keys in the browser.
- `data/live.json` — links found by the daily automated check. Written by the workflow, read by the page.
- `scripts/update_live.py` — asks Gemini (search-grounded) for recent official releases and saves only the citations.
- `.github/workflows/daily_update.yml` — runs the script every morning and commits the result.

## One-time setup for the daily check

1. Repository → Settings → Secrets and variables → Actions → New repository secret
   `GEMINI_API_KEY` = your key. (Never put it in the HTML or commit it.)
2. Actions → "Daily live-citations refresh" → Run workflow, to test.

If the secret is missing the workflow fails cleanly and the page simply shows "No automated results yet."

## Updating the verified figures

The numbers in the "The numbers, with sources" section are typed by hand on purpose.
When you update one, update the link beside it and the "Figures last checked" date in the footer.

## Local check

    python -m venv .venv && .venv/bin/pip install ruff bandit pip-audit
    .venv/bin/ruff check scripts/ && .venv/bin/bandit -q -r scripts/
    python -m http.server 8000   # then open http://localhost:8000
