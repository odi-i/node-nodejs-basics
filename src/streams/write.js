import {createWriteStream} from "node:fs";

const FILE_PATH = new URL('files/fileToWrite.txt', import.meta.url);

const write = async () => {
  const writeableStream = createWriteStream(FILE_PATH);

  process.stdin.pipe(writeableStream)
};

await write();