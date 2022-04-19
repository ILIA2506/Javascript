'use strict';

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];


function generateTable (arr) {
    let table = document.createElement("table");
    let firstRow = table.insertRow();
    firstRow.classList.add("first-row")         // можно в CSS прописать дальше стили
    let keys = Object.keys(arr[0]);
    console.log(keys);
    for (let key of keys) {
        let cell = firstRow.insertCell();
        cell.innerText = key.toUpperCase();
    }
    for (let elem of arr) {
        let row = table.insertRow();
        // наполнение ряда ячейки
        for (let prop in elem) {
            let cell = row.insertCell();
            cell.innerText = elem[prop];
        }
    }
    document.body.append(table);
}

generateTable(goods);
generateTable(articles);

function generateField(n) {
    if (n < 3) return;
    // генерация поля n x n
    // надо обязательно видимость рамок сделать и задать их размеры, а то не видно будет
    // добавление поля в html 

    // let cells = получить все ячейки 
    // let randomCell = cells[рандомный индекс] - повторить три раза
    // randomCell - добавить атрибут
}

