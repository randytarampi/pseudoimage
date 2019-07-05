# ʕつ◕ᴥ◕ʔつ 📷 → Your application's pseudolocales' image folders

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage) 
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage) 
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage) 
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@randy.tarampi/pseudoimage.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage) 
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/pseudoimage.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage) 
[![Build status](https://img.shields.io/travis/com/randytarampi/pseudoimage.svg?style=flat-square)](https://travis-ci.com/randytarampi/pseudoimage) 
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pseudoimage.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pseudoimage?branch=master) 
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pseudoimage.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pseudoimage/maintainability)
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/me/tree/master/packages/pseudoimage?flat&useReferrer)](https://github.com/igrigorik/ga-beacon) 
[![Greenkeeper badge](https://badges.greenkeeper.io/randytarampi/pseudoimage.svg)](https://greenkeeper.io/)

[![Install @randy.tarampi/pseudoimage](https://nodeico.herokuapp.com/@randy.tarampi/pseudoimage.svg)](https://www.npmjs.com/package/@randy.tarampi/pseudoimage)

This uses [lwip](https://github.com/kant2002/lwip) to modify your images to create a fake, which gets saved somewhere.

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
