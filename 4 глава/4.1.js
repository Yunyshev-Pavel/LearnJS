// Объекты

let user = new Object(); // синтаксис "конструктор объекта"
let user = {}; // синтаксис "литерал объекта"

let user = {
  // объект
  name: "John", // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};

//
let user = {};
// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true
// удаление свойства
delete user["likes birds"];

// Циклы for...in
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // ключи
  alert(key); // name, age, isAdmin
  // значения ключей
  alert(user[key]); // John, 30, true
}

// 1. Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// 2. Они хранят свойства (пары ключ-значение), где:
// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.

// 3.Чтобы получить доступ к свойству, мы можем использовать:
// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey]

// 4. Дополнительные операторы:
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
//

//Задачи

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
const obj = {};
obj.name = "John";
obj.surname = "Smith";
obj.name = "Pete";
delete obj.name;
console.log(obj.name);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
//

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John",
};
// это будет работать?
user.name = "Pete"; // da
//

// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let sum = null;
if (Object.keys(salaries).length === 0) {
  sum = 0;
} else {
  sum = salaries.Ann + salaries.John + salaries.Pete;
}

////////
for (let key in salaries) {
  sum += salaries[key];
}

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
