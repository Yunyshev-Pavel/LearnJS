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

const promises = [
  Promise.resolve(1),
  Promise.reject("Ошибка 1"),
  Promise.resolve(2),
  Promise.reject("Ошибка 2"),
];

rejectPromise(promises).then((rejectedPromises) => {
  console.log(rejectedPromises); // Ожидаемый результат: массив с отклонёнными промисами
});
