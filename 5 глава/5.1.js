// Методы примитивов

// 1.String

//length - возвращает длину строки
let str = "Hello";
console.log(str.length); // 5

//toUpperCase() - переводит строку в верхний регистр
console.log(str.toUpperCase()); // HELLO

//toLowerCase() - переводит строку в нижний регистр
console.log(str.toLowerCase()); // hello

//trim() - убирает пробелы в начале и в конце строки
let str1 = "     Hello     ";
console.log(str1.trim()); // Hello

//indexOf() - возвращает индекс первого вхождения символа в строку
console.log(str.indexOf("e")); // 1

//lastIndexOf() - возвращает индекс последнего вхождения символа в строку
console.log(str.lastIndexOf("l")); // 3

//includes() - возвращает true, если строка содержит подстроку
console.log(str.includes("llo")); // true
console.log(str.includes("Llo")); // false

//slime() - удаляет подстроку из строки
console.log(str.slice(0, 2)); // He

// 2.Number

//toFixed() - округляет число до заданного количества знаков после запятой
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // "0.30"

//toString() - преобразует число в строку
console.log((0.1 + 0.2).toString()); // "0.3"

//Number.isNaN() - возвращает true, если переданное значение NaN
console.log(Number.isNaN("")); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN("1")); // false
console.log(Number.isNaN(1.2)); // false
console.log(Number.isNaN(0 / 0)); // true
//isNaN()
console.log(str.isNaN()); // false

// 3.Symbol

//Symbol.for() - возвращает символ с заданным именем
//decription - описание символа
