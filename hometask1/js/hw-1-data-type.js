'use strict';

//TASK 1 HW
let sum = 150000;
const PRICE = 100000;
let result = sum > PRICE ? sum*0.9 : sum;
console.log(result);

//TASK 2 HW
let x = 12;
let first = x % 10; // единицы
let second = Math.round(x / 10 - 0.5); // десятки
let summary = first + second;
console.log(summary);

// TASK 3 HW
let lenght = 4;
let height = 9;
let width = 12;
let s = 2*(lenght*height + lenght*width + height*width);
console.log(s);

let sInfo = `Площадь равна: ${2*(lenght*height + lenght*width + height*width)}`;
console.log(sInfo);

// TASK 4 HW
let a = 3;
let b = 6;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // 5, 2 