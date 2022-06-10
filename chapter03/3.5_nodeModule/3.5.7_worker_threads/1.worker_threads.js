/**
 *  노드에서 멀티 스레드 방식으로 작업하는 방법 : worker_threads 모듈
 *
 */

const { Worker, isMainThread, parentPort } = require("worker_threads");
const log = console.log;

// isMainThread : 현재 코드가 메인스레드에서 실행되는지 우리가 생성한 워커 스레드에서 실행되는지 구분

if (isMainThread) {
  // 부모스레드 : 기존에 동작하던 싱글 스레드
  const worker = new Worker(__filename);
  worker.on("message", (message) => log("from worker", message));
  worker.on("exit", () => log("worker exit"));
  worker.postMessage("ping");
} else {
  // 워커스레드 일 때

  parentPort.on("message", (value) => {
    log("from parent", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
