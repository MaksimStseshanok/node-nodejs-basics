import fs from "fs/promises";

const remove = async () => {
  try {
    await fs.access("./src/fs/files/fileToRemove.txt");
    fs.unlink("./src/fs/files/fileToRemove.txt");
  } catch {
    console.log("FS operation failed");
  }
};

await remove();
