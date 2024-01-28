import {createReadStream} from "node:fs";
import {createHash} from "node:crypto";

const HASH_METHOD = 'sha256'
const FILE_PATH = new URL('files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
  const input = createReadStream(FILE_PATH);

  input.on('readable', () => {
    const hash = createHash(HASH_METHOD);
    const data = input.read();

    if (data) {
      hash.update(data);
      process.stdout.write(hash.digest('hex'));
    }
  })
}

await calculateHash();
