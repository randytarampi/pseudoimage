import {expect} from "chai";
import {execFile} from "../../util/index.js";

describe("execFile", function () {
    it("should pass options through to child_process.execFile", function () {
        return new Promise(resolve => {
            execFile("-e", ["process.stdout.write(\"ab\")"], {maxBuffer: 1}, error => {
                expect(error).to.have.property("code", "ERR_CHILD_PROCESS_STDIO_MAXBUFFER");
                resolve();
            });
        });
    });
});
