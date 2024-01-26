import {existsSync, rename as renameFile} from "node:fs";

const PATH_TO_FILE = "files/wrongFilename.txt"
const PATH_TO_RENAMED_FILE = "files/properFilename.md"

const rename = async () => {
  if (!existsSync(PATH_TO_FILE) || existsSync(PATH_TO_RENAMED_FILE)) {
    throw new Error("FS operation failed");
  }

  renameFile(PATH_TO_FILE, PATH_TO_RENAMED_FILE, (err) => console.error(err))
};

await rename();