//JSON 
// JSON.stringify(value[, replacer, space])
// value -  Значение для кодирования.
// replacer - Массив свойств для кодирования или функция соответствия function(key, value).
// space - Дополнительное пространство (отступы), используемое для форматирования.

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}
  
  
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
  }));
  
  
  // JSON.parse(str[, reviver]);
  // str - JSON для преобразования в объект.
  // reviver - Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.
  
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
  
  let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  
  alert( meetup.date.getDate() ); 
  
  
  
  // При кодировании пропускает:
  undefined 
  symbol
  method()
  
  
  // Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
  
  let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let user2 = JSON.parse(JSON.stringify(user));
  
  
  let room = {
      number: 23
    };
    
    let meetup = {
      title: "Совещание",
      occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
      place: room
    };
    
    // цикличные ссылки
    room.occupiedBy = meetup;
    meetup.self = meetup;
    
    console.log( JSON.stringify(meetup, function replacer(key, value) {
      return key != "" && value == meetup ? undefined : value
    }));
  
  
    
    /* в результате должно быть:
    {
      "title":"Совещание",
      "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
      "place":{"number":23}
    }