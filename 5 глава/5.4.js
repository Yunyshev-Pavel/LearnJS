// Массивы

// мутирующие методы
//pop , push ,shift , unshift , splice , sort , reverse,

let arr = ["I", "go", "home"];
arr.splice(1, 1, "to", "bed");
// ["I", "to", "home"]
console.log(arr); // ["I", "to", "home"]
// pop - удаляет последний элемент массива и возвращает его

let arr1 = ["I", "go", "home"];
let elem = arr.pop();
console.log(arr1); // ["I", "go"]
console.log(elem); // "home"
// push - добавляет элемент в конец массива и возвращает новую длину массива

// shift - удаляет первый элемент массива и возвращает его
//unshift - добавляет элемент в начало массива и возвращает новую длину массива

// sort - сортирует элементы массива в порядке возрастания
// reverse - переворачивает порядок элементов в массиве

// splice - удаляет элементы из массива

// не мутирующие методы
//find, indexOf, filter , map , forEach , reduce , slice , some , every, join, concat
// concat - объединяет два или более массива в один

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
const middle = Math.floor(styles.length / 2);
styles[middle] = "Классика";
console.log(styles);
let last = styles.shift();
console.log(last);
styles.unshift("Рэп", "Регги");
console.log(styles);

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let arr = [];
  while (true) {
    let num = prompt("введите число", 0);
    if (num === "" || num === null || !isFinite(num)) break;
    arr.push(+num);
  }
  let sum = 0;
  for (let number of arr) {
    sum += number;

    return sum;
  }
}

console.log(sumInput());

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    partialSum += item;
    if (partialSum > maxSum) {
      maxSum = partialSum;
    } else if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3]));
