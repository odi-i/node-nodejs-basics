import { workerData as n, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const number = nthFibonacci(n);

  parentPort.postMessage({
    status: typeof number === "number" ? "resolved" : "error",
    data: typeof number === "number" ? number : null,
  });
};

sendResult();
