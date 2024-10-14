//Строки
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
function ucFirst(str) {
  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
console.log(ucFirst("вася"));

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру:
function checkSpam(str) {
  const censorship = ["viagra", "XXX"].join(" ").toUpperCase().split(" ");
  for (let value of censorship) {
    if (str.toUpperCase().includes(value)) {
      return true;
    }
  }
  return false;
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlengt
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = `${str.slice(0, maxlength - 1)}...`;
  }
  return str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его
function extractCurrencyValue(str) {
  const index$ = str.indexOf("$");
  const result = str.slice(index$ + 1);
  return +result;
}

console.log(extractCurrencyValue("$120"));

//Complete the solution so that it reverses all of the words within the string passed in.

//Words are separated by exactly one space and there are no leading or trailing spaces.

let str = "The greatest victory is that which requires no battle"; //"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function solution(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(solution(str));
