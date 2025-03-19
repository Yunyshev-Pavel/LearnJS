class Aboba {
  name = "max"; // inctance
  arrow = () => {}; // inctance
  method() {} // prototype
}

class Test {
  constructor(count = 0) {
    this._count = count;
  }
  increment() {
    this._count++;
  }
  decrement() {
    this._count--;
  }

  get count() {
    return this._count;
  }
  set count(value) {
    if (typeof "number" || value < 0) return;
    this._count = value;
  }
}
const test = new Test(5);
console.log(test.count); // 5

test.increment();
console.log(test.count); // 6

test.decrement();
console.log(test.count); // 5

test.count = 10;
console.log(test.count); // 10

// export const test = new Test(); // для инкапсуляции данных
// наследование реализация кода чтобы не было причины его повторять
// у стрелочных функции нету super
// при обращении к super стрелочнойй функции он берется из внешней функции:
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // если бы указали обычную функцию была бы ошибка
  }
}

class Car {
  static brand = "tesla";
}
Car.brand = "bmw"; // Car.brand // bmw

//1.
// Создай класс User, который принимает в конструкторе name и age.
// Добавь метод sayHi(), который выводит console.log(\Привет, меня зовут ${this.name}`)`.
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}
const user = new User("Иван", 25);
user.sayHi(); // Привет, меня зовут Иван

// 2. Наследование класса
// Создай класс Animal с полем name и методом speak(), который выводит console.log(`${this.name} издает звук`).
// Создай подкласс Dog, который наследует Animal и переопределяет методspeak(), чтобы выводилось console.log(`${this.name} лает`).
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} лает`);
  }
}

// 3. Статические методы и свойства
// Создай класс MathUtils со статическим методом sum(a, b), который возвращает сумму двух чисел.
class MathUtils {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathUtils.sum(5, 10)); // 15

// 4. Геттеры и сеттеры
// Создай класс Person, у которого есть поле _age (с нижним подчеркиванием).

// Реализуй геттер age, который возвращает возраст.
// Реализуй сеттер age, который принимает число, но не позволяет устанавливать возраст меньше 0.
class Person {
  constructor(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0)
      return console.log("Ошибка: возраст не может быть отрицательным");

    this._age = value;
  }
}
const person = new Person(30);
console.log(person.age); // 30
person.age = -5;
console.log(person.age);

// 5.
// Создай класс BankAccount, у которого есть:

// Приватное поле #balance, хранящее баланс.
// Метод deposit(amount), который пополняет счет.
// Метод withdraw(amount), который снимает деньги (если хватает баланса).
// Геттер balance, который показывает текущий баланс.
// Попробуй изменить баланс напрямую (account.#balance = 1000;). Должна быть ошибка.

class BankAccount {
  #balance = 0;
  deposit(amount) {
    if (amount <= 0)
      return console.log("Ошибка сумма должна быть положительной");

    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount <= 0)
      return console.log("Ошибка сумма должна быть положительной");
    if (amount > this.#balance) return console.log("Ошибка такой суммы нету ");

    this.#balance -= amount;
  }
  get balance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(100); // Депозит: +100. Новый баланс: 100
account.withdraw(50); // Снятие: -50. Новый баланс: 50
account.withdraw(100); // Ошибка: недостаточно средств.
console.log(account.balance); //50

//with given example, need to write prototype analog
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
console.log(new Item(1000).getProp()); // expect 2105

// class Item {

//   data = 10;
//   get() {}
//   static data = 20;
//   static get() {}
// }

// for (const key in Item) {
//   log(key);
// }
// for (const key in new Item()) {
//   log(key);
// }

// log(...new Item());
// log(...Item);
