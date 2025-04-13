// Последовательное выполнение промисов
// Задача: Напишите функцию runSequentially, которая принимает массив функций, возвращающих промисы, и выполняет их последовательно.
function runSequentially(promise) {
  const result = [];
  const chain = Promise.resolve();
  for (let item of promise) {
    chain = chain
      .then(() => item())
      .then((res) => {
        result.push(res);
      });
  }
  return chain.then(() => result);
}
// Пример использования:
function asyncTask1() {
  return new Promise((resolve) => setTimeout(() => resolve(1), 1000));
}

function asyncTask2() {
  return new Promise((resolve) => setTimeout(() => resolve(2), 500));
}

function asyncTask3() {
  return new Promise((resolve) => setTimeout(() => resolve(3), 200));
}

runSequentially([asyncTask1, asyncTask2, asyncTask3]).then(console.log);
// Ожидаемый результат: [1, 2, 3], но каждый элемент появится только после завершения предыдущего

// Группировка результатов промисов
// Задача: Напишите функцию groupPromises(promises), которая группирует промисы на успешно выполненные и отклоненные.
function groupPromises(promises) {
  return Promise.allSettled(promises).then((res) => {
    const resolved = res
      .filter((el) => el.status === "fulfilled")
      .map((el) => el.value);
    const rejected = res
      .filter((el) => el.status === "rejected")
      .map((el) => el.reason);
    return { resolved, rejected };
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.reject("Ошибка 1");
const p3 = Promise.resolve(2);
const p4 = Promise.reject("Ошибка 2");

groupPromises([p1, p2, p3, p4]).then(console.log);
// Ожидаемый результат: { resolved: [1, 2], rejected: ["Ошибка 1", "Ошибка 2"] }

// / Цепочка промисов с обработкой ошибок
// Задача: Напишите функцию handleWithRetry(fn, retries), которая выполняет переданную асинхронную функцию fn и в случае ошибки повторяет попытку retries раз.
async function handleWithRetry(fn, retries) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries) throw err;
    }
  }
}

// Пример использования:
let attempt = 0;
function unstableTask() {
  return new Promise((resolve, reject) => {
    attempt++;
    if (attempt < 3) reject("Ошибка " + attempt);
    else resolve("Успех на попытке " + attempt);
  });
}

handleWithRetry(unstableTask, 5).then(console.log).catch(console.error);
// Ожидаемый результат: "Успех на попытке 3"

//   Задача 1. Запуск нескольких асинхронных функций параллельно (Promise.all())
// У тебя есть массив чисел. Для каждого числа есть асинхронная функция fetchNumber(), которая возвращает его через рандомное время.
// Твоя задача — запустить все эти функции одновременно и вывести массив чисел в том же порядке

const numbers = [1, 2, 3, 4, 5];

function fetchNumber(num) {
  return new Promise((resolve) => {
    const delay = Math.random() * 3000;
    setTimeout(() => resolve(num), delay);
  });
}

async function fetchAllNumbers(numbers) {
  return await Promise.all(numbers.map(fetchNumber));
}

fetchAllNumbers(numbers).then(console.log); // Ожидаемый результат (пример):[1, 2, 3, 4, 5]

// Задача 2. Кто выполнится быстрее? (Promise.race())
// Ты вызываешь несколько асинхронных функций, но тебе важно забрать только первый успешный результат и остальные проигнорировать.

function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve("Данные 1"), 3000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve("Данные 2"), 2000));
}

function fetchData3() {
  return new Promise((resolve) => setTimeout(() => resolve("Данные 3"), 4000));
}

async function getFastestData() {
  return await Promise.race([fetchData1(), fetchData2(), fetchData3()]);
}

getFastestData().then(console.log); //"Данные 2" (так как fetchData2 быстрее)

// Задача 3. Первый успешный ответ (Promise.any())
// Представь, что ты запрашиваешь данные с нескольких серверов. Если один из них успешно отвечает, то нужно вернуть его результат.
// Если все запросы завершились с ошибкой, то выведи "Все запросы завершились с ошибкой".

function fetchServer1() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Ошибка сервера 1"), 3000)
  );
}

function fetchServer2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Данные с сервера 2"), 2000)
  );
}

function fetchServer3() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Ошибка сервера 3"), 4000)
  );
}

async function getFirstSuccessfulData() {
  try {
    return await Promise.any([fetchServer1(), fetchServer2(), fetchServer3()]);
  } catch {
    console.log("Все запросы завершились с ошибкой");
  }
}

