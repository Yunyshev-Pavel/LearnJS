//  Деструктуризация

// 1. Массив с вложенностями

// const numbers = [1, [2, 3], [4, [5, 6]]];

// Извлеки первое число 1 в переменную a,
// Число 3 во вложенном массиве — в переменную b,
// Число 5 — в переменную c.

const [a, [, b], [, [c]]] = numbers;

// Деструктурировать массив как объект и получить не undefined значения
// Деструктурировать объект как массив . Применить Symbol.iterator чтобы деструкторизировать без ошибок

const arr = [10, 20, 30, 40, 50];
// const [, , , ...rest] = arr;

const { 0: one, 1: two, 2: three, 3: four, 4: five } = arr;
console.log(Object.fromEntries(Object.entries(arr)));

const obj = {
  one: 10,
  two: 20,
  three: 30,
};
obj[Symbol.iterator] = function () {
  const key = Object.keys(this);
  let i = 0;
  return {
    next: () => {
      if (i < key.length) {
        return { done: false, value: this[key[i++]] };
      } else {
        return { done: true };
      }
    },
  };
};
const [a, b, c] = obj;
console.log(a, b, c);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (max < value) {
      max = value;
      maxName = key;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));

const a = [{ ...salaries }, { ...salaries }, { ...salaries }, { ...salaries }];
const newArr = a.map(({ name, location }) => ({ name, location }));
// console.log(newArr)
