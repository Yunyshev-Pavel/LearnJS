// Написать функцию конструктор для заказа в магазине.

// Новый инстанс - новый заказ у него будут методы:

// addItem(item, count) - добавить итем в чек (+ имя +цена)
// removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
// getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
// lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
// unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы
// Формат item - объект с:

// Названием итема;
// Ценой за штуку. Два итема с одинаковым именем считаем одной позицией в чеке.
// Использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзо

function Basket() {
  this.items = {};
  this.isLockOrder = false;
}
Basket.prototype.addItem = function (item, count) {
  if (this.isLockOrder)
    return alert("Товары нельзя добавлять, заказ заблокирован");

  if (!this.items[item.name]) {
    this.items[item.name] = { price: item.price, count };
  } else {
    this.items[item.name].count++;
  }
};
Basket.prototype.removeItem = function (item, count) {
  if (this.isLockOrder)
    return alert("Товары нельзя удалять, заказ заблокирован");
  if (!this.items[item.name]) return console.log("Такого товара нету");
  if (this.items[item.name].count <= count || count === undefined) {
    delete this.items[item.name];
  } else {
    this.items[item.name].count--;
  }
};
Basket.prototype.getCheck = function () {
  Object.values(this.items).reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
};

Basket.prototype.lockOrder = function () {
  this.isLockOrder = true;
};
Basket.prototype.unlockOrder = function () {
  this.isLockOrder = false;
};

const basket = new Basket();

function addToBasket(name, price) {
  basket.addItem(name, price);
}

function removeFromBasket(name) {
  basket.removeItem(name);
}
function lockOrder() {
  basket.lockOrder();
  alert("Заказ заблокирован!");
}
function unlockOrder() {
  basket.unlockOrder();
  alert("Заказ заблокирован!");
}

basket.addItem({ name: "zopa", price: 100 }, 1);
basket.addItem({ name: "zopa", price: 100 }, 1);
basket.addItem({ name: "chipsiki", price: 100 }, 1);
basket.removeItem({ name: "zopa", price: 100 }, 1);
basket.getCheck();
console.log(basket);
