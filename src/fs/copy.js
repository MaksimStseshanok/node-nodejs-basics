import fs from "fs/promises";

const checkPath = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const copy = async () => {
  const pathToFiles = "./src/fs/files";
  const pathToCopyFiles = "./src/fs/files_copy";

  const isAccessToFiles = await checkPath(pathToFiles);
  const isAccessToCopyFiles = await checkPath(pathToCopyFiles);

  if (!isAccessToFiles || isAccessToCopyFiles) {
    console.log("FS operation failed");
  } else {
    const files = await fs.readdir(pathToFiles);
    await fs.mkdir(pathToCopyFiles);

    files.forEach(async (file) => {
      const content = await fs.readFile(`${pathToFiles}/${file}`);

      await fs.writeFile(`${pathToCopyFiles}/${file}`, content);
    });
  }
};

await copy();
