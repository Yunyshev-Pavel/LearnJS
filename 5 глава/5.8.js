// WeakMap / WeakSet

/// Задача 1: Хранение данных с использованием WeakMap
// У вас есть система, где каждому пользователю нужно назначить ID. Используйте WeakMap, чтобы хранить ID для каждого объекта пользователя, не препятствуя удалению объекта пользователем сборщиком мусора.

// Условие:

// Создайте функцию assignID(user), которая принимает объект пользователя и присваивает ему уникальный ID. Функция возвращает ID.
// Создайте функцию getID(user), которая возвращает ID пользователя, если он есть.
// Подсказка: Используйте WeakMap для хранения ID, чтобы если на объект пользователя больше нет ссылок, сборщик мусора мог его удалить.

const idUser = new WeakMap();
let idCount = 1;

function assignID(user) {
  idUser.set(user, idCount);
  return idCount++;
}
function getID(user) {
  return idUser.get(user);
}

let user1 = { name: "Bob" };
let user2 = { name: "Alice" };
console.log(assignID(user1));
console.log(assignID(user2));
console.log(getID(user1));
console.log(getID(user2));

user1 = null;

console.log(user1);

//Задача 2: Отслеживание посещенных страниц с использованием WeakSetПредставьте, что у вас есть система веб-страниц, где каждый объект страницы представляет собой отдельный объект. Используйте WeakSet, чтобы отслеживать, какие страницы были посещены, но чтобы они удалялись, если на страницу больше нет ссылок.
//Создайте функцию markAsVisited(page), которая помечает страницу как посещенную.Создайте функцию isVisited(page), которая проверяет, была ли страница посещена.Подсказка: Используйте WeakSet, чтобы автоматически очищать данные о посещенных страницах, если страница больше не нужна.
// Пример работы:

let visitedSet = new WeakSet();

function markAsVisited(page) {
  return visitedSet.add(page);
}

function isVisited(page) {
  return visitedSet.has(page);
}

let page1 = { url: "/home" };
let page2 = { url: "/about" };

markAsVisited(page1);

console.log(isVisited(page1)); // true
console.log(isVisited(page2)); // false

// Удалим ссылку на page1
page1 = null;

//
