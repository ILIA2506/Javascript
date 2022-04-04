'use strict'

// Домашнее задание
// Дана переменная count
// в зависимости от значения переменной вывести в консоль слово "товар" в правильной форме
// 12 товаров, 33 товара, 21 товар и тд

let num = prompt("Введите число товаров");


if (num.endsWith(1)) {
    console.log(`В доступе сейчас ${num} товар`);
    } if (num.endsWith(2) || num.endsWith(3) || num.endsWith(4)) {
        console.log(`В доступе сейчас ${num} товара`);
    } if (num.endsWith(5) || num.endsWith(6) || num.endsWith(7) ||
    num.endsWith(8) || num.endsWith(9) || num.endsWith(10) || num.endsWith(11) ||
    num.endsWith(12) ||num.endsWith(13) || num.endsWith(14)) {
        console.log(`В доступе сейчас ${num} товаров`);
    }
