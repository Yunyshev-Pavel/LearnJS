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
    return JSON.parse(str);
  } catch (err) {
    console.log("формат некорректный");
  }
}

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
