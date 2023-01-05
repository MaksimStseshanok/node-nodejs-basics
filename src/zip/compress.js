import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const inputFile = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  const outputFile = fs.createWriteStream("./src/zip/files/archive.gz");

  inputFile.pipe(zlib.createGzip()).pipe(outputFile);
};

await compress();
