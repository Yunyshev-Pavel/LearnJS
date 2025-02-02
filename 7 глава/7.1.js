function testFunc() {
  const symId = Symbol("id");
  const user = {
    name: "Vasya",
    [symId]: 123,
  };

  const nameDescriptor = Object.getOwnPropertyDescriptor(user, "name");

  console.log(nameDescriptor);

  console.log(Object.getOwnPropertyDescriptor(user, symId));
  console.log(user);
  console.log(Object.entries(user));

  Object.defineProperty(user, "name", {
    writable: false,
  });

  console.log(user);
  // user.name = 'Petya'; // не работает, посколку сделали неизменяемым
  console.log(Object.getOwnPropertyDescriptor(user, "name"));

  console.log(Object.defineProperty(user, "name", { writable: true }));
  console.log(Object.getOwnPropertyDescriptor(user, "name"));
  user.name = "Petya";
  console.log(Object.getOwnPropertyDescriptor(user, "name"));

  console.log(Object.defineProperty(user, "name", { enumerable: false }));
  console.log(Object.getOwnPropertyDescriptor(user, "name"));

  console.log(Object.entries(user));

  const user2 = {
    ...user,
  };

  console.log(user);
  console.log(user2);

  const user3 = Object.assign({}, user);
  console.log(user3);

  Object.defineProperty(user, "name", { configurable: false });
  console.log(user);
  user.name = "John";
  console.log(user);
  Object.defineProperty(user, "name", { writable: false });
  console.log(Object.getOwnPropertyDescriptor(user, "name"));
  // Object.defineProperty(user, 'name', {writable: true}); // TypeError при порытке false -> true, true -> false можно

  // Object.defineProperty(user, 'name', {configurable: true}); // configurable true уже не сделать

  Object.defineProperty(user, "lastName", {
    value: "Ziopa",
  });
  console.log(user);
  console.log(Object.entries(user));
  for (const key in user) {
    console.log(key, ":", user[key]);
  }
  console.log(Object.getOwnPropertyDescriptor(user, "lastName"));
}
// testFunc();

const obj = {
  prop1: "val1",
  prop2: "val2",
};
obj.prop3 = "val3";

Object.preventExtensions(obj); // Запрещает добавлять новые свойства в объект
console.log(Object.getOwnPropertyDescriptors(obj));
// obj.prop4 = 'val4'; // ошибка
obj.prop1 = "val4"; // можно
console.log(obj);

for (const key in obj) {
  console.log(key, ":", obj[key]);
}

// freeze
const obj = {
  prop1: "val1",
  prop2: "val2",
};

(obj.prop3 = "val3"), Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptors(obj));
// obj.prop4 = 'val4' // TypeError
// obj.prop1 = 'val5'; // TypeError

const obj = {
  prop1: "val1",
  prop2: {
    subprop1: "val2",
  },
};

Object.freeze(obj);
// obj.prop2 = 'val3'; // TypeError
obj.prop2.subprop1 = "val4"; // можно
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptors(obj.prop2));
console.log(Object.getOwnPropertyDescriptors(obj.prop1));

function test() {
  console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
  console.log(Object.getOwnPropertyDescriptor(Math, "random"));
  Math.random = 10;
  console.log(Object.getOwnPropertyDescriptor(Math, "random"));
  console.log(Math.random, "rand");
}
console.log(test());
