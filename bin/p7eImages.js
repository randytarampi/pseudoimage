#!/usr/bin/env node

const path = require("path");
const commander = require("commander");
const Pseudoimage = require("../lib/pseudoimage");
const packageJson = require("../package.json");

commander
    .version(packageJson.version)
    .usage("[options] <sourceDirectory> [destinationDirectory]")
    .description("ʕつ◕ᴥ◕ʔつ 📷 → Your application's pseudolocales' image folders")
    .option("-p --preset <preset>", "Use a preset pseudolocalizer {retina|half}", /^(retina|half)$/gm)
    .action((commander, [sourceDirectory, destinationDirectory] = []) => {
        if (!commander.args.length) {
            console.error("Please supply a sourceDirectory"); // eslint-disable-line no-console
            process.exit(1);
        }

        if (!destinationDirectory) {
            destinationDirectory = path.join(path.sep, `${sourceDirectory.split(path.sep).filter(component => !!component).join(path.sep)}-pseudoimages`);
        }

        let pseudoimage;
        if (commander.preset) {
            if (typeof commander.preset !== "string") {
                console.error("Please specify a proper preset"); // eslint-disable-line no-console
                process.exit(1);
            }
            pseudoimage = Pseudoimage[commander.preset](sourceDirectory, destinationDirectory);
        } else {
            pseudoimage = new Pseudoimage(sourceDirectory, destinationDirectory);
        }

        return pseudoimage.generatePseudoImages()
            .then(() => {
                process.exit(0);
            })
            .catch(error => {
                console.error(`Failed to generate pseudoimages (${destinationDirectory}) from source (${sourceDirectory}) with error:\n`, error); // eslint-disable-line no-console
                process.exit(1);
            });
    });

commander.parse(process.argv);
