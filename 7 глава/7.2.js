// Создай объект с одним свойством name, которое нельзя изменять, удалять и перезаписывать
const obj = { name: "zopa", age: 20 };
obj.definyProperty(obj, "name", {
  configurable: false,
  writable: false,
  enumerable: true,
});

obj.name = "pavel";
delete obj.name;

//Создай объект с геттером и сеттером для свойства fullName, которое складывается из двух полей: firstName и lastNam
const obj = {};
Object.defineProperty(obj, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    const [firstName, lastName] = value.split("");
    this.firstName = firstName;
    this.lastName = lastName;
  },
  enumerable: true,
  configurable: true,
});
obj.firstName = "zopa";
obj.lastName = "aboba";
console.log(obj.fullName);

//Добавь сеттер age в объект person, который принимает только числа больше 0.
const person = {
  _age: 25,
  get age() {
    return this._age;
  },
  set age(value) {
    if (value < 0) {
      console.log("ошибка");
      return;
    }
    this._age = value;
  },
};
person.age = -5; // ошибка
console.log(person.age); // 25

/// Создай объект counter с приватным свойством _count, у которого есть геттер и сеттер.

//Геттер возвращает текущее значение.
//Сеттер увеличивает значение только если переданное число больше текущего.

const counter = {
  _count: 0,
  get count() {
    return this._count;
  },
  set count(value) {
    if (value < this._count) return;
    this._count = value;
  },
};
counter.count = 5;
console.log(counter.count); // 5
counter.count = 3;
console.log(counter.count); // 5

//Создай объект password, который шифрует пароль в set, а в get возвращает ****.
const password = {
  _value: "",
  get value() {
    return "****";
  },
  set value(pass) {
    this._value = btoa(pass);
  },
};
password.value = "secret123";
console.log(password.value); // "****"

//Напиши функцию createAccessControl(obj), которая оборачивает объект и делает все свойства доступными только для чтения (только get).
function createAccessControl(obj) {
  return Object.defineProperties(
    {},
    {
      name: {
        value: obj.name,
        writable: false,
        configurable: false,
        enumerable: true,
      },
      age: {
        value: obj.age,
        writable: false,
        configurable: false,
        enumerable: true,
      },
    }
  );
}
const user1 = { name: "Pavel", age: 25 };
const protectedUser = createAccessControl(user1);

console.log(protectedUser.name); // "Pavel"
protectedUser.name = "Ivan"; // Ошибка
delete protectedUser.age; // Ошибка

///Создай объект dateObj, который:
// Xранит _date в виде строки ГГГГ-ММ-ДД
//Геттер date, который возвращает дату в формате ДД.ММ.ГГГГ
//Сеттер date, который принимает дату в формате ДД.ММ.ГГГГ и сохраняет ее как ГГГГ-ММ-ДД

const dateObj = {
  _date: "2024-02-02",
  get date() {
    const [year, moth, day] = this._date.split("-");
    return `${day}.${moth}.${year}`;
  },
  set date(value) {
    const [day, moth, year] = value.split(".");
    this._date = `${year}-${moth}-${day}`;
  },
};

console.log(dateObj.date); // "02.02.2024"
dateObj.date = "15.03.2025";
console.log(dateObj._date); // "2025-03-15"

function test() {
  console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
  console.log(Object.getOwnPropertyDescriptor(Math, "random"));
  Math.random = 10;
  console.log(Object.getOwnPropertyDescriptor(Math, "random"));
  console.log(Math.random, "rand");
}
console.log(test());
