import {argv} from "node:process";

const PREFIX = "--";

const parseArgs = () => {
  for (let i = 0; i < argv.length; i = i + 2) {
    if(argv[i].includes(PREFIX)) console.log(`${argv[i].replace(PREFIX, '')} is ${argv[i + 1]}`)
  }
};

parseArgs();