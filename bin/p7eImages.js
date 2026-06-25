#!/usr/bin/env node

import path from "node:path";
import {readFileSync} from "node:fs";
import {program as commander, Option} from "commander";
import Pseudoimage from "../lib/pseudoimage.js";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

commander
    .version(packageJson.version)
    .usage("[options] <sourceDirectory> [destinationDirectory]")
    .description("ʕつ◕ᴥ◕ʔつ 📷 → Your application's pseudolocales' image folders")
    .addOption(new Option("-p --preset <preset>", "Use a preset pseudolocalizer {retina|half}").choices(["retina", "half"]))
    .argument("<sourceDirectory>", "Source directory")
    .argument("[destinationDirectory]", "Destination directory")
    .action((sourceDirectory, destinationDirectory, options) => {
        if (!destinationDirectory) {
            destinationDirectory = path.join(path.sep, `${sourceDirectory.split(path.sep).filter(component => !!component).join(path.sep)}-pseudoimages`);
        }

        let pseudoimage;
        if (options.preset) {
            if (typeof options.preset !== "string") {
                console.error("Please specify a proper preset");  
                process.exit(1);
            }
            pseudoimage = Pseudoimage[options.preset](sourceDirectory, destinationDirectory);
        } else {
            pseudoimage = new Pseudoimage(sourceDirectory, destinationDirectory);
        }

        return pseudoimage.generatePseudoImages()
            .then(() => {
                process.exit(0);
            })
            .catch(error => {
                console.error(`Failed to generate pseudoimages (${destinationDirectory}) from source (${sourceDirectory}) with error:\n`, error);  
                process.exit(1);
            });
    });

commander.parse(process.argv);
