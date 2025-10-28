// Задание
// Допишите тело функции repeat(), которая повторяет строку указанное количество раз. Функция должна возвращать полученный результат. Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.
function repeat(text: string, count: number) {
  return text.repeat(count);
}

repeat("hexlet", 2); // hexlethexlet
repeat("wo", 3); // wowowo

// Задание
// Реализуйте функцию getHiddenCard(). Она принимает на вход номер кредитки, который состоит из 16 цифр, в виде строки и возвращает его скрытую версию. Эта версия может использоваться на сайте для отображения. Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.
// Получается, функция заменяет первые 12 символов на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.
function getHiddenCard(str: string, count = 4): string {
  const last = str.slice(-4);
  const symbol = "*";
  return symbol.repeat(count) + last;
}
getHiddenCard("1234567812345678", 2); // "**5678"
getHiddenCard("1234567812345678", 3); // "***5678"
getHiddenCard("1234567812345678"); // "****5678"
getHiddenCard("2034399002121100", 1); // "*1100"

// Задание
// Напишите функцию, которая возвращает массив четных чисел из массива numbers.
const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

const getEvenNumbers = (): number[] => {
  return numbers.filter((num: number) => num % 2 === 0);
};
console.log(getEvenNumbers());

// Задание
// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:
// Определите тип исходя из структуры объекта
const course = {
  name: "Java",
  lessons: ["variables", "functions", "conditions"],
};

function isComplete(course: { name: string; lessons: string[] }): boolean {
  return course.lessons.length < 4 ? false : true;
}
isComplete(course); // false

// Задание
// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
// Текст, который должен быть внутри окна после инициализации;
// Статус, с которым надо создать объект окна.
// Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)
enum ModalStatus {
  Opened,
  Closed,
}

function buildModal(text: string, status: ModalStatus): object {
  return { text, status };
}

const modal = buildModal("hexlet forever", ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }

// Задание
// Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. Если пользователи являются ровесниками, то возвращается null:

// const user1 = { name: 'Petr', age: 8 };
// Определите для пользователя псевдоним, чтобы не дублировать определение его типа в параметрах функции.
type User = {
  name: string;
  age: number;
};
function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age === user2.age) return null;
  return user1.age > user2.age ? user1 : user2;
}

// Задание
// Реализуйте функцию getParams(), которая принимает на вход строку запроса (query string) и возвращает параметры в виде объекта:
// Эту задачу лучше всего решать через метод reduce().
function getParams(query: string) {
  const splitQuery = query.split("&");
  const initial: any = {};
  return splitQuery.reduce((acc, el) => {
    const [key, value] = el.split("=");
    acc[key] = value;
    return acc;
  }, initial);
}

getParams("per=10&page=5");
// { per: '10', page: '5' }
getParams("name=hexlet&count=3&order=asc");
// { name: 'hexlet', count: '3', order: 'asc' }

// Задание
// Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail(). Функция принимает почту и домен. Если е-мейл пользователя содержит указанный домен, то функция возвращает true:
namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.endsWith(`@${domain}`);
  }
}

type User1 = {
  email: string;
};

function authorize(user: User1 | null): boolean {
  const companyDomain = "hexlet.io";

  const email = user?.email ?? "";

  return Company.isEmployeeEmail(email, companyDomain);
}

Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io");
// true

Company.isEmployeeEmail("user@example.com", "hexlet.io");
// false

// Задание
// Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат. Последний будет использоваться для проверки каждого числа на соответствие требованиям:

// Параметры функции:
// Массив чисел
// Анонимная функция, которая принимает на вход число и возвращает логическое значение

type myFunc = (n: number) => boolean;

function filter(numbers1: number[], cb: myFunc): number[] {
  const res: number[] = [];
  for (const num of numbers) {
    if (cb(num)) res.push(num);
  }
  return res;
}

const numbers1 = [1, -5, 2, 3, 4, 133];

filter(numbers1, (n) => n > 3); // [4, 133]
filter(numbers1, (n) => n % 2 == 0); // [2, 4]
