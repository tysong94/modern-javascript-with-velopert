function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return 'dog';
} 

const getRabbit = async () => {
    await sleep(500);
    return 'rabbit';
} 

const getTurtle = async () => {
    await sleep(1000);
    return 'turtle';
} 

// 여러 프로미스를 동시에 수행 및 결과값 반환
async function process() {
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog, rabbit, turtle);
}

// 여러 프로미스 중 가장 빨리 수행되는 결과값 반환
async function process2() {
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);
}

process();

process2();
