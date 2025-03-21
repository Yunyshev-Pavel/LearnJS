//1. Почему одни и те же имена свойств, но не ругается интерпретатор?
// 2. Что такое геттеры и есть ли тут они? Что такое методы и есть ли тут они?
// 3. Что такое класс и экземпляр класса?
// 4. Куда записывается каждое свойство?
// 5. Что выведется в результате выполнения for и spread? Почему?

class Item {
  data = 10;
  get() {}
  static data = 20;
  static get() {}
}
//
for (const key in Item) {
  console.log(key);
}
for (const key in new Item()) {
  console.log(key);
}
//
log({ ...new Item() });
log({ ...Item });

// With given example, need to write prototype analog
class BasicItem {
  constructor(_testProp) {
    this._parentProp = _testProp + 100;
  }

  getParentProp() {
    return this._parentProp;
  }
}
class Item extends BasicItem {
  static data = 5;

  constructor(_testProp) {
    super(_testProp);
    this._testProp = _testProp;
  }

  getProp() {
    return this._testProp + this.getParentProp() + Item.data;
  }
}
//
console.log(new Item(1000).getProp()); // expect 2105

////////////////////////////////

class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
      };
    }
  }

  remove(word) {
    delete this.words[word];
  }
  get() {
    return this.words[word];
  }
  showAllWords() {
    Object.values(this.words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);

dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие

class HardWordsDictionary extends Dictionary() {
  add() {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
        isDifficult: true,
      };
    }
  }
}

class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.technologies = [];
  }
  code() {}
  learnNewTechnologies(technology) {
    this.technologies.push(technology);
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Junior");
    this.technologies = ["HTML", "CSS", "JavaScript"];
  }
  code() {
    `${this.position}разработчик пишет код...`;
  }
}
class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Middle");
    this.technologies = ["HTML", "CSS", "JavaScript", "React"];
  }
  code() {
    `${this.position}разработчик пишет код...`;
  }
}
class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Senior");
    this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
  }
  code() {
    `${this.position}разработчик пишет код...`;
  }
}

const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
);

