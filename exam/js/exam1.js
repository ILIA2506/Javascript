'use strict'

// Создали массив
let new_task_object = {
    title:undefined,
    description:undefined,
    date:undefined,
    participiant:undefined
};

// Зафиксировались на элементе и создали для него команду 
let tittle_input = document.getElementById("title");
tittle_input.addEventListener("input", input_handler)

let description_input = document.getElementById("description");
description_input.addEventListener("input", input_handler)

let date_input = document.getElementById("date");
date_input.addEventListener("input", input_handler)

let new_participiant = document.getElementById("participiant");
new_participiant.addEventListener("input", input_handler);

// Заносим значения в объект. Функция универсальная для всех !четырех! input
function input_handler(objectOfEvent) {
    new_task_object[objectOfEvent.target.id] = objectOfEvent.target.value;
    console.log(new_task_object);

    // Проверяем значение наименования задачи
    if (Object.values(new_task_object.title).length < 5) {
        let attention1 = document.getElementById("attention1");
        attention1.style.display = "block";
    } else {
        attention1.style.display = "none";
    }

    // Проверяем значение даты выполнения задачи
    let current_date = new Date().toISOString();
    let task_date = new_task_object.date;
            if (task_date < current_date) {
                let attention2 = document.getElementById("attention2");
                attention2.style.display = "block";
            } else {
                attention2.style.display = "none";
            }
};

// Добавляем нового участника
let add_button = document.getElementById("add-button");
add_button.addEventListener("click", add_handler);

function add_handler() {
    let add_participiant = document.createElement("div");
    add_participiant.classList.add("add-participator");
    add_participiant.innerHTML = 
    `<input type="text" placeholder="Введите имя участника" class="input-participator" id="participiant">
    <button>&#10006;</button>`;
    document.getElementById("add-button").append(add_participiant);
}

//удаление нового участника
let remove_button = document.getElementById("remove-button");
remove_button.addEventListener("click", remove_handler);

function remove_handler() {
    this.removeEventListener("click", add_handler);
};





// let divElem = document.createElement("div");
// for (let article of articles) {
//      let pElem = document.createElement("p"); // создали элемент p
//      pElem.innerText = article.title; // добавили текст
//      pElem.classList.add("article-title"); // добавили класс
//      divElem.append(pElem); // элемент p добавили в элемент div
//      }
//      document.body.prepend(divElem); // элемент div, добавили первым в body

    // let current_date = new Date().toISOString();
    // let task_date = new_task_object.date;
    // console.log(task_date);
    // console.log(current_date);

    // let year = current_date.getFullYear();
    // let month = current_date.getMonth();
    // let date = current_date.getDate();
    // let hour = current_date.getHours();
    // let minute = current_date.getMinutes();
    // console.log(`${year}-${month}-${date}T${hour}:${minute}`);








    // new_task_object.title =  ;
    // new_task_object.description =  
    // new_task_object.date =  

// function new_task() {

   



//     let button = document.getElementsByClassName("add-task");
//     button.addEventListener ("click", update()

//         function update() {
//             for (new_task_object.key of new_task_object) {
//                 if (new_task_object.value !== 0) new_task_object.push(new_task_object.value);
//             }
//         }
//     )};
//     console.log(new_task_object);
// }
//     // let container = document.section.addtask.
//     // container.addEventListener ("submit", upload);

//     //     function upload() {

//     //         let new_task_object = {
//     //             title,
//     //             description,
//     //             date
//     //         };
//     //         for (let keys of this.elements.new_task_object) {
//     //             if (input !== 0) new_task_object.push(input.value);
//     //         }
//     //         console.log (new_task_object);
//     //     }