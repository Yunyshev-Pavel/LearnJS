//object function/New function

// Создай функцию-счётчик.

function counter() {
  counter.count++;
  return counter.count;
}
counter.count = 0;
console.log(counter()); // 1
console.log(counter()); // 2

// Создай функцию и добавь ей собственное свойство description.
function myFunct() {
  return;
}
myFunct.description = "это моя функция";

// Напиши функцию, которая возвращает имя другой функции.
let save = function alesha() {
  return;
};
console.log(save.name);

//Используя length, выведи количество аргументов у функции.
function sayHI(a, b) {
  return console.log("hello");
}
function MyFuct(sayHI) {
  return sayHI.length;
}

console.log(MyFuct(sayHI));

// Создай функцию через new Function() для сложения двух аргументов.
let sum = new Function("a", "b", "return a + b");
console.log(sum(1, 2));

// Реализуй динамическое создание функции, которая принимает массив чисел и возвращает их произведение.
let a = new Function("arr", "return arr.reduce((a, b) => a * b, 1)");
console.log(a([1, 2, 3, 4])); // 24

// Создай функцию, которая возвращает новую функцию
let func = new Function("return function(name) { return `Hello, ${name}!`; }");
let zopa = func();
console.log(zopa("pavel"));
