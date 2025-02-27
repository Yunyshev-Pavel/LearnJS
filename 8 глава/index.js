const person = {
  sayHello() {
    console.log("hello");
  },
};
const john = Object.create(person);
john.sayHello();

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`I am ${this.name}`);
};
const cat = new Animal(cat);
cat.speak();

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

const animal = { eats: true };
const dog = Object.create(animal);

console.log(dog.eats); // ✅ true (унаследовано от animal)

dog.__proto__ = { sleeps: true };
dog.name = "pavel";
console.log(dog, "dddd"); // ❌ undefined (теперь у dog новый прототип, animal больше не в цепочке)
console.log(dog.sleeps); // ✅ true (новый прототип содержит sleeps)

// методы animal
let animal1 = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal1,
};

let slon = {
  __proto__: animal1,
};
// модифицирует rabbit.isSleeping
rabbit.sleep();
slon.walk();

console.log(rabbit.isSleeping); // true
console.log(animal1.isSleeping); //undefined
console.log(slon.isSleeping); //undefined

let animal1 = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal1;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
let rabbit2 = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

Rabbit.prototype.eats = false;

console.log(rabbit2.eats); // true
console.log(rabbit.eats, "123");

// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function F(name) {
  this.name = name;
}
const obj = new F("Pavel");

let obj2 = new obj.constructor("Vlad");
console.log(obj2);

// Задача 1: Напиши функцию-конструктор Animal и создай объект dog с использованием этой функции. Сделай так, чтобы dog мог иметь свойство eats из прототипа, а также чтобы он мог вызывать метод speak через прототип.

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log("ow-ow");
};
Animal.prototype.eats = true;
let dog1 = new Animal();

console.log(dog1.eats, "222");
dog1.speak();

Animal.prototype = {
  eats: false,
  sleep() {
    console.log("ya sply pox");
  },
};

const rabbit1 = new Animal();

console.log(rabbit1.eats);

// создайте метод speak на прототипе

// Задача 2: Создай объект с помощью Object.create(), сделай его прототипом другой структуры, которая имеет несколько свойств и методов. Попробуй изменить свойства на уровне объекта и на уровне прототипа, чтобы увидеть разницу.
const obj = {
  greet() {
    console.log("Hello");
  },
};
const derivedObj = Object.create(obj);
derivedObj.name = "pavel";
console.log(derivedObj.name); // pavel
obj.greet(); // Hello
obj.greet = function () {
  console.log("new Hello");
};
derivedObj.greet(); // new Hello
// Задача 3: Используя два объекта и функцию-конструктор, продемонстрируй цепочку прототипов. Добавь в цепочку несколько объектов и покажи, как __proto__ ссылается на следующий объект в цепочке.
const obj = {
  greet() {
    console.log("Привет от базового объекта!");
  },
};
const derivedObj = Object.create(obj);
derivedObj.name = "Объект-наследник";
console.log(derivedObj.name); // "Объект-наследник"
obj.greet(); // "Привет от базового объекта!"
obj.greet = function () {
  console.log("Новое приветствие!");
};
derivedObj.greet(); // "Новое приветствие!"
///////////////
// Задача 1: Напиши функцию-конструктор Person, добавь к её прототипу метод sayHello(), который будет выводить имя. Создай несколько объектов через new и используй метод sayHello().
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Привет, меня зовут ${this.name}`);
};
const john = new Person("Джон");
john.sayHello(); // "Привет, меня зовут Джон"
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Задача 2: Напиши функцию-конструктор Car. Добавь свойство drive() к её прототипу, которое будет выводить сообщение о том, что машина поехала. Создай объект машины и вызови этот метод.
function Car(model) {
  this.model = model;
}
Car.prototype.drive = function () {
  console.log(`${this.model} едет.`);
};
const bmw = new Car("BMW");
bmw.drive();
Car.prototype.drive = function () {
  console.log(`${this.model} теперь летит!`);
};
bmw.drive();
// Задача 3: Пример использования метода call() и apply(). Напиши функцию, которая использует call() для вызова другой функции с разными аргументами.
function greet(message) {
  console.log(`${message}, меня зовут ${this.name}`);
}
const user = { name: "Алиса" };
greet.call(user, "Привет"); //
greet.apply(user, ["Здравствуй zopa "]);

// Задача 4: Напиши код, который использует метод bind() для привязки контекста к функции и использует её позже с этим контекстом.
const person = {
  name: "Pavel",
};
const boundGreet = greet.bind(person, "Привет");
boundGreet(); // "Привет, меня зовут Pavel"

// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

Function.prototype.defer = function (ms) {
  const originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);

// Мы также можем использовать Object.create для "продвинутого" клониорвания объекта, более мощного, чем копирование в цикле for...in:

let clone = Object.create(
  Object.getPrototypeOf(person),
  Object.getOwnPropertyDescriptors(person)
);

console.log(clone); // {name: 'Alex'}
console.log(clone.age); // 27

let arr = Object.create(Array.prototype);

arr.push(1, 2, 3, 4);
console.log(arr);
