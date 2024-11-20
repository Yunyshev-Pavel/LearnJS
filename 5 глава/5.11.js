// Data time
// Задача 1: День недели
// Напишем функцию, которая возвращает день недели для заданной даты в формате YYYY-MM-DD.

function getWeekday(dateStr) {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const date = new Date(dateStr);
  return days[date.getDay()];
}
console.log(getWeekday("2024-11-20")); // "Среда"

// Задача 2: Форматирование даты
// Напишем функцию, которая возвращает дату в формате ДД-ММ-ГГГГ.

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

console.log(formatDate(new Date())); // 20-11-2024

const now = new Date(); // текущая дата и время
const dateFromString = new Date("2024-11-20"); //20 ноября 2024 года
const customDate = new Date(2024, 10, 20, 12, 0, 0); // 20 ноября 2024 года 12:00
// месяца с 0-11

const data = new Date();
console.log(data.getFullYear()); //2024
console.log(data.getMonth); // ноябрь 10
console.log(data.getDate()); // число месяца
