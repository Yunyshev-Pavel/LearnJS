// Копирование объектов и ссылки

// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.

let user = { name: "John" };

let admin = user; // копируется ссылка

// Сравнение по ссылке
let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
alert( a === b ); // true

// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false

// Клонирование и объединение, Object.assign
// Синтаксис:
Object.assign(dest, [src1, src2, src3...])
// 1.Первый аргумент dest — целевой объект.
// 2.Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
// 3.Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
// 4.Возвращает объект dest.

// мы можем использовать его для объединения нескольких объектов в один:
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }


// можем использовать Object.assign для замены цикла for..in для простого клонирования:
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);



//
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, тот же объект
  
  // user и clone обладают общим свойством sizes
  user.sizes.width++;       // изменяем свойства в первом объекте
  alert(clone.sizes.width); // 51, видим результат в другом

  // мы можем использовать глобальный метод structuredClone(), который позволяет сделать полную копию объекта
  // Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, например _.cloneDeep(obj)

  let userClone = structuredClone(user);

userClone.color = {
    like: "black",
    dontlike: "green",
}

console.log(userClone);