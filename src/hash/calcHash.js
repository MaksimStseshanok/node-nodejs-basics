import fs from "fs/promises";
import { createHash } from "crypto";

const calculateHash = async () => {
  const buff = await fs.readFile("./src/hash/files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256").update(buff).digest("hex");
  console.log(hash);
};

await calculateHash();
