//оголошуємо функцію
function abbr(text){
    let abr = text.split(' ').map(function(item){return item[0]}).join('');
    return document.writeln("<p style='text-transform:uppercase;'>" + abr + "</p><br\/>");
}
//визов функції
abbr("Java Script Object Notation");
abbr("обєктно орієнтовне програмування");
abbr("cascading style sheets");

