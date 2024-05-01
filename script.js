let displayNum = 0;
let currentSymbol = '';
let x = '';
let y = 0;

const add_button = document.getElementById('add');
const subtract_button = document.getElementById('subtract');
const multiply_button = document.getElementById('multiply');
const divide_button = document.getElementById('divide');
const numbers = document.getElementsByClassName('numbers');

function get_num() {
    let num = this.innerHTML;
    
    x += num;
    console.log(x);
}
for (let i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener('click', get_num);
}
add_button.addEventListener('click', ()=>  {
    currentSymbol = 'add';
})
subtract_button.addEventListener('click', ()=>  {
    currentSymbol = 'subtract';
})
multiply_button.addEventListener('click', ()=>  {
    currentSymbol = 'multipy';
})
divide_button.addEventListener('click', ()=>  {
    currentSymbol = 'divide';
})

function add(x, y, ...args) {
    let sum = x + y;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
function subtract(x, y, ...args) {
    let sum = x - y;
    for(const arg of args) {
        sum -= arg;
    }
    return sum;
}
function multiply(x, y , ...args) {
    let sum = x * y;
    for (const arg of args ) {
        sum *= arg;
    }
    return sum;
}
function divide(x, y) {
    let sum = x / y;
    return sum;
}
console.log(add_button)


