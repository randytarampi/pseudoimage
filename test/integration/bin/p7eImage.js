import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {expect} from "chai";
import childProcess from "node:child_process";
import {rm} from "../../util/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe("p7eImage", function () {
    this.timeout(60000);

    it("throws an error when given no input", function () {
        const stubArguments = [];

        return new Promise((resolve, reject) => {
            childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.be.ok;
                    expect(stdout).to.eql("");
                    expect(stderr).to.match(/error: missing required argument 'sourceImagePath'/);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    it("throws an error when given a non-existent sourceImagePath", function () {
        const sourceFile = path.join(__dirname, "../../resources/woof.meow");
        const stubArguments = [
            sourceFile
        ];

        return new Promise((resolve, reject) => {
            childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.be.ok;
                    expect(stdout).to.eql("");
                    expect(stderr).to.match(/ENOENT/);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    it("throws an error when given a non-file", function () {
        const sourceFile = path.join(__dirname, "../../resources/subdirectory/");
        const stubArguments = [
            sourceFile
        ];

        return new Promise((resolve, reject) => {
            childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.be.ok;
                    expect(stdout).to.eql("");
                    expect(stderr).to.match(/must be a file/);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    it("sets a default `destinationPath`", function () {
        const sourceFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.jpeg");
        const stubArguments = [
            sourceFile
        ];
        const expectedDestinationFile = path.join(path.dirname(sourceFile), `${path.basename(sourceFile, path.extname(sourceFile))}.pseudoimage${path.extname(sourceFile)}`);

        return new Promise((resolve, reject) => {
            childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.eql(null);
                    expect(stdout).to.eql("");
                    expect(stderr).to.eql("");
                    expect(fs.lstatSync(expectedDestinationFile).isFile()).to.eql(true);
                    rm(expectedDestinationFile);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    it("accepts a `destinationPath`", function () {
        const sourceFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.jpeg");
        const destinationFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.pseudoimage.manual.jpeg");
        const stubArguments = [
            sourceFile,
            destinationFile
        ];

        return new Promise((resolve, reject) => {
            childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                try {
                    expect(error).to.eql(null);
                    expect(stdout).to.eql("");
                    expect(stderr).to.eql("");
                    expect(fs.lstatSync(destinationFile).isFile()).to.eql(true);
                    rm(destinationFile);
                    resolve();
                } catch (expectationError) {
                    reject(expectationError);
                }
            });
        });
    });

    describe("preset", function () {
        it("throws an error when given a bad preset", function () {
            const sourceFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.jpeg");
            const stubArguments = [
                "--preset=foo",
                sourceFile
            ];

            return new Promise((resolve, reject) => {
                childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.be.ok;
                        expect(stdout).to.eql("");
                        expect(stderr).to.match(/error: option '-p --preset <preset>' argument 'foo' is invalid. Allowed choices are retina, half./);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });

        it("uses a specified preset", function () {
            const sourceFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.jpeg");
            const stubArguments = [
                "--preset=half",
                sourceFile
            ];
            const expectedDestinationFile = path.join(path.dirname(sourceFile), `${path.basename(sourceFile, path.extname(sourceFile))}.pseudoimage${path.extname(sourceFile)}`);

            return new Promise((resolve, reject) => {
                childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.eql(null);
                        expect(stdout).to.eql("");
                        expect(stderr).to.eql("");
                        rm(expectedDestinationFile);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });

        it("defaults to no preset", function () {
            const sourceFile = path.join(__dirname, "../../resources/photo-1450685810341-e56f8424bbcc.jpeg");
            const stubArguments = [
                sourceFile
            ];
            const expectedDestinationFile = path.join(path.dirname(sourceFile), `${path.basename(sourceFile, path.extname(sourceFile))}.pseudoimage${path.extname(sourceFile)}`);

            return new Promise((resolve, reject) => {
                childProcess.execFile(path.join(__dirname, "../../../bin/p7eImage.js"), stubArguments, (error, stdout, stderr) => {
                    try {
                        expect(error).to.eql(null);
                        expect(stdout).to.eql("");
                        expect(stderr).to.eql("");
                        rm(expectedDestinationFile);
                        resolve();
                    } catch (expectationError) {
                        reject(expectationError);
                    }
                });
            });
        });
    });
});
