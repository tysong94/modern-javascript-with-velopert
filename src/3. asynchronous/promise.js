// 콜백 지옥

// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if (callback) {
//             callback(increased);
//         }
//     }, 1000);
// }

// increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//         increaseAndPrint(n, m => {
//             console.log('작업 끝');
//       })  
//     })
// })

/* const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result'); //resolve : 작업이 성공했을 시 호출하는 함수.
    }, 1000)
})

// myPromise 작업이 끝날 시 수행할 함수를 입력 : then
myPromise1.then(result => {
    console.log(result);
})

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error()); //reject : 작업이 실패했을 시 호출하는 함수.
    }, 1000)
})

myPromise2.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
}) */

function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    })
}

/* increaseAndPrint(0).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).then(n => {
    return increaseAndPrint(n);
}).catch(e => {
    console.error(e);
}) */

increaseAndPrint(0).then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    })
// 단점 : 분기를 나누기 어려우며, 어느 부분에서 에러가 났는지 파악하기 어렵다.

// 이에 대한 대안: async, await