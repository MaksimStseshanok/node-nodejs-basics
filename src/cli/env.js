const parseEnv = () => {
  const prefix = "RSS_";
  const envKeys = Object.keys(process.env);

  for (const key of envKeys) {
    if (key.includes(prefix)) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
};

parseEnv();
