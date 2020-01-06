const path = require("path");
const fs = require("fs");
const rm = require("./rm");

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

module.exports = rmrf;
