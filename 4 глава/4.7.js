//Тип данных Symbol
// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

//Символы гарантированно уникальны
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// Символы не преобразуются автоматически в строки
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let id = Symbol("id");
alert(id.toString()); // Symbol(id), теперь работает

// Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:
let id = Symbol("id");
alert(id.description); // id

// Symbol.for(ключ) — возвращает символ, хранящийся по ключу. Если символа ещё не существует, он создаётся автоматически.
// Symbol.keyFor(символ) — возвращает строковый ключ, который хранит переданный символ или undefined, если символ не хранится в реестре.

const secondaryId = Symbol();

const user = {
  id: 193,
  name: "Ольга",
  [secondaryId]: "olga-1",
};

console.log(Symbol.keyFor(secondaryId));
// undefined

const newSym = Symbol.for("registryKey");
const newestSym = Symbol.for("registryKey");
console.log(newSym === newestSym);
// true

user[newSym] = "hello";
console.log(Symbol.keyFor(newSym));
// registryKey

const uniqueKey = Symbol("uniqueKey");
const myObject = {
  name: "John",
  age: 30,
  [uniqueKey]: "This is a unique value",
  getInfo() {
    console.log(
      `name:${this.name} ,age:${this.age}, ${uniqueKey.description}:${this[uniqueKey]}`
    );
  },
};
myObject.getInfo();

const mySymbol = Symbol("mySymbol");

const anotherObject = {
  name: "Alice",
  age: 25,
  [mySymbol]: "This is a symbol",
};

function hasSymbol(obj, sym) {
  if (obj.hasOwnProperty(sym)) {
    return true;
  }
  return false;
}

// Ожидаемый результат:
console.log(hasSymbol(anotherObject, mySymbol));
console.log(hasSymbol(anotherObject, Symbol("anotherSymbol")));

hasSymbol(anotherObject, mySymbol); //должно вернуть true
hasSymbol(anotherObject, Symbol("anotherSymbol")); //должно вернуть false
