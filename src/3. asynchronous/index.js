function work(callback) {
  setTimeout(() => { 
    const startTime = Date.now();
    for (let i =0; i < 1000000000; i++) {
      
    }
    const endTime = Date.now();
    console.log(endTime - startTime + 'ms');

    callback(endTime - startTime); // 해당 파라미터(end - start)를 넘겨 인자로 들어간 함수(callback)를 호출함.
  }, 0); //setTimeout : 비동기 함수, 숫자는 일정 시간 후에 함수 실행.
}

console.log('작업 시작');
work((ms) => {
  console.log('작업이 끝났어요');
  console.log(ms + 'ms 걸렸다고 합니다.');
});
console.log('다음 작업');

