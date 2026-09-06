import childProcess from "node:child_process";

export default function execFile(file, args, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    }

    return childProcess.execFile(process.execPath, [file, ...args], options, callback);
}
