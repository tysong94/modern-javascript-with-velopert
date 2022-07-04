// id가 있을 때
// const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');

// id가 없을 때
const number = document.querySelector("h2");
const [increase, decrease] = document.querySelectorAll("button");

console.log(number);
console.log(increase);
console.log(decrease);

increase.onclick = () => {
    console.log('increase가 클릭됨');
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}
decrease.onclick = () => {
    console.log('decrease가 클릭됨');
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}


