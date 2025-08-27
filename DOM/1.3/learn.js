//1.

// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// const div = document.body.firstElementChild;
// console.log(div.firstChild); // polsovateli

// console.log(div.nextElementSibling); // ul
// console.log(div.nextElementSibling.lastElementChild.textContent); //li-пит

//2.Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
const table = document.querySelector("table");

for (let i = 0; i <= 5; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
// 3. Навигация по родителям и соседям
// Создай HTML-структуру с несколькими вложенными элементами. Напиши скрипт, который:
// - находит родительский элемент первого <p>;
// - выводит всех его соседей;
// находит предыдущий и следующий элементы относительно первого <h2>.

const p = document.body.children[1].firstElementChild;

console.log(document.body.children[1].firstElementChild.parentElement);

// 4.Сбор всех ссылок на странице
// Напиши функцию, которая собирает все <a>-ссылки на странице и выводит их в консоль.
const linkCollectoin = () => {
  const a = document.querySelectorAll("a");
  return console.log(a);
};

// 5.Подсчёт количества дочерних элементов
// Напиши функцию, которая принимает селектор родительского элемента и возвращает количество его дочерних элементов.
const selector = "div";
const countElement = (selector) => {
  return document.querySelector(selector).children.length;
};

// 6.Комбинированный поиск:
// Найди все элементы с классом .item внутри <ul> и поменяй их текст на Item X, где X — порядковый номер элемента.
console.log();

// 7.Селекторы на глубине:
// Есть <div class="container"><p><span>Text</span></p></div>

// 8.Найди span через querySelector начиная с .container и поменяй цвет текста на красный.

// 9.Фильтрация найденных элементов:
// Найди все <li> в списке и выведи только те, у которых текст длинее 5 символов.

// 10.Поиск элементов через атрибуты:
// Найди все <input> с атрибутом data-role="user" и установи им фокус.

// 11.Поиск родителя от найденного элемента:
// Найди <button> и через closest() найди родительский <form>
