/* 
async 선언된 함수 자체는 비동기로 처리되나, 
내부의 await 선언된 함수는 기다린다.(동기적으로 처리된다.) 
그리고 async로 선언된 함수도 promise를 반환한다.

async await 문에서 에러를 잡고 싶을 때는, try catch로 잡으면 된다.

Promise 객체 자체는 비동기가 아니며, 
setTimeout 자체가 비동기 함수이다.**
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function process() {
    console.log('안녕하세요!');
    sleep(1000); // Promise를 반환하는 함수에 await을 붙여준다.
    // Promise를 기다리는 작업을 .then을 사용하는 대신 그냥 기다리면 된다.
    console.log('반갑습니다.');
    return true;
}

process();
// process().then(value => {
//     console.log(value);
// });
        
// async function makeError() {
//     await sleep(1000);
//     const error = new Error();
//     throw error;
// }
        
// async function process() {
//     try {
//         await makeError();
//     } catch (e) { 
//         console.error(e);
//     }
// }

// process();