getFirstSuccessfulData().then(console.log).catch(console.error);

// Первый успешно выполненный промис
// Задача: Напишите функцию firstResolved(promises), которая возвращает значение первого успешно завершенного промиса.
function firstResolved(promises) {
  return Promise.any(promises);
}
// Пример использования:
const pr1 = new Promise((res, rej) => setTimeout(rej, 500, "Ошибка 1"));
const pr2 = new Promise((res) => setTimeout(res, 300, "Успех 2"));
const pr3 = new Promise((res) => setTimeout(res, 700, "Успех 3"));

firstResolved([pr1, pr2, pr3]).then(console.log);
// Ожидаемый результат: "Успех 2"

// Задача 4. Ждем выполнения всех промисов (Promise.allSettled())
// Ты отправляешь несколько запросов к API. Тебе нужно дождаться выполнения всех и вывести успешные и неуспешные запросы отдельно.
const requests = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Запрос 1: успех"), 1000)
    ),
  () =>
    new Promise((_, reject) =>
      setTimeout(() => reject("Запрос 2: ошибка"), 2000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Запрос 3: успех"), 3000)
    ),
  () =>
    new Promise((_, reject) =>
      setTimeout(() => reject("Запрос 4: ошибка"), 4000)
    ),
];

async function fetchAllRequests(requests) {
  const results = await Promise.allSettled(requests.map((req) => req()));

  console.log(
    "✅ Успехи:",
    results.filter((r) => r.status === "fulfilled").map((r) => r.value)
  );
  console.log(
    "❌ Ошибки:",
    results.filter((r) => r.status === "rejected").map((r) => r.reason)
  );
}

fetchAllRequests(requests).then(console.log);

// Задача 5. Цепочка промисов (Promise.then())
// У тебя есть три асинхронные функции, каждая из которых принимает число, ждет 1 секунду и увеличивает его на 1.
// Напиши код, который последовательно вызовет их и вернет результат.
function step1(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num + 1), 1000));
}

function step2(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num + 1), 1000));
}

function step3(num) {
  return new Promise((resolve) => setTimeout(() => resolve(num + 1), 1000));
}

async function processNumber(start) {
  return step1(start).then(step2).then(step3);
}

processNumber(0).then(console.log); // 3

// 🔧 Задача 1: Промисифицируй setTimeout
// Создай функцию delay(ms), которая возвращает промис и ждёт указанное количество миллисекунд:
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
delay(2000).then(() => console.log("Прошло 2 секунды"));

// 🔧 Задача 2: Промисифицируй функцию loadScript
// Есть функция, добавляющая <script> на страницу:
// Сделай промисифицированную версию: loadScriptPromise(src), которая позволяет использовать await.
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Ошибка загрузки"));
  document.head.append(script);
}
async function loadScriptPromise(src) {
  return promisify(loadScript(src))
    .then((script) => console.log("SCRIPPT", script))
    .catch((e) => console.log("ERROR", e));
}

const test = await loadScriptPromise("https://example.com/script.js");

const { error } = require("console");
// 🔧 Задача 3: Промисифицируй функцию с Node.js
// Вот пример Node.js-функции:
const fs = require("fs");
const { stream } = require("undici-types");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// 🔧 Напиши promisify, чтобы использовать:
function promisify(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
  };
}
const readFilePromise = promisify(fs.readFile);
const content = readFilePromise("example.txt", "utf8")
  .then((data) => console.log("Содержимое файла:", data))
  .catch((err) => console.error("Ошибка:", err));

// 🔧 Задача 4: Несколько аргументов в callback
// Промисифицируй её так, чтобы Promise возвращал оба значения в виде массива [lat, lng].
// Допустим у тебя есть функция:

function promisify(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, ...result) => {
        if (err) rej(err);
        else res(result);
      });
    });
  };
}
function getCoordinates(callback) {
  // callback(null, lat, lng)
  callback(null, 59.9386, 30.3141);
}
const coordinates = promisify1(getCoordinates);
coordinates.then(([lat, lng]) => console.log("Координаты:", lat, lng));

// 🔧 Задача 5: Напиши универсальную функцию promisify
// Напиши свою версию функции promisify, которая:
// Принимает любую функцию вида f(arg1, arg2..., callback)
// Возвращает новую, возвращающую Promise
// Работает с callback(err, result)
// Для следующего использования:
function promisify(fn) {
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, result) => {
        if (err) rej(err);
        else res(result);
      });
    });
  };
}
const promisifiedFn = promisify(myFunc);
const result = await promisifiedFn(arg1, arg2);
