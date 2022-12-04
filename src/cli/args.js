const parseArgs = () => {
  const res = [];
  process.argv.forEach((prop, index) => {
    if (prop.includes("--")) {
      const propName = prop.slice(2);
      res.push(`${propName} is ${process.argv[index + 1]}`);
    }
  });

  console.log(res.join(", "));
};

parseArgs();
