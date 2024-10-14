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

// Задача: Конструктор для объекта "Книга"
// Создай конструктор Book, который будет иметь следующие свойства:

// title (название книги)
// author (автор книги)
// year (год публикации)
// Добавь метод getInfo, который будет возвращать строку с информацией о книге в следующем формате:
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return `Название:${this.title}, Автор:${this.author} Год:${this.year}.`;
  };
}

const book1 = new Book("1984", "Джордж Оруэлл", 1949);
console.log(book1.getInfo()); // Ожидаемый вывод: "Название: 1984, Автор: Джордж Оруэлл, Год: 1949"

const book2 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1966);
console.log(book2.getInfo());
//

// Задача: Конструктор для объекта "Студент"
// Создай конструктор Student, который будет иметь следующие свойства:

// name (имя студента)
// age (возраст студента)
// grades (массив оценок студента)
// Добавь следующие методы:

// addGrade(grade): Метод для добавления новой оценки в массив grades.
// getAverageGrade(): Метод, который возвращает среднюю оценку студента.
//Если у студента нет оценок, метод должен возвращать сообщение "Нет оценок".
//isAdult(): Метод, который возвращает true, если студент старше 18 лет, и false в противном случае.
function Student(name, age, grades = []) {
  this.name = name;
  this.age = age;
  this.grades = grades;
}

(Student.prototype.addGrade = function (grade) {
  this.grades.push(grade);
}),
  (Student.prototype.getAverageGrade = function () {
    if (this.grades.length <= 0) {
      return "нет оценок";
    } else {
      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return total / this.grades.length;
    }
  }),
  (Student.prototype.isAdult = function () {
    return this.age >= 18;
  });

const student1 = new Student("Иван", 20);
student1.addGrade(5);
student1.addGrade(4);
student1.addGrade(3);
console.log(student1.getAverageGrade()); // Ожидаемый вывод: 4
console.log(student1.isAdult()); // Ожидаемый вывод: true

const student2 = new Student("Мария", 17);
console.log(student2.getAverageGrade()); // Ожидаемый вывод: "Нет оценок"
console.log(student2.isAdult());

// Создай простую корзину покупок. Корзина должна содержать три функции:
// addItem(name, count) — функция для добавления товара в корзину.
// Если товар уже есть в корзине, увеличиваем его количество.
// Если товара нет, добавляем его с указанным количеством.
// removeItem(name, count) — функция для удаления товара из корзины.

// Если товара нет, ничего не делаем.
// Если количество товара в корзине больше или равно указанному количеству, удаляем товар полностью. Если меньше, просто уменьшаем количество.
// getCart() — функция для вывода содержимого корзины. Эта функция должна показывать все товары и их количество в корзине.

// Пример использования:
// Добавь 3 яблока и 2 банана в корзину.
// Удали 1 яблоко.
// Выведи содержимое корзины.
// Удали все бананы.
// Снова выведи содержимое корзины.
// Корзина должна хранить товары как объекты с их количеством.
// Простая логика для добавления и удаления товаров.
function Basket() {
  this.item = {};

  (this.addItem = function (name, count) {
    if (this.item[name]) {
      this.item[name] += count;
    } else {
      this.item[name] = count;
    }
    console.log(this.item, "item");
  }),
    (this.removeItem = function (name, count) {
      if (!this.item[name]) return;

      if (this.item[name] <= count) {
        delete this.item[name];
      } else {
        this.item[name] -= count;
      }
    }),
    (this.getCart = function () {
      return console.log("ваши покупки:", this.item);
    });
}

const basket = new Basket();
basket.addItem("яблоки", 3);
basket.addItem("бананы", 2);
basket.addItem("сыр", 1);
basket.addItem("сыр", 1);
basket.removeItem("бананы", 2);
basket.getCart();
