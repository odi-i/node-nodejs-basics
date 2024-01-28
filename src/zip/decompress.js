import {createReadStream, createWriteStream} from "node:fs";
import {createUnzip} from "zlib";

const FILE_PATH = new URL('files/archive.gz', import.meta.url);
const NEW_FILE_PATH = new URL('files/fileToCompress.txt', import.meta.url);

const decompress = async () => {
  const read = createReadStream(FILE_PATH);
  const compress = createUnzip()
  const write = createWriteStream(NEW_FILE_PATH);

  read.pipe(compress).pipe(write)
};

await decompress();