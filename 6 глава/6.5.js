//global object

// Доступ к глобальному объекту:
// Напиши функцию, которая возвращает глобальный объект независимо от окружения (браузер или Node.js).
function v() {
    return globalThis;
  }
  
  // Добавь свойство myProperty со значением 42 в глобальный объект и выведи его в консоль.
  window.myProperty = 42;
  console.log(window.myProperty);
  
  Объясни, что выведет следующий код:
  
  var a = 10;
  let b = 20;
  console.log(window.a); // 10 
  console.log(window.b); // undefined
  
  
  // Реализуй универсальную переменную myGlobalValue, доступную как в браузере, так и в Node.js.
  globalThis.myGlobalValue = 'global';
  console.log(globalThis.myGlobalValue);