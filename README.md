# Civic Shield

A U.S. Immigration Policy, Assistance and Monitoring Project

A single static page, in English and Spanish, for immigrants and their neighbors:
what to do if ICE comes to the door, who to call, how to find someone in detention,
how to prepare a family, and verified enforcement numbers with links to the source.

Live at https://civicshieldproject.org/

## Files

- `index.html` / `es.html` (numbers, policy, news, Georgia — English and Spanish twins; edit both) and `help.html` (rights, hotlines; EN/ES in one file) with `styles.css`, `app.js`, `charts.js`, `tabs.js`. No build step, no CDN scripts, no API keys in the browser.


## News

`data/news.json` holds the 5 + 5 stories (bilingual) and is rendered by `news.js`. A weekly scheduled review proposes replacements as a pull request; nothing changes on the site until a person merges it.

## States

Each state is one file in `data/states/<code>.json` (bilingual fields are `{"en": ..., "es": ...}`), listed in `data/states/index.json`. `states.js` renders the "Your state" panel and validates `?state=` against that index. To add a state: write the file with a source URL on every item, add it to the index, add it to the `<select>` in `correct.html`. Corrections arrive through the Netlify form (Forms tab in the Netlify dashboard).

## Updating the verified figures

The numbers in the "The numbers, with sources" section are typed by hand on purpose.
When you update one, update the link beside it and the "Figures last checked" date in the footer.

## Local check

    python -m venv .venv && .venv/bin/pip install ruff bandit pip-audit
    .venv/bin/ruff check scripts/ && .venv/bin/bandit -q -r scripts/
    python -m http.server 8000   # then open http://localhost:8000
