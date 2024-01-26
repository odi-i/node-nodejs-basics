import {existsSync, readFile} from "node:fs";

const PATH_TO_READ = "files/fileToRead.txt"

const read = async () => {
  if (!existsSync(PATH_TO_READ)) {
    throw new Error("FS operation failed");
  }

  readFile(PATH_TO_READ, (err, data) => {
    console.log(data.toString())
  })
};

await read();