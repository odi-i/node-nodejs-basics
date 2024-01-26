import {existsSync, readdir} from "node:fs";

const PATH_TO_CHECK_NAMES = "files"

const list = async () => {
  if (!existsSync(PATH_TO_CHECK_NAMES)) {
    throw new Error("FS operation failed");
  }

  readdir(PATH_TO_CHECK_NAMES, (err, files) => {
    for (let file of files) {
      console.log(file)
    }
  })
};

await list();