import {createReadStream, createWriteStream} from "node:fs";
import {createGzip} from "zlib";

const FILE_PATH = new URL('files/fileToCompress.txt', import.meta.url);
const NEW_FILE_PATH = new URL('files/archive.gz', import.meta.url);

const compress = async () => {
  const read = createReadStream(FILE_PATH);
  const compress = createGzip()
  const write = createWriteStream(NEW_FILE_PATH);

  read.pipe(compress).pipe(write)
};

await compress();