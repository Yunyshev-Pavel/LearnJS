//Конструктор, оператор "new"

function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

//Возврат значения из конструктора, return:
// 1.При вызове return с объектом, вместо this вернётся объект.
// 2.При вызове return с примитивным значением, оно проигнорируется.

// К примеру, здесь return замещает this, возвращая объект:
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- возвращает этот объект
}

alert(new BigUser().name);

// Задачи (учебник)

// Возможно ли создать функции A и B, чтобы new A() == new B()?
function A() {}
function B() {}

let a = new A();
let b = new B();
alert(a == b);
// только если будут возвращать объект
function A() {
  return Object;
}
function B() {
  return Object;
}
let a = new A();
let b = new B();
alert(a == b);

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Введите число");
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений
