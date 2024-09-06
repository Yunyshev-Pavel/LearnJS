// alert("Я JavaScript!");
// alert("pavel");

// use strict
// const name = "pavel";
// console.log(name);

// let name = "Jon";
// let admin = name;
// alert(admin);

//  let ourPlanet = null;
// let userName = 1;

// let a = 10;
// let b = 5;
// let c = a - b;
// let d = 7;
// let res = c * d;
// alert(res);

// let f = 0.5;
// let n = 1.5;
// let result = f + n;
// alert(result); // 2

// let a = 13;
// let b = 5;
// alert(a % b); // 3

// let str = "hello";
// let str1 = "world";
// alert(str + " " + str1);
// let str2 = str + " " + str1;
// alert(str2.length); //11

// let y = "5" - "2";
// alert(y); // 3

// let name = prompt("Как тебя зовут?");
// alert(`Тебя зовут ${name} !`);

// const string = "Pavel";

// if (string.length > 1) {
//   console.log(string.length - 1);
// } else {
//   console.log("hello");
// }

// // console.log(string.length - 1);

// let num = 52452;
// let num1 = String(num);
// console.log(num1);
// console.log(num1[0]);

// let num2 = num.length;
// console.log(num.length);
// console.log(num1[4]);

// let a = 1,
//   b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// console.log(c, "c", d, "d");

// "" + 1 + 0; // '10'
// "" - 1 + 0; // '-1'
// true + false; // 1
// 6 / "3"; // '2'
// "2" * "3"; // '6'
// 4 + 5 + "px"; // '9px'
// "$" + 4 + 5; // '$45'
// "4" - 2; // '2'
// "4px" - 2; // NaN
// "  -9  " + 5; // "  -4  "
// "  -9  " - 5; // "  -14  "
// null + 1; // 1
// undefined + 1; // Nan
// " \t \n" - 2; // Nan

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(Number(a) + Number(b));

// 5 > 4; // true
// "ананас" > "яблоко"; // //false
// "2" > "12"; // true
// undefined == null; // true
// undefined === null; //false
// null == "\n0\n"; //false
// null === +"\n0\n"; //false

// let year = prompt(
//   "В каком году была опубликована спецификация ECMAScript-2015?",
//   ""
// );

// if (year == 2015) {
//   alert("Вы правы!");
// } else {
//   alert("Вы не правы!");
//   let result = confirm("Попробуйте еще раз?");
//   if (result) {
//     prompt("В каком году была опубликована спецификация ECMAScript-2015?", "");
//   } else {
//     alert("в 2015!");
//   }
// }

// let message = prompt("„Какое «официальное» название JavaScript?“");

// if ("ECMAScript" == message) {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }

// let res = prompt("число");
// if (res > 0) {
//   alert(1);
// } else if (res < 0) {
//   alert(-1);
// } else if (res == 0) {
//   alert(0);
// // }

// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }
// let result = a + b < 4 ? "Мало" : "Много";

// let message;

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";
// for (i = 2; i <= 100; i = i + 2) {
//   console.log(i);
// }

// let num = "6px";
// let num1 = "5.5px";
// console.log(parseInt(num) + parseFloat(num1) + "px");

// let str = "abcde";
// str[0];
// str[0];
// console.log(str[4] + str[3] + str[2] + str[1] + str[0]);

// let num2 = 4;
// num2 = num2 + "";
// console.log(num2[0]);

// let num = 1;
// num = num + 2;
// num = num + 3;

// alert(num);
// let num1 = 3;
// num1++;

// let num2 = num1--;

// alert(num1++);
// alert(--num2);

// let str1 = "1";
// let str2 = "2";
// let str3 = "3";
// let str4 = "4";
// let str5 = "5";

// document.write(str1 + "<br>");
// document.write(str2 + "<br>");
// document.write(str3 + "<br>");
// document.write(str4 + "<br>");
// document.write(str5 + "<br>");

// let a = 1;
// let b = 2;
// console.log(a + b + "c");

// let num = "123";
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);

// let a = 0;
// a++;
// console.log(a);

// let num = 123;
// num = String(num);
// console.log(num.length);

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// let str = String(num);
// console.log(str[str.length - 1]);

// let a = "123";
// let b = "456";
// let s = Number(a) + String(b);

// console.log(s);
// let sum =
//   Number(s[0]) +
//   Number(s[1]) +
//   Number(s[2]) +
//   Number(s[3]) +
//   Number(s[4]) +
//   Number(s[5]);
// console.log(sum);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;

// console.log(aaa + bbb + ccc);

// let num1 = -1;
// if (num1 <= 0) {
//   alert("число отрицательное");
// } else {
//   alert("число положительное");
// }

// for (i = 1; i <= 10; i++) {
//   i = i + 1;
//   console.log(i);
// }
function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}

combat(100, 5);
