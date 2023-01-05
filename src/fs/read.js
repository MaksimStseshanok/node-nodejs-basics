import fs from "fs/promises";
import { error, defaultPath } from "./constants.js";

const read = async () => {
  try {
    const content = await fs.readFile(`${defaultPath}/fileToRead.txt`, {
      encoding: "utf-8",
    });
    console.log(content);
  } catch {
    console.log(error);
  }
};

await read();
