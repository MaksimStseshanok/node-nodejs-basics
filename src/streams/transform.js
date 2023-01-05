const transform = async () => {
  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();

    process.stdout.write(chunk.toString().split("").reverse().join(""));
  });
};

await transform();
