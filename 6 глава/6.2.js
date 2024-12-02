/// ...spread/...rest //argumenst

//Сумма аргументов Напиши функцию sumAll(...args), которая принимает любое количество чисел и возвращает их сумму.

function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumAll(5, 10, 15)); // 30
console.log(sumAll(1, 2, 3, 4)); // 10

//Напишите функцию average, которая принимает переменное количество числовых аргументов и возвращает их среднее арифметическое. Используйте остаточные параметры для сбора всех переданных значений в массив
function average(...n) {
  return n.reduce((sum, acc) => sum + acc, 0) / n.length;
}
console.log(average(1, 2, 3, 4, 5)); // 3
console.log(average(10, 20, 30)); // 20

//Оператор распространения (Spread Operator)
// У вас есть два массива: arr1 и arr2. Напишите функцию mergeArrays, которая принимает два массива и объединяет их в один, используя оператор распространения. Верните новый объединенный массив.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays([10, 20], [30, 40])); // [10, 20, 30, 40]

// Подсказка: Используйте оператор ... для объединения массивов.

const data = [1, 2, "hello", 3, 4, null, 5, 6, "world"];
function groupElements(data) {
  let odd = [];
  let even = [];
  let other = [];
  for (let el of data) {
    if (typeof el === "number") {
      if (el % 2 === 0) {
        even.push(el);
      } else {
        odd.push(el);
      }
    } else {
      other.push(el);
    }
  }
  return { even: [...even], odd: [...odd], other: [...other] };
}

const result = groupElements(data);
console.log(result);
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5],
//   other: ["hello", null, "world"]
// }
