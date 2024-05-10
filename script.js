
let currentSymbol = '';
let x = '';
let y = 0;

const add_button = document.getElementById('add');
const subtract_button = document.getElementById('subtract');
const multiply_button = document.getElementById('multiply');
const divide_button = document.getElementById('divide');
const equal_button = document.getElementById('equal');
const numbers = document.getElementsByClassName('numbers');
const displayNum = document.getElementById('displayNumber');
const displaySymbol = document.getElementById('displaySymbol');


function get_num() {
    if (currentSymbol == 'equals') {
        x = ''
        y = 0;
        currentSymbol = ''
        displaySymbol.innerHTML = '';
    }
    num = this.innerHTML;
    x += num;
    displayNum.innerHTML = x;
    console.log(x);
}
for (let i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener('click', get_num);
}
add_button.addEventListener('click', ()=>  {
    if (currentSymbol !== '') {
        equals(currentSymbol);
    }
    y = x;
    x = '';
    currentSymbol = 'add';
    displaySymbol.innerHTML = "+";
})
subtract_button.addEventListener('click', ()=>  {
    if (currentSymbol !== '') {
        console.log(currentSymbol);
        equals(currentSymbol)
    }
    y = x;
    x = '';
    currentSymbol = 'subtract';
    displaySymbol.innerHTML = '-';
    console.log(y);
    
})
multiply_button.addEventListener('click', ()=>  {
    if (currentSymbol !== '') {
        console.log(currentSymbol);
        equals(currentSymbol)
    }
    y = x;
    x = '';
    currentSymbol = 'multiply';
    displaySymbol.innerHTML = "x";
})
divide_button.addEventListener('click', ()=>  {
    if (currentSymbol !== '') {
        console.log(currentSymbol);
        equals(currentSymbol)
    }
    y = x;
    x = '';
    currentSymbol = 'divide';
    displaySymbol.innerHTML = "/";
})
equal_button.addEventListener('click', ()=> {
    equals(currentSymbol);
    displayNum.innerHTML = x;
    currentSymbol = 'equals';
    displaySymbol.innerHTML = '=';
} )

function equals(currentSymbol) {
    switch (currentSymbol) {
        case 'add': {
            x = add(+x,+y);
            console.log(x);
            break;
        }
        case 'subtract': {
            x = subtract(+y,+x);
            console.log(x);
            break;
        }
        case 'multiply': {
            x = multiply(+x,+y);
            console.log(x);
            break;
        }
        case 'divide': {
            
            x = divide(+y,+x);
            console.log(x);
            break;
        }  
        case 'equals': {
            break;
        }
    }
}

// ----------------- Math Operator Functions -------------------
function add(x, y,) {
    let sum = x + y;
    return sum;
}
function subtract(x, y) {
    let sum = x - y;
    
    return sum;
}
function multiply(x, y ) {
    let sum = x * y;
    
    return sum;
}
function divide(x, y) {
    let sum = x / y;
    return sum;
}



