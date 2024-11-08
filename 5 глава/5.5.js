// Методы массивов
//splice
// arr.splice(start[, deleteCount, elem1, ..., elemN])
//Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.
let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);
alert(arr); // [1, 2, 3, 4, 5]

//slice
// arr.slice([begin[, end]])
//Возвращает копию части массива arr, начиная с begin и заканчивая end (не включая end).
//Если не указано end, то копируется до конца массива.
//Если begin или end выходят за границы массива, то они остаются без изменений.

//concat
//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значени

//forEach (не мутирующая функция) выполняет указанную функцию для каждого элемента массива
arr.forEach(function (item, index, array) {
  // ... делать что-то с item
});

//indexOf/lastIndexOf и includes
//indexOf - возвращает индекс первого вхождения элемента в массив
//lastIndexOf - возвращает индекс последнего вхождения элемента в массив
//includes - возвращает true, если элемент содержится в массиве
let arr1 = [1, 2, 3, 4];
alert(arr1.includes(3)); // true
alert(arr1.indexOf(3)); // 2

//find и findIndex/findLastIndex
//find - возвращает первый элемент массива, который удовлетворяет условию
//findIndex - возвращает индекс первого элемента массива, который удовлетворяет условию
//findLastIndex - возвращает индекс последнего элемента массива, который удовлетворяет условию
let arr2 = [1, 2, 3, 4];
alert(arr2.findIndex((x) => x > 2)); // 2

//filter
//filter - возвращает новый массив, в котором удовлетворяют условию
let arr3 = [1, 2, 3, 4];
alert(arr3.filter((x) => x > 2)); // [3, 4]

// map
// map - возвращает новый массив, в котором каждый элемент удовлетворяет условию
let arr4 = [1, 2, 3, 4];
alert(arr4.map((x) => x * 2)); // [2, 4, 6, 8]

// reduce/reduceRight
// reduce - возвращает единственное значение
let arr5 = [1, 2, 3, 4];
alert(arr5.reduce((a, b) => a + b)); // 10

//reduceRight - возвращает единственное значение(справа налево)

//sort - сортирует элементы массива
let arr6 = [1, 2, 3, 4];
alert(arr6.sort((a, b) => b - a)); // [4, 3, 2, 1]

//some/every
//some - возвращает true, если хотя бы один элемент удовлетворяет условию
//every - возвращает true, если все элементы удовлетворяют условию

//reverse
// reverse - меняет порядок следования элементов в массиве
let arr7 = [1, 2, 3, 4];
arr7.reverse();
alert(arr7); // [4, 3, 2, 1]

//join
// join - объединяет все элементы массива в строку
let arr8 = [1, 2, 3, 4];
alert(arr8.join(" ")); // "1 2 3 4"

//split
// split - разбивает строку на подстроки
let str = "hello";
alert(str.split("")); // ["h", "e", "l", "l", "o"]

//flat
// flat - разворачивает многомерный массив в одномерный
let arr9 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
alert(arr9.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

//Array.isArray
// isArray - проверяет является ли значение массивом
let arr10 = [1, 2, 3, 4];
alert(Array.isArray(arr10)); // true

//   Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join("");
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива
let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// Напишите функцию findMin(arr), которая принимает массив arr и возвращает минимальное значение этого массива

function findMin(arr) {
  return Math.min(...arr);
}

//Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
console.log(arr2.sort((a, b) => b - a));

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
function mergearrays(arr1, arr2) {
  const result = [...arr1, ...arr2]
    .filter((item, index) => [...arr1, ...arr2].indexOf(item) === index)
    .sort((a, b) => a - b);
  return result;
}
