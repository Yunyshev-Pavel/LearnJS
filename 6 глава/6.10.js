// Используя bind, сделайте так, чтобы sayName всегда выводила имя из объекта obj.

const obj = { name: "Alice" };
function sayName() {
  console.log(this.name);
}

//Создайте функцию, которая принимает два аргумента и возвращает их сумму.
// Используя bind, создайте новую функцию, которая всегда добавляет 5 к переданному аргументу.
function sum(a, b) {
  return a + b;
}
let newFunc = sum.bind(null, 5);
console.log(newFunc(2));

//У вас есть массив чисел:

const numbers = [10, 20, 30];

//Напишите функцию addPrefix, которая добавляет к числу префикс, например, "USD ".
//Используйте bind, чтобы создать новую функцию, которая всегда добавляет "USD " перед числом,
//и примените её ко всем элементам массива с помощью метода map.
function addPrefix(arr, prefix) {
  const newNum = arr.map((el) => el + prefix);
  return newNum;
}
const addUsdt = addPrefix.bind(null, numbers, "USDT");
console.log(addUsdt());

//Напишите функцию delayedLog, которая принимает сообщение и выводит его в консоль через 2 секунды. Используйте bind, чтобы передать сообщение заранее.
function delayedLog(message) {
  const messageOutput = console.log.bind(null, message);
  setTimeout(messageOutput, 2000);
}
console.log(delayedLog("hello zopa!"));

// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};
const ok = user.loginOk.bind(user);
const fail = user.loginFail.bind(user);

askPassword(ok, fail);

// /Использование частично применённой функции для логина

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
