// 자바스크립트는 비동기적인 언어
// -> 기본적으로 multi-thread로 돌아감

let sum = 0;
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    const end = Date.now();
    console.log(end - start + "ms");
    callback();
  }, 0)
}
console.log("작업 시작");
work(() => {
  console.log(sum);
});
console.log("다음 작업");
// 비동기적으로 처리하는 자바 스크립트 내부 함수 AJAX API 요청
// - 파일 읽기
// - 암호화 / 복호화
// - 작업 예약 / 작업 반복 (setTimeout, setInterval)

// ! fetch API 이용
// ? 프로미스(promise)
// : 비동기 작업의 결과를 나타내는 객체
// - 프로미스 이용 시 비동기 호출 실행 할 때 코드 간소화 가능
// 상태
// 1. 대기: 초기 상태
// 2. 이행 : 작업 성공
// 3. 거부 : 작업 실패

// fetch()
//   .then(response => { // response로 필요한 작업 수행
//   })
// fetch함수는 프로미스를 지원하기 때문에 비동기 호출 실행 가능
// - 응답이 반환되면 비동기 호출 수행되고 
//   then 메소드 내 콜백함수가 response를 인수로 받고 실행됨

// 여러 then인스턴스를 체인으로 연결
// => 비동기 작업을 순서대로 실행 가능
// fetch()
//   .then(response => // response에서 data 얻음) 
//   .then(data => // data로 필요한 작업을 수행)

// catch() - 프로미스 예외 처리
// fetch()
//   .then(Response => /* response에서 data 얻음*/)
//   .then(data => /* data로 필요한 작업을 수행*/)
//   .catch(error => error /*실패 시 필요한 작업*/)
// ECMAScript 2017에는 async/await를 이용하는 최신 비동기 호출 처리방식 추가됨
// but 아직 프로미스만큼 널리 쓰이진 X
// async/await - 프로미스 기반
// - 이용하려면 await식 포함할 수 있는 async함수 정의해야 함

// ? async/await 포함하는 비동기 호출 예
const doAsyncCall = async() => {

}
async function doAsyncCall2() {
  const response = await fetch()
  const data = await response.json()
  // data로 필요한 작업 수행
  try {

  } catch(e){
    
  }
}