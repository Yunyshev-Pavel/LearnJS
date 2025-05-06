//     next = previous * 16807 % 2147483647
// Если мы используем 1 как зерно, то значения будут:

// 16807
// 282475249
// 1622650073
// …и так далее…
// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

// Пример использования:
function* pseudoRandom(seed) {
    let value = seed;
    while (true) {
      value = (value * 16807) % 2147483647;
      yield value;
    }
  }
  let generator = pseudoRandom(1);
  
  console.log(generator.next().value); // 16807
  console.log(generator.next().value); // 282475249
  console.log(generator.next().value); // 1622650073
  
  //Напишите генератор, который будет возвращать числа Фибоначчи.
  function* fibonacci() {
    let a = 0,
      b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  // Пример использования:
  const fib = fibonacci();
  console.log(fib.next().value); // 0
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 2
  console.log(fib.next().value); // 3
  
  //Напишите генератор, который будет возвращать циклические значения по массиву.
  function* cyclicGen(array) {
    let i = 0;
    while (true) {
      yield array[i % array.length];
      i++;
    }
  }
  
  // Пример использования:
  const cycle = cyclicGen(["a", "b", "c"]);
  console.log(cycle.next().value); // 'a'
  console.log(cycle.next().value); // 'b'
  console.log(cycle.next().value); // 'c'
  console.log(cycle.next().value); // 'a'
  console.log(cycle.next().value); // 'b'
  
  
  
  
  
  
  //  Ограничение количества одновременных запросов
  // Задача: Напишите функцию limitConcurrency(tasks, limit), которая выполняет промисы максимум в limit потоков одновременно.
  
  const { log } = require("console");
  
  // Пример использования:
  function limitConcurrency(tasks, limit) {}
  
  const tasks = [
    () => new Promise((res) => setTimeout(() => res(1), 1000)),
    () => new Promise((res) => setTimeout(() => res(2), 500)),
    () => new Promise((res) => setTimeout(() => res(3), 200)),
    () => new Promise((res) => setTimeout(() => res(4), 100)),
  ];
  
  // limitConcurrency(tasks, 2).then(console.log);
  // Ожидаемый результат: [1, 2, 3, 4], но не более 2 промисов выполняются одновременно
  
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
  
  function getData() {
    return new Promise((resolve, reject) => {
      reject();
      throw new Error("Ошибка при загрузке");
    });
  }
  
  getData().catch(console.error);
  