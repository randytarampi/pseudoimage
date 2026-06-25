#!/usr/bin/env node

import path from "node:path";
import {readFileSync} from "node:fs";
import {program as commander, Option} from "commander";
import Pseudoimage from "../lib/pseudoimage.js";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

let pseudoimage;

commander
    .version(packageJson.version)
    .usage("[options] <sourceImagePath> [destinationImagePath]")
    .description("ʕつ◕ᴥ◕ʔつ 📷 → pseudoimages")
    .addOption(new Option("-p --preset <preset>", "Use a preset pseudolocalizer {retina|half}").choices(["retina", "half"]))
    .argument("<sourceImagePath>", "Source image path")
    .argument("[destinationImagePath]", "Destination image path")
    .action((sourceImagePath, destinationImagePath, options) => {
        if (!destinationImagePath) {
            destinationImagePath = path.join(path.dirname(sourceImagePath), `${path.basename(sourceImagePath, path.extname(sourceImagePath))}.pseudoimage${path.extname(sourceImagePath)}`);
        }

        if (options.preset) {
            if (typeof options.preset !== "string") {
                console.error("Please specify a proper preset");  
                process.exit(1);
            }
            pseudoimage = Pseudoimage[options.preset]();
        } else {
            pseudoimage = new Pseudoimage();
        }

        return pseudoimage.generatePseudoImage(sourceImagePath, destinationImagePath)
            .then(() => {
                process.exit(0);
            })
            .catch(error => {
                console.error(`Failed to generate pseudoimage (${destinationImagePath}) from source (${sourceImagePath}) with error:\n`, error);  
                process.exit(1);
            });
    });

commander.parse(process.argv);
