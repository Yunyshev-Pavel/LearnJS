// Числа
let a = 1e6;
console.log(a);
//1e3 = 1*1000
//1e6 = 1*100000
let b = 1e-6;
console.log(b);
//0.000001

let a1 = 10_000_000;
console.log(a); /// 100000000

console.log(0.1 + 0.2 == 0.3); // false
// ошибка возникают из за двоичного представления чисел
console.log(0.1 + 0.2); // 0.30000000000000004
//toFixed() - округляет число до заданного количества знаков после запятой
console.log((0.1 + 0.2).toFixed(2)); // "0.30"  (возвращает строку)
let a2 = 12.345;
console.log(a.toFixed(1)); // 12.3
let b1 = 12.36;
console.log(b.toFixed(1)); // 12.4    (округляет до 1 знака после запятой)

// также использовать унарный оператор или Number чтобы привести к числу
let a3 = 12.3555466;
console.log(+a.toFixed(2)); // 12.36
console.log(Number(a.toFixed(2))); // 12.36

typeof NaN; // "number"
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// toString(base) - Возвращает строковое представление числа
console.log((100).toString(2)); // "1100100"
console.log((100).toString(8)); // "144"
console.log((100).toString(16)); // "64"

// 123.toString(); // ошибка
(123).toString(); // две точки для вызова метода

123 == new Number(123); // true
123 === new Number(123); // false

// Округление
Math.floor(123.456); // 123  округление в меньшую сторону
Math.ceil(123.456); // 124  округление в большую сторону
Math.round(123.456); // 123 округление до ближайшего целого
Math.trunc(123.456); // 123 удаление дроби

// два нуля
console.log(0 === -0); //true
console.log(Object.is(0, -0)); //false

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
0 / 0; // NaN

//parseInt() - переводит строку в целое число (без дробной части)
console.log(parseInt("10")); // 10
console.log(parseInt("10.5")); // 10

//parseFloat() - переводит строку в число (с дробной частью)
console.log(parseFloat("10.5")); // 10.5
console.log(parseFloat("0.1 + 0.2")); // 0.30000000000000004

//Math.abs() - возвращает абсолютное значение
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10

//Math.random() - возвращает случайное число в диапазоне от 0 до 1
console.log(Math.random()); // 0.123456789
console.log(Math.random() * 100); // 0.123456789 * 100 = 12.3456789

//Math.min() - возвращает минимальное значение
console.log(Math.min(1, 2, 3, 4, 5)); // 1

//Math.max() - возвращает максимальное значение
console.log(Math.max(1, 2, 3, 4, 5)); // 5

//Math.pow(x, y) - возвращает x в степени y
console.log(Math.pow(2, 3)); // 8

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let x = +prompt("Введите первое число");
let y = +prompt("Введите второе число");
let sum = x + y;
alert("Сумма " + sum);

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор,
// пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;
  do {
    num = prompt("введите число");
    if (num === "" || num === null) {
      return null;
    }
  } while (isNaN(num));
  return +num;
}
let res = readNumber();
console.log(res);

// Напишите функцию random(min, max), которая генерирует случайное число
// с плавающей точкой от min до max (но не включая max).

function random(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно)

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }

//Создайте функцию formatNumber которая принимает на вход число и форматирует его след образом
//1. Если это число меньше 1 миллиона, то функция возвращает его без изменений
//2. Если это число больше или равно 1 миллиону, то функция возвращает строку с суффиксом 'M' и округлено до двух знаков после запятой
//3. Если числоо больше или равно 1 миллиарду то должно преобразоваться в строку с суффиксом 'B' и округлено до трех знаков после запятой

//пример

function formatNumber(num) {
  if (num < 1000000) {
    return num;
  } else if (num < 1000000000) {
    return (num / 1000000).toFixed(2) + "M";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  }
}
console.log(formatNumber(500)); // 500
console.log(formatNumber(1500000)); // '1.50M'
console.log(formatNumber(2500000000)); // '2.50B'
