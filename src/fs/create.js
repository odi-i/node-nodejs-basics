import { existsSync, appendFile } from 'node:fs';

const PATH_TO_FILE = "files/fresh.txt"
const CONTENT = "I am fresh and young"

const create = async () => {
  if (existsSync(PATH_TO_FILE)) {
    throw new Error("FS operation failed");
  }

  appendFile(PATH_TO_FILE, CONTENT, () => {});
};

await create();