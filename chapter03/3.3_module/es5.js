/**
 * ? 자바스크립트에서도 시스템 문법이 있다.
 * ? 노드는 왜 자바스크립트의 모듈 시스템을 안쓰는가?
 * ? 노드에서 먼저 모듈 시스템이 나왔는데 자바스크립트의 모듈 시스템이 서로 일치하지 않음.
 * ? 기존 코드의 붕괴 우려  최신 문법 지원은 가능
 */

/**
 * require 와 import는 동작하는게 다르다 무조건 1:1대응은 아니다
 */

import { odd, even } from "./var";

const checkOddOrEven = (number) => {
  if (number % 2) return odd;
  else return even;
};

export default checkOddOrEven;
