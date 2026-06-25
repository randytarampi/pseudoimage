import path from "node:path";
import fs from "node:fs";
import rm from "./rm.js";

const rmrf = dir => {
    try {
        let files = fs.readdirSync(dir);

        files.forEach(function (file) {
            let filename = path.join(dir, file);

            if (fs.statSync(filename).isDirectory()) {
                rmrf(filename);
            } else {
                rm(filename);
            }
        });
        fs.rmdirSync(dir);
    } catch (error) {
        if (error.code === "ENOENT") {
            return;
        }

        throw error;
    }
};

export default rmrf;
