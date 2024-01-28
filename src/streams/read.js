import {createReadStream} from "node:fs";

const FILE_PATH = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
  const input = createReadStream(FILE_PATH);

  input.on('readable', () => {
    const data = input.read();

    if (data) {
      process.stdout.write(data);
    }
  })
};

await read();