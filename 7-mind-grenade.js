// So we didn't export this and all we did was invoke the function, then required it in the 'app.js' folder
const num1 = 10;
const num2 = 5;

function addValues() {
    console.log(`The sum is: ${num1 + num2}`);
}

addValues();