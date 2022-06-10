const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const log = console.log;

if (isMainThread) {
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on("message", (message) => log("from worker", message));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        log("job done");
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
