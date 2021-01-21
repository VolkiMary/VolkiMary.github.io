// Заданеи 4

var lines = 5;
var str = " ";
var star = "#";
for(var i = 0; i < lines; i++){
    str += star;
    console.log(str);
}

// Задание 5

// заполняем массив числами
function fillArray(count, min, max) {
  if (count > (max - min)) return;
  var arr = [], t;

  while (count) {
    t = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(t) === -1) {
      arr.push(t);
      count--;
    }
  }
  return arr;
}

console.log(fillArray(10, -100, 100));

// заменяем отрицательные значения 0

var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

function getPosistiveNumbers(array) {
    var positive = [];

    for (var i = 0; i < array.length; i++) {
        
        if (array[i] > 0) {
            positive.push(array[i]);
        }
            if( array[i] < 0) {
            positive.push(array[i]=0);
            }
        
    }
    return positive;
   

}
console.log(getPosistiveNumbers(myArray));







// Задача 5

// Надеюсь я правильно поняла условия задачи. Здесь я выбрала сортировку по свjйств обЬекта по Id.
var arrayOfObjects = [];
var byId = arrayOfObjects.slice(0);
byId.sort(function(a,b) {
  return a.id - b.id;
});
console.log('by id:');
console.log(byId);
