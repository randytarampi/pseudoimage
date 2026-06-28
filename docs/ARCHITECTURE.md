# Architecture

`pseudoimage` is a single-package CLI/library for building image folders from pseudolocales.

## Layout
- `bin/` holds the CLI entrypoints exposed by npm.
- `lib/pseudoimage.js` is the public library entry point.
- `test/unit` covers the library helpers; `test/integration` covers the CLI and filesystem behavior.
- Published output is limited to `bin/`, `lib/`, and `npm-shrinkwrap.json`.

## Dependency shape
- The package depends on `@randy.tarampi/lwip` for image manipulation.
- `commander` powers the CLI surface and `mkdirp` handles folder creation.

## CI/CD Pipeline
- `.github/workflows/ci.yml` runs tests on PRs on Node 24.
- `.github/workflows/release.yml` does master-branch semantic-release with OIDC trusted publishing.
