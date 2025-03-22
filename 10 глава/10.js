//
//try...catch
// 1. напиши функцию которая принимает два числа и делит одно на другое . Если второе число равно нулю , поймай ошибку и выведи о том что деление на ноль невозможно

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Ошибка: деление на ноль");
    }
    return a / b;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(5, 0)); // Ошибка

// 2. Создай функию  которая принимает строку и пытается распарсить ее как JSON . Если строка некорректна и не является валидным JSON поймай ошибку
// и выведи сообщение о том что формат некорректный

function parseJson(str) {
  try {
    const parse = JSON.parse(str);
    return parse;
  } catch (err) {
    console.log("формат некорректный", err.message);
    return null;
  }
}
console.log(parseJson('{"name" : "Pavel"}'));

// 3.
// Напишите функцию `getElement(array, index)`, которая принимает массив и индекс. Она должна возвращать элемент массива по указанному индексу.
// Если индекс выходит за границы массива, выбрасывайте ошибку с сообщением "Индекс вне границ массива". Используйте `try..catch` для обработки этой ошибки и возвращайте `undefined` в случае её возникновения.

function getElement(arr, i) {
  try {
    if (i < 0 || i >= arr.length) {
      throw new Error("Индекс вне границ массива");
    }
  } catch (err) {
    return err.message;
  }

  return arr[i];
}
const arr = [1, 2, 3, 4, 5];
console.log(getElement(arr, 1)); // 2
console.log(getElement(arr, 15)); // Индекс вне границ массива

//4.
// Создайте функцию `sumNumbers(a, b)`, которая принимает два аргумента и возвращает их сумму. Если один из аргументов не является числом, выбрасывайте ошибку с сообщением "Оба аргумента должны быть числами".
// Обработайте ошибку с помощью `try..catch` и возвращайте `0` в случае возникновения ошибки.
function sumNumbers(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Оба аргумента должны быть числами");
    }
  } catch (e) {
    console.log(e.message);
    return 0;
  }
  return a + b;
}

console.log(sumNumbers(1, 2)); //3
console.log(sumNumbers("qwer", 5)); // Оба аргумента должны быть числами
//5.
//  Напишите функцию `getProperty(obj, prop)`, которая принимает объект и имя свойства. Она должна возвращать значение свойства объекта. Если переданное свойство не существует, выбрасывайте ошибку с сообщением "Свойство не найдено".
// Обработайте эту ошибку с использованием `try..catch` и возвращайте `null` в случае возникновения ошибки.

const user = {
  name: "pavel",
  age: 555,
  location: "zopa",
};
function getProperty(obj, prop) {
  try {
    if (!obj.hasOwnProperty(prop)) {
      throw new Error("Свойство не найдено");
    }
  } catch (e) {
    console.log(e.message);
    return null;
  }
  return obj[prop];
}

console.log(getProperty(user, "location")); // zopa
console.log(getProperty(user, "city")); // Свойство не найдено null
//6.
// Напишите функцию `validateEmail(email)`, которая принимает строку с электронной почтой и проверяет, соответствует ли она стандартному формату (например, с использованием регулярного выражения). Если формат неверен, выбрасывайте ошибку с сообщением "Некорректный адрес электронной почты".
// Обработайте ошибку с помощью 'try..catch' и возвращайте `false` в случае её возникновения. В противном случае возвращайте `true`.

function validateEmail(email) {
  try {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regExp.test(email)) {
      throw new Error("Некорректный адрес электронной почты");
    }
  } catch (e) {
    console.log(e.message);

    return false;
  }
  return true;
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email"));
"Некорректный адрес электронной почты", false;
// 7.
// Напишите функцию validateNumbers, которая принимает массив чисел. В случае, если в массиве есть хотя бы одно нечисловое значение,
// выбросьте TypeError с сообщением "Все элементы массива должны быть числами!". Оберните вызов этой функции в try...catch, чтобы обработать возможные исключения.

function validateNumbers(arr) {
  if (arr.some((el) => typeof el !== "number")) {
    throw new TypeError("Все элементы массива должны быть числами!");
  }
  console.log("Все элементы массива являются числами.");
}
try {
  console.log(validateNumbers([1, 2, "qwe"]));
} catch (e) {
  console.log(e.message);
}

// 8.
// Создайте класс InvalidAgeError, который наследует от Error. Реализуйте функцию registerUser, которая принимает возраст. Если возраст меньше 18,
// выбросьте InvalidAgeError с сообщением "Возраст должен быть 18 или больше!". Используйте try...catch, чтобы обработать эту ошибку.

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}
function registerUser(age) {
  try {
    if (age < 18) {
      throw new InvalidAgeError("Возраст должен быть 18 или больше");
    }
  } catch (e) {
    // console.log(e);
    console.log(e.message);
    // console.log(e.name);
  }
}
console.log(registerUser(11));

// 9.
// Создайте класс `UserValidationError`, расширяющий стандартный класс `Error`. Эта ошибка должна использоваться для проверки корректности данных пользователя.
//  1. Определите класс `UserValidationError`, который принимает сообщение о чем-то, что не так с данными пользователя.
// 2. Реализуйте функцию `validateUser`, которая принимает объект пользователя с полями `name` и `age`. Проверьте, что:
//    - Имя пользователя является строкой и не пустое.
//    - Возраст — это число, и оно больше нуля.
// 3. Если условия не выполнены, выбросьте `UserValidationError` с соответствующим сообщением (например, "Имя должно быть непустой строкой" или "Возраст должен быть положительным числом").
// 4. Напишите несколько тестов, в которых корректные и некорректные данные проверяются с использованием блоков `try...catch`.

class UserValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserValidationError";
  }
}

function validateUser(obj) {
  if (!obj.hasOwnProperty("name")) {
    throw new UserValidationError("Отсутствует свойство 'name'");
  }
  if (obj.name === "") {
    throw new UserValidationError("Имя должно быть непустой строкой");
  }
  if (typeof obj.name !== "string") {
    throw new UserValidationError("Имя должно быть строкой");
  }
  if (!obj.hasOwnProperty("age")) {
    throw new UserValidationError("Отсутствует свойство 'age'");
  }
  if (obj.age < 0) {
    throw new UserValidationError("Возраст должен быть положительным числом");
  }
  if (typeof obj.age !== "number") {
    throw new UserValidationError("Возраст должен быть числом");
  }
  return obj;
}

const users = [
  { name: "Zopa", age: 25 }, // Пользователь "Zopa" прошел валидацию.
  { name: "John", age: -5 },
  { name: "Emma", age: 30 },
  { age: 25 },
  { name: "Liam" },
];

users.forEach((user) => {
  try {
    validateUser(user);
    console.log(`Пользователь "${user.name}" прошел валидацию.`);
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
});

async function test() {
  try {
    console.log("Начало");
    return "try";
  } finally {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("finally (с задержкой)!");
  }
}

test().then(console.log);

///finally сам по себе не асинхронный, но если внутри есть await, код ждёт его выполнения.
// Сначала выполняется try и return, но finally с await заставляет код подождать.
// Только после этого результат возвращается в .then()

class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    this.stack; //<стек вызовов>; // нестандартное свойство, но обычно поддерживается
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Использование
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("Нет поля: age");
  }
  if (!user.name) {
    throw new ValidationError("Нет поля: name");
  }

  return user;
}

// Рабочий пример с try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
  } else if (err instanceof SyntaxError) {
    // (*)
    console.log("JSON Ошибка Синтаксиса: " + err.message);
  } else {
    throw err; // неизвестная ошибка, пробросить исключение (**)
  }
}

function doSomeWithError(e) {
  throw new Error("new error");
}

try {
  // подключаемся к вебсокету, но в конце нужно обязательно отключиться
  webSocket.connect("ws://....");

  callMayThrowError();
} catch (err) {
  // Здесь тоже может возникнуть ошибка
  doSomeWithError(err);
}

// В случае ошибки эта строчка уже не выполнится
webSocket.disconnect("ws://....");

// parse-module.js

// Есть свой тип ошибки
class ParsingError extends Error {}

function parse(data) {
  try {
    parseData(data);
  } catch (err) {
    if (err.name !== "ParsingError") {
      // Другой тип ошибок пробрасываем дальше
      throw err;
    }

    logError(err);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function timeout(fn, ms) {
  try {
    // Ждем таймаут
    await wait(ms);

    // И выполняем функцию
    fn();
  } catch (err) {
    // Ловим ошибку
    console.log("Ошибка", err);
  }
}

timeout(() => {
  throw Error("ошибка");
}, 1000);

function example() {
  try {
    console.log("Внутри try");
    return "Возвращаем из try";
  } catch (error) {
    console.log("Ошибка поймана");
    return "Возвращаем из catch";
  } finally {
    console.log("Выполняем finally");
    return "Возвращаем из finally";
  }
}

console.log(example());

function example4() {
  try {
    console.log("Внутри try");
    return "Возвращаем из try";
  } catch (error) {
    console.log("Ошибка поймана");
    return "Возвращаем из catch";
  } finally {
    console.log("Выполняем finally");
    throw new Error("Новая ошибка из finally");
  }
}

try {
  console.log(example4());
} catch (error) {
  console.log("Перехват ошибки:", error.message);
}

//Если в finally есть return, оно переопределяет любые return из try или catch.
// Если finally не содержит return, оно просто выполняется, но не влияет на возвращаемое значение.
// Если finally выбрасывает исключение (throw), выполнение функции прерывается и выбрасывается новая ошибка.

class ErrorHandling extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ErrorHandling";
  }
}

try {
  console.log("что-то");
  throw new ErrorHandling("у нас проблемы");
} catch (err) {
  if (err instanceof ErrorHandling) {
    console.log("наследуется от нашей ошибки", err);
  } else {
    throw err;
  }
}
try {
  console.log(sum("1", 2));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("ошибка ", err.message);
  } else {
    throw err;
  }
} finally {
  console.log("zopa");
}

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new ErrorHandling("Невалидный тип данных для суммирования");
  }
  return a + b;
}

console.log(sum("1", 2));

// SyntaxError Скопировать ссылку "SyntaxError"
// Чаще всего встречаются опечатки — неправильные названия методов, лишние или отсутствующие точки с запятой или скобочки и так далее. Такой тип ошибок называется «синтаксическим», SyntaxError:

// console.log(;)
// SyntaxError: Unexpected token ';'

// ReferenceError Скопировать ссылку "ReferenceError"
// Если попытаться обратиться к несуществующей переменной, произойдёт ошибка ReferenceError:

// console.log(name)
// ReferenceError: name is not defined

// TypeError Скопировать ссылку "TypeError"
// Если попытаться обратиться к несуществующему свойству, произойдёт ошибка TypeError:

// console.log(null.length)
// TypeError: Cannot read property 'length' of null

// RangeError Скопировать ссылку "RangeError"
// Ошибка для значений, которые выходят за диапазон допустимого.
// new Array(10000000000)// // //

//   Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
//   Класс должен поддерживать свойства message, name и stack.
class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}
let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
