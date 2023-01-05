import { writeFile, readFile } from "fs/promises";

const create = async () => {
  try {
    await readFile("./src/fs/files/fresh.txt", "utf8");
    console.log("FS operation failed");
  } catch {
    await writeFile("./src/fs/files/fresh.txt", "I am fresh and young");
  }
};

await create();
