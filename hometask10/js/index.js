"use strict";


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/300"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/300"
    }
};

let cardsSection = document.querySelector(".cards-section");
for (let x of Object.values(goods)) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = x.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img);

    let price = document.createElement("p");
    price.innerText = x.price;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (x.count > 0) {
        count.classList.add("values");      // добавил эту строчку в исходный код
        count.innerHTML =
            `<button class="minus">-</button>
             <span class="count">0</span>
             <button class="plus">+</button>`;
    } else {
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}   

// Домашнее задание


let buttons_block = document.querySelectorAll(".values");

buttons_block.forEach(button => {
   let plus_button = button.children[2];
   let minus_button = button.children[0];
   let place_to_insert = button.children[1]
   let start_value = parseInt(button.children[1].innerHTML);

   const COUNTER = makeCounter(start_value);
  
  
   function makeCounter(start_value) {
    let count = start_value;
        return function (action) {
            if (action === "+"){
                return ++count;
            } else {
                return --count > 0 ? count : 0;
            }
    }
}
function click_function(count, place_to_insert) {
    place_to_insert.innerHTML = count;           
}

plus_button.addEventListener("click", function () {
    click_function(COUNTER('+'), place_to_insert)
    });
minus_button.addEventListener("click", function () {
    click_function(COUNTER('-'), place_to_insert)
    });
});