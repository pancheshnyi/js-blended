// --------------------------------------------------- Завдання 1 ------------------------------------------------------------

/**
 * Реалізуємо функціонал, щоб якщо користувач вводить своє повідомлення,
 * а потім перезавантажує сторінку, то щоб введене повідомлення не було втрачене
 */

const STORAGE_KEY = "feedback-msg";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea"); // звертаємось напряму до form а не querySelector оскільки texarea в формі

textarea.addEventListener("input", onTextareaInput);

/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищаємо форму
 */

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function onTextareaInput(event) {
  const message = event.target.value; // event.target це посилання на елемент на якому відбулась подія
  // value отримуємо значення з текстового поля (input, textarea, checkbox) в яке вводить інформацію користувач
  // textcontect та innerHTML використовують для неінтерактивних тегів
}
