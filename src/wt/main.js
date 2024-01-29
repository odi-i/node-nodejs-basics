import { cpus } from "os";
import { Worker } from "worker_threads";

const WORKER_PATH = new URL("./worker.js", import.meta.url);

const runWorker = (n) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(WORKER_PATH, { workerData: n });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

const callAllWorkers = async (count) => {
  const promiseArray = [];

  for (let i = 10; i < 10 + count; i++) {
    const promise = runWorker(i);
    promiseArray.push(promise);
  }

  return promiseArray;
};

const performCalculations = async () => {
  const count = cpus().length;

  const results = await Promise.all(await callAllWorkers(count));

  console.log(results);
};

await performCalculations();
