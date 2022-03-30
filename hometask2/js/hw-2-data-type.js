'use strict'
// // TASK 1
// let countInput = prompt("Введите количество верных ответов");
// let count = parseInt(countInput);
// let result;
// if (count >= 90 && count <= 100) {
//         result = "Отлично";
// } else if (count >= 60 && count <= 89) {
//         result = "Хорошо";
// } else if (count >= 40 && count <= 59) {
//         result = "Удовлетворительно";
//     } else if (count >= 0 && count <= 39) {
//         result = "Попробуйте еще раз";
//     } else {
//     result = "Некорректное значение;"
// }
// console.log (result);

// // TASK 2
// let sumInput = prompt("Введите сумму покупки");
// let sum = parseInt(sumInput);
// let codeInput = prompt("Введите номер купона на скидку");
// let code = parseInt(codeInput);
// switch (code) {
//     case 4653:
//         console.log(sum * 0.7);
//         break;
//     case 5698:
//     case 5111:
//         console.log(sum * 0.8);
//         break;
//     case 6922:
//     case 6113:
//     case 6099:
//         console.log(sum * 0.9);
//         break;
//     default:
//         console.log(sum)
// }

// TASK 3
let plateInput = prompt("Введите количество тарелок");
let plate = parseInt(plateInput);
let fairyInput = prompt("Введите количество моющего средства");
let fairy = parseInt(fairyInput);
let resultPlate;
let resultFairy;

while (plate >= 0 || fairy >= 0 ) {
    // console.log(`${plate} - 1 = ${plate - 1}`, `${fairy} - 0.5 = ${fairy - 1}`);   
    if (plate > 0 || fairy > 0) continue;
    if (plate === 0 && fairy === 0) break;
    resultPlate = plate - 1;
    resultFairy = fairy - 0.5;
    alert(resultPlate, resultFairy);
}
if (resultFairy === 0 && resultPlate > 0) {
    console.log ("Количество тарелок:", resultPlate);
} else {
    console.log ("Количество моющего средства", resultFairy);
}