//Рекурсия
//Цикл же проигрывает рекурсии в таких вещах:
//Его нельзя использовать в функциональном программировании, потому что он императивен.
//Циклом гораздо сложнее обходить вложенные структуры данных, например, каталоги файлов.
//При работе с общими ресурсами или асинхронными задачами чаще удобнее использовать рекурсивные функции из-за замыканий.

//Минусы
//Много областей видимости (замыканий), которые относительно требовательны к памяти.
//Относительно просто читать, но сложнее отлаживать, чем цикл.

//Когда использовать рекурсию
//Если вы работаете с рекурсивной структурой данных, лучше использовать рекурсию — это будет сильно проще.
//Если промежуточный результат выполнения функции можно закэшировать, то стоит подумать об использовании рекурсии

//Когда использовать цикл
//Если рекурсивную функцию сложно читать или отлаживать, можно превратить её в цикл. Код станет менее лаконичным, но сил на отладку будет уходить меньше.
//Если вам жизненно необходимо оптимизировать работу программы, рекурсию можно переписать на цикл. Это почти всегда работает быстрее, хотя код и становится менее читаемым.

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(5 - 1) + fib(5 - 2); //5 fib(4) + fib(3)  вызов 3 + 2 = 5
fib(4 - 1) + fib(4 - 2); //4 fib(3) + fib(2)  вызов 2 + 1 = 3
fib(3 - 1) + fib(3 - 2); //3 fib(2) + fib(1)  вызов 1 + 1 = 2
fib(2 - 1) + fib(2 - 2); //2 fib(1) + fib(0)  вызов 1
console.log(fib(5)); // 5

function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}
console.log(sum(100));

//Вам нужно создать рекурсивную функцию под названием replicate которая будет принимать аргументы times и number.
//Функция должна возвращать массив, содержащий повторения аргумента number . Например, replicate(3, 5) должен возвращать [5,5,5]. Если аргумент times отрицательный, верните пустой массив.
//Как бы заманчиво это ни звучало, не используйте циклы для решения этой задачи.
function replicate(times, ...number) {
  if (times <= 0) {
    return [];
  }
  return [...number, ...replicate(times - 1, number)];
}
console.log(replicate(3, 5)); // [5,5,5]
console.log(replicate(-3, 1)); // []

// Обход объекта через рекурсию.
// Напиши функцию, которая обходит все свойства вложенного объекта и возвращает массив всех значений.
const data = {
  name: "John",
  info: {
    age: 30,
    location: {
      country: "USA",
      city: "New York",
    },
  },
};

function getValues(obj) {
  if (obj !== "object" || obj === null) {
    return [obj];
  }
  let clone = [];
  for (let key in obj) {
    clone = clone.concat(getValues(obj[key]));
  }
  return clone;
}

console.log(getValues(data));
// ["John", 30, "USA", "New York"]

function sumToAll(n) {
  return n === 1 ? 1 : n + sumToAll(n - 1);
}
console.log(sumToAll(5));

function xsum(n, acc = 0) {
  return n === 1 ? 1 : n + xsum(n - 1, acc + n);
}
console.log(xsum(5));

function pow(base, n) {
  return n == 0 ? 1 : base * pow(base, n - 1);
}
console.log(pow(2, 3));

function xpow(base, n, acc = 1) {
  return n === 0 ? acc : xpow(base, n - 1, acc * base);
}
console.log(xpow(2, 3));

// задача на попрошайку
function randomInteger(min, max) {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
}
function createBeggar() {
  let count = 0;
  return function beggar() {
    count += randomInteger(0, 100);
    console.log(count);
    if (count >= 250) return;
    beggar();
  };
}
const begg = createBeggar();
const begg1 = createBeggar();

begg();
begg1();
