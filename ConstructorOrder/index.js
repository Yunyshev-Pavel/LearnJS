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

function Order() {
  this.items = [];
}
Order.prototype.addItem = function (item, count) {
  //   this.items[item] = count;
  if (this.items[0] && this.items[0].name === item.name) {
    this.items[0].count += 1;
  } else {
    this.items.push({ ...item, count });
  }
  console.log(item, "item");
  console.log(this.items, "items");
  console.log(this.items[0].name, "cont");
};

const order = new Order();
order.addItem({ name: "zopa", price: 100 }, 1);
order.addItem({ name: "zopa", price: 100 }, 1);
order.addItem({ name: "chipsiki", price: 100 }, 1);
