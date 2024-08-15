alert("Я JavaScript!");
alert("pavel");

use strict
const name = "pavel";
console.log(name);

let name = "Jon";
let admin = name;
alert(admin);

 let ourPlanet = null;
let userName = 1;

let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let res = c * d;
alert(res);

let f = 0.5;
let n = 1.5;
let result = f + n;
alert(result); // 2

let a = 13;
let b = 5;
alert(a % b); // 3

let str = "hello";
let str1 = "world";
alert(str + " " + str1);
let str2 = str + " " + str1;
alert(str2.length); //11

let y = "5" - "2";
alert(y); // 3

let name = prompt("Как тебя зовут?");
alert(`Тебя зовут ${name} !`);

const string = "Pavel";

if (string.length > 1) {
  console.log(string.length - 1);
} else {
  console.log("hello");
}

// console.log(string.length - 1);

let num = 52452;
let num1 = String(num);
console.log(num1);
console.log(num1[0]);

let num2 = num.length;
console.log(num.length);
console.log(num1[4]);

let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1
console.log(c, "c", d, "d");

"" + 1 + 0; // '10'
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // '2'
"2" * "3"; // '6'
4 + 5 + "px"; // '9px'
"$" + 4 + 5; // '$45'
"4" - 2; // '2'
"4px" - 2; // NaN
"  -9  " + 5; // "  -4  "
"  -9  " - 5; // "  -14  "
null + 1; // 1
undefined + 1; // Nan
" \t \n" - 2; // Nan

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(Number(a) + Number(b));

5 > 4; // true
"ананас" > "яблоко"; // //false
"2" > "12"; // true
undefined == null; // true
undefined === null; //false
null == "\n0\n"; //false
null === +"\n0\n"; //false

let year = prompt(
  "В каком году была опубликована спецификация ECMAScript-2015?",
  ""
);

if (year == 2015) {
  alert("Вы правы!");
} else {
  alert("Вы не правы!");
  let result = confirm("Попробуйте еще раз?");
  if (result) {
    prompt("В каком году была опубликована спецификация ECMAScript-2015?", "");
  } else {
    alert("в 2015!");
  }
}

let message = prompt("„Какое «официальное» название JavaScript?“");

if ("ECMAScript" == message) {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

let res = prompt("число");
if (res > 0) {
  alert(1);
} else if (res < 0) {
  alert(-1);
} else if (res == 0) {
  alert(0);
// }

let result;

if (a + b < 4) {
  result = "Мало";
} else {
  result = "Много";
}
let result = a + b < 4 ? "Мало" : "Много";

let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

let message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
