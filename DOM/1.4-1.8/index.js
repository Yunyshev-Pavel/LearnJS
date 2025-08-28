// 1.Комбинированный поиск:
// Найди все элементы с классом .item внутри <ul> и поменяй их текст на Item X, где X — порядковый номер элемента.
console.log(document.getElementsByClassName("item"));
const item = document.getElementsByClassName("item");
Array.from(item).forEach((el, index) => {
  el.textContent = `Item ${index + 1}`;
});
// 2.Селекторы на глубине:
// Есть <div class="container"><p><span>Text</span></p></div>
//Найди span через querySelector начиная с .container и поменяй цвет текста на красный.
const container = document.querySelector(".container");
const span = container.querySelector("span");
span.style.color = "red";

// 3.Фильтрация найденных элементов:
// Найди все <li> в списке и выведи только те, у которых текст длинее 5 символов.
const li = document.querySelectorAll("li");
console.log(li);

Array.from(li)
  .filter((el) => el.textContent.length > 5)
  .forEach((el) => console.log(el.textContent));

// 4.Поиск элементов через атрибуты:
// Найди все <input> с атрибутом data-role="user" и установи им фокус.
const inputs = document.querySelectorAll('input[data-role="user"]');
inputs.forEach((el) => el.focus());

// 5.Поиск родителя от найденного элемента:
// Найди <button> и через closest() найди родительский <form>
const button = document.querySelector("button");
button.focus();

// свойства vs атрибуты:
// Создай <input type="checkbox" checked>
// Выведи в консоль checkbox.checked и checkbox.getAttribute('checked').
// Поменяй состояние чекбокса и снова выведи разницу.
const checkbox = document.getElementById("agree");
console.log(checkbox.checked);
console.log(checkbox.getAttribute("checked"));
checkbox.checked = false;
console.log(checkbox.checked);

// Нестандартные атрибуты:
// Добавь data-info="hello" к любому элементу
// Выведи его через dataset.info.
const form = document.getElementById("myForm");
console.log(form.dataset.info);
form.dataset.info = "helo world";
console.log(form.dataset.info);

// Изменение атрибутов динамически:
// Для формы с <input> меняй placeholder каждые 2 секунды через JS.
const inputDynamic = document.querySelector("input");
console.log(inputDynamic);
const interval = setInterval(() => {
  const sec = new Date().getSeconds();
  inputDynamic.placeholder = `Меняю placeholder ${sec}`;
}, 2000);
setTimeout(() => clearInterval(interval), 10000);

// Удаление атрибутов:
// Удали disabled у кнопки через removeAttribute.
const btnRemoveAttr = document.getElementById("searchBtn");
btnRemoveAttr.removeAttribute("disabled");

// Создание элементов и добавление:
// Создай список <ul> и добавь 5 <li> с текстом «Элемент X», где X — номер элемента.
const newUl = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  const newLi = document.createElement("li");
  newLi.textContent = `«Элемент ${i}`;
  newUl.append(newLi);
}
document.body.append(newUl);

// Удаление элементов по условию:
// Удали все <li>, текст которых содержит слово «Удалить».
const liList = document.querySelectorAll("li");
liList.forEach((li) => {
  if (li.textContent.includes("Удалить")) {
    li.remove();
  }
});

// Клонирование элементов:
// Клонируй любой <li> и вставь копию после оригинала.
const ul = document.getElementById("searchList");
const templateItem = item[0];

for (let i = 1; i <= 3; i++) {
  const cloneItem = templateItem.cloneNode(true);
  cloneItem.textContent = `Item ${i}`;
  ul.append(cloneItem);
}
// Изменение через innerHTML:
// Создай контейнер <div> и добавь внутрь таблицу через innerHTML с 3 строками и 2 столбцами.
container.innerHTML = `
  <table border="1">
    <tr><td>1</td><td>2</td></tr>
    <tr><td>3</td><td>4</td></tr>
    <tr><td>5</td><td>6</td></tr>
  </table>
`;
document.body.append(container);

// /Создай кнопку для каждого <li>.
// При клике на кнопку у соответствующего элемента меняется цвет текста (например, с чёрного на красный, и обратно при повторном клике).
const btn = document.getElementById("searchBtn");
const items = document.querySelectorAll(".item");
btn.addEventListener("click", () => {
  items.forEach((li) => {
    if (li.style.color === "red") {
      li.style.color = "black";
      return;
    }
    li.style.color = "red";
  });
});

// Динамическое изменение стиля:
// При вводе цвета в <input> меняй фон <div class="box"> на этот цвет.
const input = document.getElementById("colorInput");
const box = document.querySelector(".box");

input.addEventListener("input", () => {
  box.style.background = input.value;
});
