"use strict"

// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body;
console.log(bodyElement);

// крок перший - створюємо константу з назвою bodyElement
// крок другий - звертаємось до об'єкту document, в якому знаходиться вся структура html
// крок третій - в данній задачі, нам не потрібна вся структура, тому
// звертаємось до елемента body, який знаходиться в об'єкті document
// крок четвертий - виводимо в консоль bodyElement

//********************************************************************************************************************

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

const addListToBody = (numItems = 21) => {
    let ul = document.createElement('ul');
    for (let i = 0; i < numItems; i++) {
        let li = document.createElement('li');
        li.innerText = `Елемент ${i + 1}`;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

addListToBody();


// крок перший - оголошуємо функцію з назвою addListToBody з параметром numItems який відповідає за кількість
// елементів в списку, який буде створюватись

// крок другий - за допомогою createElement створюємо елемент ul

// крок третій - створюємо цикл, який буде створювати елементи li, який вказує, що якщо наша зміннв i менша за
// параметр numItems (який відповідає за кількість
// елементів в списку), то виконується цикл, який створює елемент li

// крок четвертий - в елемент li вставляємо текстовий контент, який буде відображатись в елементі li,
// а саме "Елемент" + (i + 1), такий запис використовується тому, що змінна i починається з 0,
// а нам потрібно, щоб вона починалась з 1

// крок п'ятий - за допомогою appendChild ми вказуємо, що елемент li буде дочірнім елементом елемента ul

// крок шостий - за допомогою appendChild ми вказуємо, що елемент ul буде дочірнім елементом елемента body

// крок сьомий - викликаємо функцію addListToBody

//********************************************************************************************************************

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

bodyElement.classList.add('.loaded');

if (bodyElement.classList.contains('.loaded')) {
    bodyElement.style.color = `green`
}

// крок перший - за допомогою методу classList.add додаємо до елементу body клас loaded

// крок другий - за допомогою методу classList.contains перевіряємо чи є клас loaded у елемента body

// крок третій - якщо клас loaded є у елемента body, то за допомогою style змінюємо колір тексту на зелений

//********************************************************************************************************************

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
//  та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.classList.add('active');
    item.textContent = `Елемент №${index + 1}`;
});

// крок перший - за допомогою методу querySelectorAll звертаємось до всіх елементів з класом item
// і записуємо їх в константу items

// крок другий - за допомогою методу forEach перебираємо всі елементи з константи items

// крок третій - за допомогою методу classList.add додаємо до кожного елемента з константи items клас active

// крок четвертий - за допомогою textContent змінюємо текстовий контент кожного елемента з константи items
// на "Елемент №" + (index + 1), такий запис використовується тому, що змінна index починається з 0

//********************************************************************************************************************

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button');

function scrollToButton() {
    button.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth"
    });
}

scrollToButton();

// крок перший - за допомогою методу querySelector звертаємось до елемента з класом button
// і записуємо його в константу button

// крок другий - оголошуємо функцію scrollToButton
// крок третій - за допомогою методу scrollIntoView (прокрутка до об'єкта) звертаємось до елемента button
// крок четвертий - вказуємо параметри, які відповідають за прокрутку block: "start" - прокрутка до початку елемента,
// inline: "center" - прокрутка до центру елемента, behavior: "smooth" - плавна прокрутка

// крок п'ятий - викликаємо функцію scrollToButton

//********************************************************************************************************************

// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення  атрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

let link = document.querySelector('.link');

let speed = parseFloat(link.dataset.speed);
console.log(speed);

if (speed < 200) {
    link.style.color = `red`;
}

// крок перший - за допомогою методу querySelector звертаємось до елемента з класом link
// і записуємо його в змінну link

// крок другий - за допомогою методу dataset звертаємось до дата атрибуту елемента link

// крок третій - за допомогою методу parseFloat перетворюємо значення дата атрибуту елемента link в число
// і записуємо його в змінну speed

// крок четвертий - за допомогою if записуємо умову, яка вказує, що якщо значення змінної speed менше 200, то
// за допомогою style змінюємо колір тексту елемента link на червоний










