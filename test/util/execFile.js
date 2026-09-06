import childProcess from "node:child_process";

export default function execFile(file, args, callback) {
    return childProcess.execFile(process.execPath, [file, ...args], callback);
}
