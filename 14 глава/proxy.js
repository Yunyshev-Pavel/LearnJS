const { log } = require("console");
const { get } = require("http");

//Задача 1: Логгер доступа
const user = {
  name: "Аня",
  age: 25,
};

const proxy1 = new Proxy(user, {
  get(target, prop) {
    console.log(`"Доступ к свойству"${prop}"`);
    return target[prop];
  },
});

console.log(proxy1.name);

// Задача 2: Валидатор возраста
// Создай прокси, который не позволяет устанавливать отрицательный возраст:
const person = {};
const proxy = new Proxy(person, {
  set(target, prop, value) {
    if (prop === "age" && typeof value === "number" && value < 0) {
      throw new Error("Возраст не может быть отрицательны");
    }
    target[prop] = value;
    return true;
  },
});

proxy.age = 30; // OK
proxy.age = -10; // Ошибка: Возраст не может быть отрицательны

// Задача 3
// Скрыть приватные свойства
// Все свойства, начинающиеся с _, должны быть скрыты от:
// чтения (proxy._secret)
// и от in ('_secret' in proxy)
const data = {
  _token: "secret",
  name: "Ира",
};

const proxy = new Proxy(data, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Доступ запрещён");
    }
    return target[prop];
  },
  has(target, prop) {
    if (prop.startsWith("_")) return false;
    return prop in target;
  },
});

console.log(proxy.name); // → Ира
console.log(proxy._token); // → Ошибка
console.log("_token" in proxy); // → false

// Задача 4: Логгирование вызова функции (apply)
// Задание: Сделать прокси, который логирует аргументы и результат вызова функции.
function multiply(a, b) {
  return a * b;
}
const proxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    console.log(args);
    const res = Reflect.apply(target, thisArg, args);
    console.log(res);
    return res;
  },
});

proxy(2, 5); // 10

// Задача 5: Логирование конструктора (construct)
// Задание: Прокси, который логирует создание объектов через new.
function User(name) {
  this.name = name;
}

const proxy = new Proxy(User, {
  construct(target, args) {
    console.log("Создание объекта с аргументами:", args);
    return new target(...args);
  },
});

const user = new proxy("Вася");
console.log(user.name);

// Задача 6: Защита от удаления (deleteProperty)
// Задание: Запретить удалять свойства, начинающиеся на _.
const config = {
  theme: "dark",
  _secret: "123",
};

const proxy = new Proxy(config, {
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Нельзя удалить приватное свойство");
    }
    return Reflect.deleteProperty(target, prop);
  },
});

delete proxy.theme; //
console.log(config.theme); // undefined
delete proxy._secret; //  Нельзя удалить приватное свойст

// Observable
// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

function makeObservable(target) {
  target._handlers = [];
  target.observe = function (handler) {
    this._handlers.push(handler);
  };

  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      obj[prop] = value;
      target._handlers.forEach((handler) => handler(prop, value));
      return true;
    },
  });
  return proxy;
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

const userName = {
  firstName: "Иван",
  lastName: "Иванов",
  get fullName() {
    return `${firstName} ${lastName}`;
  },
};

const proxyFullname = new Proxy(userName, {
  set(target, prop, value) {
    if (prop === "firstName" || prop === "lastName") {
      console.log(`Полное имя:${target.fullName}`);
    }
  },
});

//==============================Расширенный пример
//Валидация и кэширование
//Добавим:Валидацию email при записи.
// Кэширование результата чтения свойства fullName.

const user = {
  firstName: "John",
  lastName: "Doe",
  email: null,
};

const userProxy = new Proxy(user, {
  get(target, property) {
    if (property === "fullName") {
      console.log("Вычисляем fullName...");
      return `${target.firstName} ${target.lastName}`;
    }
    return target[property];
  },

  set(target, property, value) {
    if (property === "email") {
      if (!value.includes("@")) {
        throw new Error("Некорректный email!");
      }
    }
    console.log(`Обновляем ${property} → ${value}`);
    target[property] = value;
    return true;
  },
});

// Проверяем
console.log(userProxy.fullName); // "John Doe"
userProxy.email = "john@example.com"; // OK
userProxy.email = "invalid"; // Ошибка: Некорректный email!

// ==== ПРИМЕР =====
// Целевой объект, который мы будем отслеживать
const target = {
  name: "Иван",
  age: 25,
};

// Массив подписчиков, которые будут уведомлены об изменениях
const subscribers = [];

//подписка
function subscribe(callback) {
  subscribers.push(callback);
}
//Обработчик
const handler = {
  // Ловушка для чтения свойства
  get(target, prop) {
    console.log(`Получено свойство: ${prop}`);
    return prop in target ? target[prop] : undefined;
  },

  // Ловушка для записи свойства
  set(target, prop, value) {
    console.log(`Записано значение ${value} в свойство: ${prop}`);
    target[prop] = value;

    // Уведомляем всех подписчиков об изменении
    subscribers.forEach((callback) => callback(prop, value));
    return true;
  },
};

const proxy = new Proxy(target, handler);

subscribe((prop, value) => {
  console.log(`Свойство ${prop} изменено на ${value}`);
});

console.log(proxy.name);

proxy.age = 26;
proxy.name = "Петр";
