// //setTimeout и setInterval

setTimeout(() => {
  console.log("Я первый!"); // потом этот
});
console.log("Я второй!"); // сначала этот

const intervalId = setInterval(function () {
  console.log("Выполняется каждую секунду");
}, 1000);

let i = 0;
setInterval(() => {
  console.log(i);
  i++;
}, 1000);

// // Если необходимо выжидать время не между запусками функций, как в setInterval(),
// // а между завершениями, то этого можно достичь цепочкой вызовов setTimeout():

let timeId;

timeId = setTimeout(function work() {
  console.log("выполняется через секунду после предыдущей");
  timeId = setTimeout(work, 1000);
}, 1000);

function main() {
  setTimeout(function greet() {
    console.log("hello"); // цикл событий после того как сет пропадает из стека вызовов greet попадает в очередь
  }, 2000);
  console.log("bye");
}
console.log(main()); /// стек вызовов

//
function printNumbers(from, to) {
  let curr = from;
  let timeId = setInterval(() => {
    if (curr < to) {
      console.log(curr);
      curr++;
    }
    return clearInterval(timeId);
  }, 1000);
}
console.log(printNumbers(1, 5));

// Напишите функцию, которая принимает массив чисел и выводит их по одному через каждые 2 секунды.

function printWithDelay(arr) {
  let index = 0;
  function printNext() {
    if (index < arr.length) {
      console.log(arr[index]);
      index++;
      setTimeout(printNext, 2000);
    }
  }
  printNext();
}
console.log(printWithDelay([10, 20, 30, 40]));

// Напишите функцию, которая запускает бесконечный интервал.
// Через 10 секунд таймер должен остановиться. Для реализации используйте setTimeout

let count = 0;
function run() {
  if (count === 5) return;
  count++;
  setTimeout(run, 2000);
}
console.log(run());

// Практическое задание
//Задание: Напишите функцию, которая будет запускать таймер с использованием setInterval,
//выводить сообщение каждую секунду и прекращать выполнение через 5 секунд.

function timeOutputMessage() {
  const time = setInterval(() => {
    console.log("zopa");
  }, 1000);
  setTimeout(() => {
    clearInterval(time);
  }, 5000);
}

// Напиши функцию fetchData, которая каждые 2 секунды выводит в консоль "Данные запрошены". Через 10 секунд выполнение должно остановиться.
function fetchData() {
  const timeId = setInterval(() => console.log("Данные запрошенны"), 2000);
  setTimeout(() => {
    clearInterval(timeId);
    console.log("остановлено");
  }, 10000);
}
