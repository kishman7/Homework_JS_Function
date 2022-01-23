//створюємо масив маркері
let marker = [
    {color: 'red', size: '20px'},
    {color: 'green', size: '30px'},
    {color: 'blue', size: '40px'},
];
//оголошуємо функцію
function draw(text, marker) {
let color = marker.color;
    document.write("<p style='color:" + marker.color +"; font-size:" + marker.size +"'>" + text + "</p>");
}
//визиваємо функцію
draw("hello world", marker[1]);//змінюємо номер елементу масиву