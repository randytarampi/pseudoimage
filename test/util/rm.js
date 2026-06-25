import fs from "node:fs";

const rm = filename => {
    fs.unlinkSync(filename);
};

export default rm;
