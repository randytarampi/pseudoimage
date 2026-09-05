# ʕつ◕ᴥ◕ʔつ 📷 → Your application's pseudolocales' image folders

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/pseudoimage.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)
[![CI](https://img.shields.io/github/actions/workflow/status/randytarampi/pseudoimage/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/randytarampi/pseudoimage/actions/workflows/ci.yml) [![Qlty Coverage](https://qlty.sh/gh/randytarampi/projects/pseudoimage/coverage.svg)](https://qlty.sh/gh/randytarampi/projects/pseudoimage) [![AppVeyor](https://img.shields.io/appveyor/build/randytarampi/pseudoimage/main?style=flat-square)](https://ci.appveyor.com/project/randytarampi/pseudoimage) [![CodeQL](https://img.shields.io/github/actions/workflow/status/randytarampi/pseudoimage/codeql.yml?branch=main&style=flat-square&label=CodeQL)](https://github.com/randytarampi/pseudoimage/security/code-scanning) [![License](https://img.shields.io/github/license/randytarampi/pseudoimage?style=flat-square)](LICENSE) [![Issues](https://img.shields.io/github/issues/randytarampi/pseudoimage?style=flat-square)](https://github.com/randytarampi/pseudoimage/issues) [![Pull requests](https://img.shields.io/github/issues-pr/randytarampi/pseudoimage?style=flat-square)](https://github.com/randytarampi/pseudoimage/pulls)


[![Install @randy.tarampi/pseudoimage](https://nodeico.herokuapp.com/@randy.tarampi/pseudoimage.svg)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)

## Dependencies

```bash
brew install nvm
nvm install 24
corepack enable
```

This repo resolves `@randy.tarampi/lwip` through `portal:../lwip`, so keep the `lwip` repo checked out next door for local dev.

## Installation

```bash
yarn install
```

## Verification

Run the complete CI sequence locally with `yarn verify:ci`.

This uses [@randy.tarampi/lwip](https://github.com/randytarampi/lwip) to modify your images to create a fake, which gets saved somewhere.

## Usage

```javascript
let Pseudoimage = require("@randy.tarampi/pseudoimage");
let sourceDirectory = "/Users/randy.tarampi/Desktop/images";
let destinationDirectory = "/Users/randy.tarampi/Desktop/fakeImages";
let expect = require("chai").expect;

let pseudoimage = new Pseudoimage(sourceDirectory, destinationDirectory);
pseudoimage.generatePseudoImages();

// There should be a copy for each supported image in `sourceDirectory` in `destinationDirectory`
let files = fs.readdirSync(sourceDirectory);
files.map((file) => {
	openImage(file)
		.then((image) => {
			expect(images[0].width()).to.eql(images[1].width());
			expect(images[0].height()).to.eql(images[1].height());
		})
		.catch((error) => {
			console.error(error); // Shouldn't see any errors
		});
});

function openImage(imagePath) {
	return new Promise((resolve, reject) => {
		pseudoimage.open(imagePath, (error, image) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(image);
		})
	});
}
```
