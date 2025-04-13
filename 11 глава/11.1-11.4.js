// promise
function stepPromise(n) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`шаг номер ${n}`);
      res();
    }, 1000);
  });
}

stepPromise(1)
  .then(() => stepPromise(2))
  .then(() => stepPromise(3))
  .then(() => console.log("Все шаги выполнены!"));
// пример на понимания
Promise.resolve(1)
  .then((res) => {
    console.log(res); // 1
    return res * 2;
  })
  .then((res) => {
    console.log(res); // 2
    throw new Error("Ошибка в then");
  })
  .catch((err) => {
    console.log(err.message); // Ошибка в then
    return 3;
  })
  .catch((err) => {
    console.log(err.message);
    return 4;
  })
  .then((res) => {
    console.log(res); // 3
    return Promise.reject("Ошибка в then после catch");
  })
  .catch((err) => {
    console.log(err); // "Ошибка в then после catch"
  })
  .finally(() => {
    console.log("finally1"); // finally1
  })
  .finally(() => {
    console.log("finally2"); //finally2
  });

// пример на понимания
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// пример на понимания
console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
//  1.Напишите функцию createPromise, которая возвращает промис, разрешающийся через 2 секунды с сообщением "Промис выполнен".
// Обработка успешного результата
// Используйте созданный в предыдущем пункте промис и обработайте его результат с помощью .then, выводя сообщение в консоль
function createPromise() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Промис выполнен");
    }, 2000);
  });
}
createPromise().then(console.log);

// 2.Создание промиса с ошибкой
// Напишите функцию createErrorPromise, которая возвращает промис, который отклоняется через 1 секунду с сообщением "Произошла ошибка".
// Обработка ошибки
// Используйте промис из предыдущего пункта и обработайте ошибку с помощью .catch, выводя сообщение в консоль.
function createErrorPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Произошла ошибка");
    }, 1000);
  });
}
createErrorPromise().catch(console.log);

//  3. Цепочка промисов
// Напишите промис fetchData, который симулирует получение данных с сервера (параметризированный объект). Он должен разрешаться через 1 секунду с массивом данных (например, [1, 2, 3]).
// Создайте цепочку вызовов, за которой будет следовать логическое значение (параметр) для второго промиса (например, умножающего каждый элемент массива на 2) и возвращающего новый массив.
const promises = [1, 2, 3];

function fetchData(arr) {
  return new Promise((res) => {
    setTimeout(() => {
      res(arr);
    }, 1000);
  });
}
fetchData(promises)
  .then((res) => {
    console.log("Полученные данные:", res);
    return res.map((el) => el * 2);
  })
  .then((res) => {
    console.log("Преобразованные данные:", res);
  });
// 4.Промисы and delay
// Создайте функцию delay, которая принимает число (количество миллисекунд) и возвращает промис, который разрешается после истечения указанного времени.
// Используйте его для последовательного ожидания (2 секунды, затем 1 секунда, затем 3 секунды).

function delay(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
delay(2000)
  .then(() => {
    console.log("2c");
    return delay(1000);
  })
  .then(() => {
    console.log("1c");
    return delay(3000);
  })
  .then(() => {
    console.log("3c");
  });

// 5.Обработка нескольких промисов с Promise.all
// Создайте три промиса, каждый из которых разрешается через разное количество времени (например, 1, 2 и 3 секунды).
//  Используйте Promise.all для обработки всех промисов и вывода результата в консоль, когда все они будут выполнены.
function foo(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`промис выполнился через ${sec} секунд`);
    }, sec * 1000);
  });
}

Promise.all([foo(1), foo(2), foo(3)]).then((result) => {
  console.log(result);
});

// 6. Напишите функцию checkOperationStatus(status), которая принимает строковый аргумент status и возвращает промис:
// Если status === "success", промис должен разрешаться через 2 секунды со строкой "Операция выполнена успешно"
// Если status === "fail", промис должен отклоняться через 5 секунд с сообщением "Ошибка выполнения операции"

// Дополнительно:
// Вызовите checkOperationStatus("success"), обработайте результат с помощью .then(), выводя его в консоль.
// Вызовите checkOperationStatus("fail"), обработайте ошибку с помощью .catch(), выводя её в консоль.

function checkOperationStatus(status) {
  return new Promise((resolve, reject) => {
    if (status === "success") {
      setTimeout(() => {
        resolve("Операция выполнена успешно");
      }, 2000);
    }
    if (status === "fail") {
      setTimeout(() => {
        reject("Ошибка выполнения операции!");
      }, 5000);
    }
  });
}

checkOperationStatus("success")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

checkOperationStatus("fail")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//7.Напишите функцию rejectPromise(arr), которая принимает массив промисов и возвращает массив только с теми промисами, которые были отклонены (rejected).
function rejectPromise(arr) {
  return Promise.allSettled(arr).then((res) => {
    return res.filter((el) => el.status === "rejected").map((el) => el.reason);
  });
}

