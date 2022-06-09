// global은 전역 객체라는 점을 이용하여 파일간에 간단한 데이터를 공유할 때 사용하기도 한다

module.exports = () => global.message;
