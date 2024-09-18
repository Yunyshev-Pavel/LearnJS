// Преобразование объектов в примитивы
//Существует всего 3 типа (хинта) для этого:

// "string" (для alert и других операций, которым нужна строка)
// "number" (для математических операций)
// "default" (для некоторых других операторов, обычно объекты реализуют его как "number")

// Алгоритм преобразования таков:

// Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
// В случае, если хинт равен "string"
// происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
// В случае, если хинт равен "number" или "default"
// происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let obj = {
  name: "John",
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 1;
    }
    return 2;
  },
};

console.log(String(obj)); // 2
console.log(Number(obj)); // 1
