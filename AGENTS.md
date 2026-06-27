# AGENTS.md

`pseudoimage` is a pseudolocal image-generation library for test fixtures. It is ESM on Node 24 with Yarn 4.17, Gulp 5, Mocha, and ESLint v9 (not v10; the peer-dep pin matters).

Canonical commands:
- `yarn test`
- `yarn lint`
- `yarn clean`
- `yarn cover`

Notes:
- `@randy.tarampi/lwip` is a portal link to the sibling `lwip` repo, so local changes there are picked up live.

## How to add/enrich/update guidance in this repo
- Keep this file short and put implementation detail in `docs/*`.
- Update `docs/ARCHITECTURE.md` when the CLI surface, library layout, or published files change.
- Update `docs/CONVENTIONS.md` when Node, linting, or release rules change.
- Keep `docs/LIMITATIONS.md` for unresolved issues only.
