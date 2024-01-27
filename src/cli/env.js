const PREFIX = "RSS_";

const parseEnv = () => {
  const allEnv = process.env;

  for (let elem of Object.entries(allEnv)) {
    if(elem[0].includes(PREFIX)) console.log(`${elem[0]}=${elem[1]}`)
  }
};

parseEnv();