'use strict'

// обращаемся к объекту localStorage 
let new_task_object_full = localStorage.getItem("new_task_object_full");
if (!new_task_object_full) {
    body.innerText = "В списке нет задач";
} else {
    new_task_object_full = JSON.parse(new_task_object_full);
    console.log(new_task_object_full);
    
    
// прописываем цикл, где каждую задачу распределяем по элементам HTML
    for (let task of new_task_object_full) {

        let div = document.createElement("div");
        document.querySelector("section").append(div);

        let h3 = document.createElement("h3")
        h3.innerText = task.title;
        h3.classList.add("h3");
        div.append(h3);

        let p = document.createElement("p");
        p.innerText = task.description;
        div.append(p);

        let span = document.createElement("span");
        span.innerText = `Выполнить к: ${task.date}`;
        div.append(span);
    }
}