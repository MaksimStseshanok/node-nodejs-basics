import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const inputFile = fs.createReadStream("./src/zip/files/archive.gz");
  const outputFile = fs.createWriteStream("./src/zip/files/fileToCompress.txt");

  inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
};

await decompress();
