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
let i = 0;
let j = 0;
for ( let i = 0; i < 7; i++ ) {
    scope.push( Math.round( Math.random() * 300 ));
}
console.log(scope);
let max = Math.max (...scope);
let min = Math.min (...scope);

for (i = 0, j = 0; i < scope.length && j < scope.length; i++, j++) {
    if (scope[i] === min && scope[j] === max) {
        scope[i] = max;
        scope[j] = min;
    }
}
console.log(scope);

