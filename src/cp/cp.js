import { fork } from "child_process";

const SCRIPT_PATH = new URL("files/script.js", import.meta.url);

const spawnChildProcess = async (args) => {
  fork(SCRIPT_PATH, args);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
