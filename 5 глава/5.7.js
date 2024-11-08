// Map / Set
Map;
//Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

//Методы и свойства:

new Map(); //создаёт коллекцию.
map.set(key, value); //записывает по ключу key значение value.
map.get(key); //возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key); //возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key); // удаляет элемент (пару «ключ/значение») по ключу key.
map.clear(); //– очищает коллекцию от всех элементов.
map.size; // возвращает текущее количество элементов.Работает как статическая переменная

map.keys(); // возращает итерируемый объект по ключам
map.values(); // возращает итерируемый объект по значениям
map.entries(); //возращает итерируемый объект по парам [ключ, значение]

// есть встроеннный forEach как и в массивах

// Set

new Set(iterable); // создает Set и если в  качестве агрумента был предоставлен итерируемый объект копирует его знач
set.add(value); // добаввляет значение и возвращает тот же set
set.delete(value); // удаляет значение и возвращает true иначе false
set.has(value); // возвращает true если знач присутсвует
set.clear(); // удаляет все значения
set.size; //возвращает количество элементов

// set уникальное знач при добавление с те же значением игнорирует и появляется 1 раз

// for of / forEach //
set.values();
set.keys();
set.entries();

//
const dataYear = new Date().getFullYear();
const car = new Map();

car.set("Honda", { year: 2015, mile: 200000 });
car.set("Toyota", { year: 2000, mile: 350000 });
car.set("Lada", { year: 2018, mile: 12000 });

car.forEach((data, model) => {
  if (dataYear - data.year > 5) {
    console.log(model + " год выпуска:" + data.year + "Пробег:" + data.mile);
  }
});

const arr = [1, 2, 2, 3, 4, 4, 5];

function unique(arr) {
  return new Set(arr);
}
console.log(unique(arr)); //1,2,3,4,5

// Отфильтруйте анаграммы
function aclean(str) {
  let res = [];
  for (let el of str) {
    res.push(el.toLowerCase().split("").sort().join(""));
  }
  return Array.from(new Set(res));
}
let str = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
