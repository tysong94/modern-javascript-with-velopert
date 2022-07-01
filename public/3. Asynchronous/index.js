function work() {
  setTimeout(() => { 
    const startTime = Date.now();
    for (let i =0; i < 1000000000; i++) {
      
    }
    const endTime = Date.now();
    console.log(endTime - startTime + 'ms');
  }, 0); //setTimeout : 비동기 함수, 숫자는 일정 시간 후에 함수 실행.
}

console.log('작업 시작');
work();
console.log('다음 작업');