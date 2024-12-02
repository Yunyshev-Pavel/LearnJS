// // // var
// // // 1.Что выведет код? Объясните результат.

var a = 10;

function example() {
  console.log(a); // undefined
  var a = 20;
  console.log(a); // 20
}
example();
console.log(a); // 10

// // // 2. Что выведет код?

function testVar() {
  if (true) {
    var a = 10;
  }
  console.log(a); // 10
}
testVar();

// // 3. Что выведет код?
function hoistExample() {
  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5
}
hoistExample();

// // // 4. Что выведет код?

function test() {
  if (false) {
    var a = 5;
  }
  console.log(a); // undefined
}
test();

// // // 5. Что выведет код? Объясните.

function outer() {
  var x = 10;

  function inner() {
    console.log(x); // undefined
    var x = 20;
    console.log(x); // 20
  }

  inner();
}

outer();
