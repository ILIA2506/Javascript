'use strict'

let new_task_object = {
    title:undefined,
    description:undefined,
    date:undefined
};

let tittle_input = document.getElementById("title");
tittle_input.addEventListener("input", input_handler)

let description_input = document.getElementById("description");
description_input.addEventListener("input", input_handler)

let date_input = document.getElementById("date");
date_input.addEventListener("input", input_handler)

//заносим значения в объект. Функция универсальная для всех трех input
function input_handler(objectOfEvent) {
    new_task_object[objectOfEvent.target.id] = objectOfEvent.target.value;
    console.log(new_task_object);

    //проверяем значения в объектах
    if (Object.values(new_task_object.title).length < 5) {
        console.log("Введите норм значение");
    }
};






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