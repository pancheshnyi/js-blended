// --------------------------------------------------- ЗАВДАННЯ 1 ------------------------------------------------------------

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ["jazz", "blues"];
// styles.push("rock - n - roll");
// const indexArr = styles.indexOf("blues");
// if (indexArr !== -1) {
//   styles[indexArr] = "classic"; // 1 варінт заміни
//   //   styles.splice(indexArr, 1, "classic"); // 2 варіант заміни
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} : ${array[i]}`);
//   }
// }

// logItems(styles);

// --------------------------------------------------- ЗАВДАННЯ 2 ------------------------------------------------------------

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// ----------------------- 1 варіант ------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Введіть своє ім'я");

//   if (!userName) {
//     // користувач не ввів імя, або натис cancel
//     alert("Ім'я не введено!");
//     return;
//   }

//   if (array.includes(userName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert("User not found");
//   }
// }

// checkLogin(logins);

// ---------------------- 2 варіант ---------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Введіть своє ім'я");

//   if (!userName) {
//     alert("Ім'я не введено!");
//     return;
//   }

//   array.includes(userName) //перевіряємо чи є в масиві наш користувач
//     ? alert(`Welcome, ${userName}!`)
//     : alert("User not found");
// }

// checkLogin(logins);

// -------------------- 3 варіант ---------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Введіть своє ім'я");

//   if (!userName) {
//     alert("Ім'я не введено!");
//     return;
//   }

//   for (const login of array) {
//     // цикл, бере по черзі кожен елемент масиву array і кладе його в змінну login
//     if (login === userName) {
//       alert(`Welcome, ${userName}!`);
//       return;
//     }
//   }

//   alert("User not found");
// }

// checkLogin(logins);

// -------------------- 4 варіант ---------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Введіть своє ім'я");

//   if (!userName) {
//     alert("Ви не ввели ім'я користувача!!!");
//     return;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (userName === array[i]) {
//       alert(`Welcome, ${userName}!`);
//       return;
//     }
//   }

//   // якщо цикл завершився і не знайдено — показуємо це
//   alert("User not found");
// }

// checkLogin(logins);

// -------------------- 5 варіант ---------------------------------

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("Введіть своє ім'я");

//   if (userName === null) {
//     alert("Login cancelled. Try again");
//     return;
//   }

//   if (userName.trim() === "") {
//     alert("Username is empty, please input the login");
//     return;
//   }

//   for (const item of array) {
//     if (userName === item) {
//       alert(`Welcome, ${userName}!`);
//       return;
//     }
//   }

//   alert("User not found");
// }

// checkLogin(logins);

// --------------------------------------------------- ЗАВДАННЯ 3 ------------------------------------------------------------

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// -------------------- 1 варіант ---------------------------------

// const someArr = (22, 11, 34, 5, 12, 13, 14, 15);

// function calculateAverage(...args) {
//   // Фільтруємо лише числа
//   const numbers = args.filter((item) => typeof item === "number");

//   if (numbers.length === 0) {
//     alert("Масив не містить жодного числа");
//     return 0; // Якщо немає чисел
//   }

//   const sum = numbers.reduce((total, num) => total + num, 0);
//   return sum / numbers.length;
// }

// console.log(calculateAverage(someArr));

// -------------------- 2 варіант ---------------------------------

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function calculateAverage(arr) {
//   let sum = 0;
//   let count = 0;

//   for (const i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum = sum + arr[i];
//       count = count + 1;
//     }
//   }

//   if (count === 0) {
//     return 0; // Якщо не було жодного числа
//   }

//   return sum / count;
// }

// console.log(calculateAverage(someArr));

// -------------------- 3 варіант ---------------------------------

// const someArr = (22, 11, 34, 5, 12, 13, 14, 15);

// function calculateAverage(...arr) {
//   const number = [];
//   let sumNumber = 0;
//   for (const item of arr) {
//     if (item === "number") {
//       sumNumber += item;
//       number.push(arr);
//     }
//   }
//   return sumNumber > 0 ? sumNumber / number.length : sumNumber;
// }

// console.log(calculateAverage(someArr));

// -------------------- 4 варіант ---------------------------------

// const someArr = (22, 11, 34, 5, 12, 13, 14, 15);

// function calculateAverage(...arr) {
//   if (arr.length === 0) return 0;
//   let sum = 0;
//   let count = 0;
//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//       count++;
//     }
//   }
//   return count > 0 ? sum / count : 0;
// }

// console.log(calculateAverage(someArr));

// --------------------------------------------------- ЗАВДАННЯ 4 ------------------------------------------------------------

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumSort(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     // складаємо поточний і наступний
//     newArr.push(arr[i] + arr[i + 1]);
//   }

//   return newArr;
// }

// console.log(sumSort(someArr)); // [33, 45, 39, 17, 25, 27, 29]

// --------------------------------------------------- ЗАВДАННЯ 5 ------------------------------------------------------------

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// -------------------- 1 варіант ---------------------------------

// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }

//   const newArr = numbers.toSorted((a, b) => a - b);
//   return newArr[0];
// }

// console.log(findSmallestNumber(numbers));

// -------------------- 2 варіант ---------------------------------

// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }

//   let smallesNunber = numbers[0];

//   for (const number of numbers) {
//     if (smallesNunber > number) {
//       smallesNunber = number;
//     }
//   }

//   return smallesNunber;
// }

// console.log(findSmallestNumber(numbers));

// -------------------- 3 варіант ---------------------------------

const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (!Array.isArray(numbers)) {
    return "Sory, it is not an array!";
  }

  return Math.min(...numbers); //використовуєм спред оператор, "виклик функції"
}

console.log(findSmallestNumber(numbers)); // 1

// --------------------------------------------------- ЗАВДАННЯ 6 ------------------------------------------------------------

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// -------------------- 1 варіант ---------------------------------

function findLongestWord(string) {
  // 1. Розбиваємо речення на окремі слова
  const words = string.split(" ");
  console.log(words);

  // 2. Припускаємо, що перше слово — найдовше
  let longest = words[0];

  // 3. Перебираємо всі слова
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word; // якщо це слово довше — зберігаємо його
    }
  }

  // 4. Повертаємо найдовше слово
  return longest;
}

console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// -------------------- 2 варіант ---------------------------------

// function findLongestWord(string) {
//   return string
//     .split(" ")
//     .reduce((longest, current) =>
//       current.length > longest.length ? current : longest
//     );
// }

// longest — найкраще слово наразі current — поточне слово, яке зараз розглядаємо
// longest — акумулятор (те, що накопичується, зберігається) якщо не передали йому початкове значення,
// то він візьме його з першогого елементу масиву
// .reduce((найдовше, зараз) => зараз.length > найдовше.length ? зараз : найдовше)

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// -------------------- 3 варіант ---------------------------------

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let index = 0;

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > words[index].length) {
//       index = i;
//     }
//   }

//   return words[index];
// }

// --------------------------------------------------- ЗАВДАННЯ 7 ------------------------------------------------------------

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// --------------------------------------------------- ЗАВДАННЯ 8 ------------------------------------------------------------

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// --------------------------------------------------- ЗАВДАННЯ 9 ------------------------------------------------------------

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    // this посилання на обєкт, приймає два аргумента і зберігає їх як властивості об'єкта
    // в методах обєкта до властивостей обєкта ми звертаємось через this
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== undefined && this.b !== undefined; // коли властивість відсутня в обєкті буде undefined
  },

  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return "No such propeties";
    }
  },

  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return "No such propeties";
    }
  },
};

// --------------------------------------------------- ЗАВДАННЯ 10 ------------------------------------------------------------

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {}

console.log(calcTotalPrice(fruits, "Банан"));

// ---------------------------------------------- МЕТОД reduce() -------------------------------------------------------

// ------------------------ Знайти найбільше число -----------------------------

// const numbers = [5, 9, 12, 4, 25, 1];
// const max = numbers.reduce((acum, item) => (item < acum ? item : acum));

// console.log(max);

// ------------- Порахувати загальну довжину всіх слів у реченні ---------------

// const sentence = "Я люблю шоколад і банани да";
// const totalLength = sentence
//   .split(" ")
//   .reduce((acum, item) => acum + item.length, 0);

// console.log(totalLength);

// --------------------- Зібрати масив об'єктів у один об'єкт -------------------

const users = [
  { name: "Oleg", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Ivan", age: 20 },
];

// const result = users.reduce((acc, user) => {
//   acc[user.name] = user.age;
//   return acc;
// }, {});

const newArr = users.reduce((acc, item) => {
  acc[user.name] = user.age;
  return acc;
}, {});

console.log(result);
