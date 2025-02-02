// Декораторы/call/apply
// Долг - Реализовать debounce без setTimeout

function debounce(func, ms) {
  let time = 0;
  return function () {
    const now = Date.now();
    if (now - time >= ms) {
      time = now;
      func.apply(this, arguments);
    }
  };
}
const dec = debounce((msg) => console.log(msg), 1000);

console.log(dec("zopa"));

//////////////////////////////////////////

function logDecorator(func) {
  return function (...args) {
    console.log(`вызывается с агрументами:${args}`);
    return func(...args);
  };
}
function sum(a, b) {
  return a + b;
}
const decoratedSum = logDecorator(sum);
console.log(decoratedSum(2, 3));

//Использовать метод apply, чтобы передать два числа в функцию sum.
function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [1, 2]));

//Напишите функцию, которая использует call для передачи контекста объекту.
const obj = { name: "pavel" };
function greet(greeting) {
  console.log(`${greeting} ${this.name}`);
}
greet.call(obj, "Привет");

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

//Реализуйте декоратор delay(f, ms), который откладывает выполнение функции f на ms миллисекунд.
function sayHello(name) {
  console.log(`Привет, ${name}!`);
}

function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.call(this, args), ms);
  };
}

const delayedSayHello = delay(sayHello, 2000);
delayedSayHello("pavel"); // Через 2 секунды: "Привет, pavel!"

// Декоратор принимает функцию и возвращает новую функцию
function timer(fn) {
  return function (...args) {
    const start = performance.now(); // Запоминаем начальное время
    const result = fn(...args); // Вызываем оригинальную функцию с аргументами
    const end = performance.now(); // Запоминаем конечное время
    console.log(`Время выполнения: ${end - start}ms`); // Выводим разницу во времени
    return result; // Возвращаем результат оригинальной функции
  };
}

// Пример: факториал
function factorial(n) {
  if (n === 1 || n === 0) return 1; // Базовый случай
  return n * factorial(n - 1); // Рекурсивный вызов
}

// Оборачиваем факториал декоратором
const timedFactorial = timer(factorial);

console.log(timedFactorial(5)); //

// throttling - вызывает только один раз в заданный интервал
function throttle(func, ms) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => (isThrottled = false), ms);
  };
}
