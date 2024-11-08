// Object.keys() / Object.values() / Object.entries()
//создание объекта из массива ключей и значений
function arrayObject(arr) {
  return Object.fromEntries(arr);
}

//фильтрация объекта по значению
function filterObject(obj, value) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => val === value)
  );
}
console.log(filterObject(user, "John"));

// Вывести все ключи и значения объекта
function printObject(obj) {
  return Object.entries.forEach((key) => console.log(key));
}
console.log(printObject(user));

//Сумма свойств объекта
let salaries = {
  Jonh: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let key of Object.values(salaries)) {
    sum += key;
  }
  return sum;
}

//количество свойств объекта
const user = {
  name: "Jonh",
  age: 30,
};
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user));
