// // //iteration

const obj = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    this.last = this.to;
    return this;
  },
  next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let value of obj) {
  console.log(value);
}

const person = {
  name: "Pavel",
  age: 25,
  gender: "male",
  interests: ["football", "basketball"],
};

person[Symbol.iterator] = function () {
  const prop = Object.keys(this);
  let count = 0;
  return {
    next() {
      if (count < prop.length) {
        const key = prop[count];
        let res = { done: false, value: person[key] };
        count++;
        return res;
      } else {
        return { done: true };
      }
    },
  };
};

for (let value of person) {
  console.log(value);
}
console.log([...person]);

console.log(Array.from(person));

// //Создайте функцию которая принимает массив и возращает итерируемый объект с уникальными значениями
function unique(arr) {
  return {
    [Symbol.iterator]() {
      let count = 0;
      let uniqueValues = Array.from(new Set(arr));
      console.log(uniqueValues, "1");
      return {
        next() {
          if (count < uniqueValues.length) {
            return { value: uniqueValues[count++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}

let arr = ["apple", "orange", "banana", "apple"];

let uniqueValues = unique(arr);

for (let value of uniqueValues) {
  console.log(value); // apple, orange, banana
// }
// f0 = 0 , f1=1, f2=1,   fn = fn-1 + fn-2
// //Создайте итерируемый объект с числами Фибоначчи и выведите их в консоль до max
let fibonacci = {
  max: 21,
  [Symbol.iterator]() {
    let a = 0;
    let b = 1;
    let max = this.max;
    return {
      next() {
        if (a <= max) {
          let c = a + b;
          a = b;
          b = c;
          return { done: false, value: a };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let num of fibonacci) {
  console.log(num);
}

function capitalizeWords(str) {
  let words = str.split(" ");

  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if (i < words.length) {
            let word = words[i++]
            return {
              done: false,
              value: word.charAt(0).toUpperCase() + word.slice(1),
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    },
  };
}

let sentence = "hello world from javascript";
let capitelized = capitalizeWords(sentence);

for (let word of capitelized) {
  console.log(word); // "Hello", "World", "From", "Javascript"
}


//написать итератор чтобы выводил рандомные натуральные числа в диапазоне [0...500] и интервал
// пока не найдет заданное рандомное число и показано перед циклом
// алгоритм вынести в отдельную функцию чтобы можно было заюзать как в итераторе так и в объекте 

function randomNum () {
  return Math.floor(Math.random() * 500)
}

const obj = {
  targetNum: randomNum(),
  [Symbol.iterator]() {
    let num = 0
      return {
        targetNum: this.targetNum,
        next() {
          if(num<= this.targetNum) {
            return {
              done:false, value:num++,
            }
          } else {
            return{done:true}
          }
        },
      };
  },
};

for (let key of obj) {
  console.log(key);
  
}

