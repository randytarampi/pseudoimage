# AGENTS.md

`pseudoimage` is a small CLI/library package that turns pseudolocales into image-folder helpers. It is a single-package project with a thin binary wrapper over the library code.

Canonical commands:
- `yarn test`
- `yarn cover`

Details:
- [Architecture](docs/ARCHITECTURE.md)
- [Conventions](docs/CONVENTIONS.md)
- [Limitations](docs/LIMITATIONS.md)

## How to add/enrich/update guidance in this repo
- Keep this file brief; add detail only in the focused docs.
- Update `ARCHITECTURE.md` when the CLI, library surface, or published files change.
- Update `CONVENTIONS.md` when Node, module format, linting, or release rules change.
- Keep `LIMITATIONS.md` for unresolved issues only.
