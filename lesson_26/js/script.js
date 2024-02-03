// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елементів додати клас active,
// при повторному кліку прибрати клас

// Варіант 1

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', function () {
        item.classList.toggle('active');
    });
});

// крок перший - через document.querySelectorAll вибрати всі елементи з класом item
// крок другий - через forEach перебрати всі елементи
// крок третій - додати подію click на кожен елемент
// крок четвертий - в обробнику події додати клас active через toggle
// метод classList.toggle використовується для додавання або видалення класу зі списку класів елемента.
// Якщо клас вже присутній, він буде видалений, і навпаки, якщо клас відсутній, він буде доданий.

// Варіант 2

// items.forEach(item => {
//     item.addEventListener('click', function () {
//         if (item.classList.contains('active')) {
//             item.classList.remove('active');
//         } else {
//             item.classList.add('active');
//         }
//     });
// });

// крок перший - через document.querySelectorAll вибрати всі елементи з класом item
// крок другий - через forEach перебрати всі елементи
// крок третій - додати подію click на кожен елемент
// крок четвертий - в обробнику події за допомогою contains перевірити чи є клас active
// якщо є - видалити remove, якщо немає - додати add.

// Варіант №3
// document.addEventListener('click', documentAction)
// function documentAction(e) {
//     const targetElement = e.target;
//     if (e.target.classList.contains('.item')) {
//         e.target.classList.toggle('active');
//     }
// }

// крок перший - додати подію click на весь document.
// крок другий - перевіряється, чи має цей елемент клас з назвою ".item".
// Якщо так, то відбувається подія.
// крок третій - додати клас active через toggle

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

const body = document.body;
window.addEventListener("load", pageLoaded);

function pageLoaded(e) {
    body.classList.add('loaded');
}

// крок перший - вибрати body через document.body
// крок другий - додати подію load на window
// крок третій - в обробнику події додати клас loaded через add

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector('header');
const footer =document.querySelector('footer');

header.addEventListener('mouseover', () => {
    footer.style.backgroundColor = 'gray';
});

header.addEventListener('mouseout', () => {
    footer.style.backgroundColor = '';
});

// крок перший - ми отримуємо header через document.querySelector
// крок другий - далі додаємо подію mouseover на header
// крок третій - в обробнику події змінюємо фон footer через style.backgroundColor
// крок четвертий - додаємо подію mouseout на header
// крок п'ятий - в обробнику події повертаємо початковий фон footer через style.backgroundColor = ''

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

function startInterval(element, currentNumber, end, delay) {
    const interval = setInterval(() => {
        if (currentNumber <= end) {
            element.textContent = currentNumber;
            currentNumber++;
        } else {
            clearInterval(interval);
        }
    }, delay);  // Затримка між зміною числа (в мілісекундах), отримана з дата атрибута
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const itemElement = entry.target;
            const startNumber = parseInt(itemElement.dataset.start);
            const endNumber = parseInt(itemElement.dataset.end);
            const delay = parseInt(itemElement.dataset.delay) || 1000;  // Затримка за замовчуванням 1000 мс

            startInterval(itemElement, startNumber, endNumber, delay);
            observer.unobserve(itemElement);  // Зупиняємо спостереження, щоб не запускати функцію повторно
        }
    });
}

const itemElement = document.querySelector('.item');
const observer = new IntersectionObserver(handleIntersection, { root: null, threshold: 0.5 });
observer.observe(itemElement);

// крок перший - створюємо функцію startInterval, яка приймає 4 параметри: елемент, початкове число, кінцеве число, затримка
// крок другий - в функції створюємо змінну currentNumber, яка дорівнює початковому числу
// крок третій - створюємо інтервал, який змінює число в елементі item виводячи цифру яка збільшується на одиницю
// крок четвертий - створюємо функцію handleIntersection, яка приймає 2 параметри: entries, observer
// крок п'ятий - в функції handleIntersection перебираємо всі entries через forEach
// крок шостий - якщо entry.isIntersecting === true, то отримуємо елемент item через entry.target
// крок сьомий - отримуємо початкове число через parseInt(itemElement.dataset.start)
// крок восьмий - отримуємо кінцеве число через parseInt(itemElement.dataset.end)
// крок дев'ятий - отримуємо затримку через parseInt(itemElement.dataset.delay) або 1000 мс
// крок десятий - запускаємо функцію startInterval
// крок одинадцятий - зупиняємо спостереження, щоб не запускати функцію повторно через observer.unobserve(itemElement)
// крок дванадцятий - отримуємо елемент item через document.querySelector('.item')
// крок тринадцятий - створюємо новий IntersectionObserver через new IntersectionObserver
// в якому передаємо функцію handleIntersection та об'єкт з параметрами root: null, (root - заданий елемент null - як кореневий елемент )
// threshold: 0.5 при якому відсотку видимості цільового елемента повинен спрацювати callback
// крок чотирнадцятий - спостерігаємо за елементом item через observer.observe(itemElement)










