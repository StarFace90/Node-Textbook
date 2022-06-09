const log = console.log;

// 노드는 os 모듈에 운영체제의 정보가 담겨있다
const os = require("os");

let platform = os.platform();

log(`운영체제의 정보 ----`);
log(`os.arch: 아키텍처 정보`, os.arch());
if (platform === "darwin") log(`os.platform : MAC OS 입니다.`);
else if (platform === "linux") log(`os.platform : Linux 입니다`);
else if (platform === "win32") log(`os.platform: Win32 입니다.`);
else log("그외의 OS");
log(`os.type: 운영체제의 종류,`, os.type()); // Darwin = MacOS
log(`os.uptime: 운영체제 부팅 이후 흐른시간 `, os.uptime());
log(`os.hostname: 컴퓨터의 이름 `, os.hostname());
log(`os.release: 운영체제의 버전 `, os.release());

log(`경로---------`);
log(`os.homedir: 홈 디렉터리 경로  `, os.homedir());
log(`os.tmpdir: 임시 파일 저장 경로 `, os.tmpdir());

log(`cpu 정보 ----------`);
log(`os.cpus: 컴퓨터의 코어 정보 `, os.cpus());
log(`os.cpus().length:`, os.cpus().length + `코어`);
// ? 노드에서 cluster 모듈을 사용하면 멀티스레드 사용가능

log(`메모리 정보 ---------`);
log(`os.freemem: 사용가능한 메모리`, os.freemem());
log(`os.totalmem: 전체 메모리 용량`, os.totalmem());
