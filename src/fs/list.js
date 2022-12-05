import fs from "fs/promises";
import { defaultPath, error } from "./constants.js";

const list = async () => {
  try {
    const files = await fs.readdir(defaultPath);
    files.forEach((file) => console.log(file));
  } catch {
    console.log(error);
  }
};

await list();
