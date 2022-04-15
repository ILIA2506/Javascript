'use strict'


// // TASK 1
// function range (a, b, c) {
//     let arr = [];
//     c = c || 1;
//     arr[0] = a;
//     for (let i=1; arr[i-1] <= (b - c); i++) {
//         arr[i] = arr[i-1] + c;
//     }
//     return arr;
// }
// let x = parseInt(prompt("Введите начало диапазона"));
// let y = parseInt(prompt("Введите конец диапазона"));
// let z = parseInt(prompt("Введите шаг между элементами"));
// let res= range(x,y,z);
// console.log(res);

// TASK 2

function checkSpam(text, ...spamWords) {
    let resultWords = [];
    let arrayString = text.split(' ');
    for (let i of spamWords) {
        for (let j of arrayString) {
            if (j == i) {
                resultWords.push(j);
            }
        }
    }
    let resultWordsLength = resultWords.length;
    let result;
    switch (resultWordsLength) {
        case '0':
    result = "Спам не выявлен";
    break;
        case '1':
        case '2':
    result = "Малое количество спама";
    break;
        case '3':
    result = "Приемлемое количество спама";
    break;
        case '4':
        case '5':
    result = "Большое количество спама";
    }
    console.log(result);

let stringRambler = "внутренних дел он Украины Дениса Монастырского положить конец конфликту он он"
text = stringRambler.toLowerCase();
spamWords = ["он", "дел"];

let finalResult = checkSpam(text, ...spamWords);
console.log(finalResult);

}