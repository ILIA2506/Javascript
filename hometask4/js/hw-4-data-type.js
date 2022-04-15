'use strict'

// TASK 1
let mass = [2, 1, 3, 4, 55, 65, 76, -1, -2, -34, -43, -55];
let new_mass = [];
for (let number of mass) {
    if (number < 0) {
        new_mass.push(number);
    }
}
console.log(new_mass);

// TASK 2

let scope = [];
let minV = 300;
let minInd;
let maxV = 5;
let maxInd;
let elem;
let i = 0;
for ( i = 0; i < 7; i++ ) {
    elem = Math.round( Math.random() * 300 - 6 + 6 );
    scope.push(elem);
    if (elem < minV) {
        minV = elem;
        minInd = i;
    } 
    if (elem > maxV) {
        maxV = elem;
        maxInd = i;
    }
} console.log(scope);


// TASK 3

let newArr = [];
let string;
while (true) {
    string = prompt("Введите строку")
    newArr.push(string);
        if (string == 0 || string == null) {
            break;
        }
    console.log(newArr);
}

