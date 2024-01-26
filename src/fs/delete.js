import {existsSync, rm} from "node:fs";

const PATH_TO_DELETE = "files/fileToRemove.txt"

const remove = async () => {
  if (!existsSync(PATH_TO_DELETE)) {
    throw new Error("FS operation failed");
  }

  rm(PATH_TO_DELETE, () => {})
};

await remove();