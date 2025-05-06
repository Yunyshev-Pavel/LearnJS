let num = 10;
function test() {
  console.log(num);
}
num = 20;
console.log(test());

function closure(name) {
  let _name = name;

  return {
    getName() {
      console.log(`${_name}`);
    },
    setName(newName) {
      _name = newName;
    },
  };
}
closure.name = "pavel";
const user = closure("Alex");

user.getName(); // 'Alex'
user.setName("Max");

user.getName(); // 'Max'