class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name;
    this.workingHours = workingHours;
  }
  repairCar(carName) {
    if (!carName) {
      console.log("Вы должны указать название машины!");
    }
    const currentHour = new Date().getHours();
    if (
      currentHour < this.workingHours.from ||
      currentHour >= this.workingHours.till
    ) {
      console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
    } else {
      console.log(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`
      );
    }
  }
}
const carService = new CarService("RepairCarNow", {
  from: "8:00",
  till: "20:00",
});
carService.repairCar("BMW");

// Что делает Symbol.species и зачем он нужен?
class PowerArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 3);
let filtered = arr.filter((x) => x > 1);
console.log(filtered instanceof PowerArray); // false
console.log(filtered instanceof Array); // true

// 1 Если PowerArray.map() всегда возвращает PowerArray, могут возникнуть баги при использовании стандартных методов.
// 2 Symbol.species позволяет контролировать, какой класс будет использоваться для новых объектов.
// (Symbol.species определяет, какой класс использовать при создании новых объектов в методах, таких как map(), filter(), slice(). Это нужно для удобного наследования встроенных классов.)

//instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.
// Можно переопределить поведение instanceof:

class CustomClass {
  static [Symbol.hasInstance](obj) {
    return obj.canJump === true;
  }
}

let obj = { canJump: true };
console.log(obj instanceof CustomClass); // true

// Например, можно сделать так, чтобы [] instanceof Number вернул true:
class CustomNumber {
  static [Symbol.hasInstance](obj) {
    return Array.isArray(obj);
  }
}
console.log([] instanceof CustomNumber); // true

// Поведение метода объектов toString можно настраивать, используя специальное свойство объекта Symbol.toStringTag.

// let user = {
//   [Symbol.toStringTag]: "User",
// };

alert({}.toString.call(user)); // [object User]

class Test {}
const test = new Test();

test instanceof Test; // true
test instanceof new Test(); // TypeError // instanceof ожидает функцию-конструктор а не экземпляр (new Test)
Test instanceof Test; // false
Test instanceof test; // TypeError
Test instanceof Function; // true
Test instanceof Object; // true
test instanceof Function; // false
test instanceof Object; // true
Test instanceof Function.prototype; // TypeError (Function.prototype - object)
Test instanceof Object.prototype; // TypeError (Object.prototype - object)
// test typeof Object; // SyntaxError
typeof test; // "object"

// Mixin

//1. Базовый миксин с методами
let loggerMixin = {
  logInfo() {
    console.log(`[INFO]: ${this.name} выполнен.`);
  },
  logError(error) {
    console.log(`[ERROR]: ${this.name}: ${error}`);
  },
};

class Task {
  constructor(name) {
    this.name = name;
  }
}

// Добавляем миксин
Object.assign(Task.prototype, loggerMixin);

let task = new Task("Задача 1");
task.logInfo(); // [INFO]: Задача 1 выполнен.
task.logError("Ошибка сети"); // [ERROR]: Задача 1: Ошибка сети

// 2. Миксин событий (EventEmitter)
// Позволяет подписываться на события и вызывать их.

let eventMixin = {
  on(event, handler) {
    if (!this._handlers) this._handlers = {};
    if (!this._handlers[event]) this._handlers[event] = [];
    this._handlers[event].push(handler);
  },

  off(event, handler) {
    if (!this._handlers || !this._handlers[event]) return;
    this._handlers[event] = this._handlers[event].filter((h) => h !== handler);
  },

  emit(event, ...args) {
    if (!this._handlers || !this._handlers[event]) return;
    this._handlers[event].forEach((handler) => handler.apply(this, args));
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// Добавляем функциональность событий
Object.assign(User.prototype, eventMixin);

let user1 = new User("Иван");

user1.on("login", () => console.log(`${user1.name} вошел в систему.`));
user1.emit("login"); // Иван вошел в систему.

// Плюсы
// 1.Гибкость в расширении функционала
// 2.Позволяют добавлять методы к разным классам без жёсткой иерархии наследования.
// 3.Можно легко "добавлять" и "убирать" функциональность.
// 4.В отличие от множественного наследования (которого в JS нет), миксины не создают сложные цепочки prototype.
// 5.Можно создать один миксин и использовать его в разных классах.В JS можно наследоваться только от одного класса (extends), но можно "подмешивать" сколько угодно миксинов.

// Минусы
//Код становится менее очевидным для чтения!!!
// 1. Потенциальные конфликты имён. Если два миксина добавляют методы с одинаковыми именами, один из них будет перезаписан.
// 2. Усложнение отладки. Методы миксинов не находятся в prototype-цепочке как у наследуемых классов.
// 3. Нарушение принципов ООП. ООП предполагает строгую иерархию (инкапсуляция, наследование, полиморфизм), а миксины ломают эту структуру.
// 4. Неявные зависимости
// Если миксин зависит от определённых свойств класса, но не объявляет их, это создаёт скрытые связи и усложняет поддержку кода.

//Когда не стоит использовать:
// 1. Когда миксины создают зависимости между классами.
// 2.Если есть риск конфликтов методов.(по сути анонимными решается)
// 3.Если можно решить задачу через композицию (вместо прямого добавления методов)

/// Serializer

class Serializer {
  static serialize(instance) {
    if (typeof instance !== "object" || instance === null) {
      throw new Error("Можно сериализовать только объект");
    }

    let proto = Object.getPrototypeOf(instance);
    if (proto === Serializer) {
      throw new Error("Нельзя сериализовать сам сериализатор");
    }

    return JSON.stringify({
      __class__: proto.constructor.name, // Запоминаем имя класса
      properties: { ...instance }, // Копируем публичные свойства
    });
  }

  static deserialize(json, classMap) {
    let data = JSON.parse(json);
    if (!data.__class__ || !classMap[data.__class__]) {
      throw new Error("Неизвестный класс для десериализации");
    }

    let instance = new classMap[data.__class__](); // Создаем объект класса
    Object.assign(instance, data.properties); // Восстанавливаем свойства

    return instance;
  }
}

// Абстрактный класс
class AbstractClass {
  constructor(name) {
    if (new.target === AbstractClass) {
      throw new Error("Нельзя создать экземпляр абстрактного класса");
    }
    this.name = name;
  }
}

// Наследник абстрактного класса
class User extends AbstractClass {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

// Создаем объект
let user = new User("Pavel", 25);

// Сериализуем объект
let serialized = Serializer.serialize(user);
console.log(serialized);

// Десериализуем объект
let deserialized = Serializer.deserialize(serialized, { User });
console.log(deserialized);
