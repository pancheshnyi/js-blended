// --------------------------------------------------- Завдання 1 ------------------------------------------------------------

/**
 * Реалізуємо функціонал, щоб якщо користувач вводить своє повідомлення,
 * а потім перезавантажує сторінку, то щоб введене повідомлення не було втрачене
 */

const STORAGE_KEY = "feedback-msg";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea"); // звертаємось напряму до form а не querySelector оскільки texarea в формі

form.addEventListener("submit", handleSubmit);

textarea.addEventListener("input", onTextareaInput);

populateTextarea();

/**
 * - Скасовуємо стандартну поведінку
 * - Очищаємо форму
 * - Видаляємо повідомлення зі сховища
 */

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset(); // скидаємо значення форми, очищаємо форму
  localStorage.removeItem(STORAGE_KEY); // видаляємо повідомлення з локального сховища
}

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function onTextareaInput(event) {
  const message = event.target.value; // event.target це посилання на елемент на якому відбулась подія
  // value отримуємо значення з текстового поля (input, textarea, checkbox) в яке вводить інформацію користувач
  // textcontect та innerHTML використовують для неінтерактивних тегів
  localStorage.setItem(STORAGE_KEY, message);
}

/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, то оновлюємо DOM
 */

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    // перевіряємо чи користувач щось ввів, якщо дані вже є, то ми збережемо повідомлення
    textarea.value = savedMessage; // звертаємось до поля де зберігаються дані і записуємо в змінну
  }
}

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

const instruments = [
  {
    id: 8,
    img: "https://static.dripro-m.ua",
    name: "Генератор",
    price: 10890,
    description: "Бензиновий генератор",
  },
];

const PRODUCT_LS_KEY = "basket";

// 1. Створюємо контейнер
const container = document.querySelector("js-list");

// 3. Відмальовуємо нашу розмітку
container.insertAdjacentElement("beforeend", createMarkup(instruments));

// 4. Потрібно відловлювати клік і як наслідок добавляти продукт в корзину.
// Для того, щоб відловлювати клік потрібно скористатись делегуванням події і на контейнер
// навісити слухач події "клік"
container.addEventListener("click", handlerAdd);

// 2. Створюємо функцію, яка приймає масив продуктів і створює картки продукції
// повертаємо через неявне повернення картки товарів
// (item) => це обєкт, елемент масиву який ми можемо деструктурувати ({ id, img, name, price, description }) =>
// створюємо розмітку, яка буде відповідати за кожну картку нашого продукту
// метод map повертає масив рядків тому використовуємо метод join який з масиву поверне один великий рядок
function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) => `
    <li class="product-card js-product" data-id="${id}">
    <img src="${img}" alt="${name}" class="product-img"/>
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price} грн</p>
    <button class="product-add-btn js-add">Add to basket</button>
    </li>
  `
    )
    .join("");
}

// 5. Створюємо функцію відловлювач події
// Якщо елемент по якому я клікнув (елемент на якому відбулася подія event.target), якщо в нього
// є клас js-add
// в if прописуємо якщо користувач клікнув куди завгодно, але не на кнопку, знак ! - це заперечення, то return припиняє роботу функції
// const parrent шукаємо тег li який належить кнопці яка була натиснута для цього використовуємо
// метод closeset шукає найближчий батьківський елемент з селектором js-product тобто класом ".js-product"
// шукаємо через data-id унікальний ідентифікатор - id продукту через який ми розуміємо, що це за продукт та перетворюємо id на число (+ або Number)
// шукаємо продукт в масиві instruments який відповідає нашому id. використовуємо instruments.find((item) де item це елемент масиву
// тому можемо його деструктурувати використавши instruments.find(({ id })
function handlerAdd(event) {
  if (!event.target.classList.contains("js-add")) {
    return;
  }

  const parrent = event.target.closest(".js-product");
  const productId = +parrent.dataset.id;
  const currentProduct = instruments.find(({ id }) => id === productId);
}

// 6. Реалізуємо елементи корзини та збереження інформації після перезавантаження сторінки продукту
// За корзину відповідає локалсторидж. Є два стани корзини: її може не бути, або може бути з товаром
// дістаємо товари з локального сховища та відразу розпарсуємо товари (складний обєкт, може бути декілька товарів) і кладемо в масив
// дістаємо або масив товарів або якзо значення null то отримаємо пустий масив

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

// якщо користувач добавив товар двічі, то повинно бути не дві карти з товаром, а одна з двома однакоми товарами
// перевіряємо чи є в масиві продуктів products цей currentProduct прордукт findIndex поверне індекс елемента
// який задовільнимть колбек-функцію

const index = products.findIndex(({ id }) => id === productId); // повертає або індекс елемента, або -1 якщо не знайшов цей елемент

// робимо перевірку, якщо є, то додаємо властивість qty (кількість продуктів в корзині) та додаємо в масив продуктів

if (index === -1) {
  currentProduct.qty === 1;
  products.push(currentProduct);
} else {
  products[index].qty += 1;
  // оновлюємо корзину (локальне сховище)
  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
}

// 7. Реалізуємо відображення елементів у вкладці корзина (окремий файл js)
const PRODUCT_LS_KEY = "basket";
const totalPrice = document.querySelector(".js-total-price"); // класз тегу h1 файлу html корзини
const clear = document.querySelector(".js-clear"); // клас кнопки для очищення корзини, за замовчуванням hidden прихована (корзина пуста)
const container = document.querySelector(".js - lister"); // клас контейнера - список куди товари будуть додані для відображення

// дістаємо з локального сховища нашу корзину та розпарсуємо результат (складний обєкт, масив) або порожній []
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

// створюємо змінну, яка буде відповідати за загальну суму в корзині
let totalCost;

// перевіряємо чи є в нашій корзині зараз якийсь товар. перевіряємо через довжину масиву (0 пустий, 1 і т.д. в корзині щось є)
if (products.length) {
  // потрапляємо якщо значення не 0
  clear.hidden = false;
  // рахуємо суму товарів в корзині
  totalCost = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}

// відображаємо текст тег h1 якщо true то один рядок, якщо falce то інший
totalPrice.textContent = totalCost
  ? `Total cost ${totalCost} грн`
  : `Your basket is empty`;

// 9. Реалізуємо функціонал очищення локального сховища (корзини)
clear.addEventListener("click", handlerClear);

function handlerClear() {
  localStorage.removeItem(PRODUCT_LS_KEY); // очищуємо локальне сховище
  window.location.href = "./03-shop.html"; // редирект на нашу попередню сторінку
}

// 8. Відмальовуємо картки з товаром

container.insertAdjacentElement("beforeend", createMarkup(products));
//

function createMarkup({ img, name, price, qty }) {
  return arr
    .map(
      () => `
  <li class="cart-item">
  <img src="${img}" alt="${name} class="product-img"/>
  <h2>${name}</h2>
  <p>Quantity: ${qty}</p>
  <p>Total price: ${qty * price} грн</p>
  </li>
  `
    )
    .join("");
}