const promises1 = [
  Promise.resolve(1),
  Promise.reject("Ошибка 1"),
  Promise.resolve(2),
  Promise.reject("Ошибка 2"),
];

rejectPromise(promises1).then((rejectedPromises) => {
  console.log(rejectedPromises); // Ожидаемый результат: массив с отклонёнными промисами
});

// Напиши промис с обработкой ошибки, где вероятность возникновения ошибки 50%.
// Доработай предыдущий промис так, чтобы в finally всегда выполнялось console.log("Завершено").
function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("Успех!") : reject(new Error("Ошибка!"));
    }, 1000);
  });
}
randomPromise()
  .then(console.log)
  .catch(console.error)
  .finally(console.log("Завершено"));

//   1️⃣ Напиши цепочку промисов, которая:
// Через 1 секунду возвращает число 10.
// Умножает его на 2.
// Возводит в квадрат.
// Выводит результат.
function chainingPromise() {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
}
chainingPromise()
  .then(() => {
    console.log(10, "ZOPA");
    return 10;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    return res ** 2;
  })
  .then((res) => {
    console.log(res, "ZOPA");
  });

Promise.resolve(10)
  .then((n) => n * 2)
  .then((n) => n ** 2)
  .then(console.log);
// 2️⃣ Напиши промис, который эмулирует запрос к серверу:
// Если Math.random() > 0.5, через 1 секунду он успешно возвращает { data: "OK" }.
// Иначе через 1 секунду выбрасывает ошибку "Сервер недоступен".
// Обработай возможную ошибку.
function requestToServerPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve({ data: "OK" })
        : reject(new Error("Сервер недоступен!"));
    }, 1000);
  });
}
requestToServerPromise().then(console.log).catch(console.error);

// 3️⃣ Напиши функцию loadJson(url), которая делает fetch(url) и парсит JSON, но возвращает ошибку "Некорректный JSON", если сервер вернул невалидные данные.
function loadJson(url) {
  return fetch(url).then((response) =>
    response.json().catch(() => Promise.reject(new Error("Некорректный JSON")))
  );
}
loadJson("https://jsonplaceholder.typicode.com/todos/1")
  .then(console.log)
  .catch(console.error);

// 4️⃣ Напиши промис, который загружает данные, но всегда показывает "Загрузка завершена" в finally().
new Promise((res) => setTimeout(() => res("Данные загружаются"), 1000))
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Загрузка завершена"));

// 5️⃣ Напиши цепочку промисов, где ошибка в середине не прерывает выполнение кода, а просто логируется и продолжается выполнение цепочки.
Promise.resolve()
  .then(() => {
    throw new Error("Ошибка");
  })
  .catch((err) => {
    console.error("Поймали ошибку:", err.message);
    return "Всё нормально";
  })
  .then(console.log);

// 1️⃣ Допиши код, чтобы он обработал ошибку и продолжил выполнение цепочки:
Promise.resolve(1)
  .then((num) => {
    throw new Error("Ошибка!");
  })
  .then((num) => console.log("Не выполнится"))
  .catch((err) => {
    console.log("Поймали ошибку:", err.message);
    return "zopa";
  })
  .then((res) => console.log("Продолжаем выполнение", res));

//   2️⃣ Напиши функцию fetchData(url), которая делает fetch(url), но:
// Если ошибка сети — выбрасывает "Ошибка сети"
// Если сервер вернул не 200, выбрасывает "Ошибка HTTP: <код>"
// Если JSON некорректный, выбрасывает "Некорректный JSON"
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      if (err instanceof TypeError) {
        throw new Error("Ошибка сети");
      }
      if (err instanceof SyntaxError) {
        throw new Error("Некорректный JSON");
      }
      throw err;
    });
}

fetchData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Данные:", data))
  .catch((err) => console.error("Ошибка:", err.message));

// 3️⃣ Допиши код, чтобы ошибка в finally() не мешала выполнению цепочки:
Promise.resolve("Начало")
  .finally(() => {
    try {
      throw new Error("Ошибка в finally");
    } catch (e) {
      console.log("перехват", e.message);
    }
  })
  .then(console.log)
  .catch(console.error);
// 4️⃣ Напиши функцию-обёртку safeAsync(fn), которая принимает функцию fn и оборачивает её в try/catch, возвращая успешный промис даже в случае ошибки.

function safeAsync(fn) {
  return function (...args) {
    return Promise.resolve(fn(...args)).catch((err) => {
      console.error("Произошла ошибка:", err.message);
      return null;
    });
  };
}

// Пример использования:
async function fetchData() {
  throw new Error("Ошибка загрузки");
}

const safeFetch = safeAsync(fetchData);

safeFetch().then((result) => console.log("Результат:", result));
