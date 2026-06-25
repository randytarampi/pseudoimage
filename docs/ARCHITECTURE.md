# Architecture

`pseudoimage` is a single-package CLI/library.

## Layout
- `bin/` holds the command entrypoints (`p7eImage.js`, `p7eImages.js`).
- `lib/pseudoimage.js` is the library entry point.
- `test/` contains the Mocha suite.
- Published output is limited to `bin/`, `lib/`, and `npm-shrinkwrap.json`.

## Dependency shape
- The package depends on `@randy.tarampi/lwip` for image manipulation.
- `commander` powers the CLI surface and `mkdirp` handles folder creation.
