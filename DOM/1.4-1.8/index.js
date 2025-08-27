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

// Изменение атрибутов динамически:
// Для формы с <input> меняй placeholder каждые 2 секунды через JS.

// Удаление атрибутов:
// Удали disabled у кнопки через removeAttribute.

// Проверка существования атрибута:
// Для всех <img> проверь, есть ли у них alt, если нет — выведи предупреждение в консоль.

// Создание элементов и добавление:
// Создай список <ul> и добавь 5 <li> с текстом «Элемент X», где X — номер элемента.

// Удаление элементов по условию:
// Удали все <li>, текст которых содержит слово «Удалить».

// Клонирование элементов:
// Клонируй любой <div> и вставь копию после оригинала.

// Изменение через innerHTML:
// Создай контейнер <div> и добавь внутрь таблицу через innerHTML с 3 строками и 2 столбцами.

// Обработчики на динамически созданные элементы:
// Создай кнопку для каждого <li> — при клике на кнопку выводи текст этого элемента.

// Динамическое изменение стиля:
// При вводе цвета в <input> меняй фон <div class="box"> на этот цвет.

// Добавление и удаление классов:
// Клик на кнопку добавляет класс .highlight, клик снова — удаляет.

// Смена нескольких стилей через JS:
// Для элемента изменяй одновременно цвет текста, фон и размер шрифта через style.

// Получение computedStyle:
// Выведи в консоль текущий цвет, фон и размер шрифта любого элемента через getComputedStyle.

// Эффект «hover» через JS:
// При наведении на элемент меняй его цвет и размер, при уходе возвращай обратно.
