import {existsSync, cp} from "node:fs";

const PATH_TO_FOLDER = "files"
const PATH_TO_NEW_FOLDER = "files_copy"

const copy = async () => {
  if (!existsSync(PATH_TO_FOLDER) || existsSync(PATH_TO_NEW_FOLDER)) {
    throw new Error("FS operation failed");
  }

  cp(PATH_TO_FOLDER, PATH_TO_NEW_FOLDER, {recursive: true}, (err) => console.error(err))
};

await copy();
