//створюємо масив чеків
let check = [
    {product: 'bread', number: '3', price: '25.5'},
    {product: 'milk', number: '8', price: '32.2'},
    {product: 'chocolate', number: '4', price: '37.6'},
];
//функція друку чека на екран
function print(check){
    for (let i = 0; i < check.length; i++) { 
        document.writeln("Product: " + check[i].product + " Number: " + check[i].number + " Price " + check[i].price + "<br\/>");
    }
}
print(check);

//функція підрахунку загальної суми покупки
function syma(check){
    let sum = 0;
    for (let i = 0; i < check.length; i++)  {
        sum += +check[i].number * +check[i].price;
    }
    document.writeln(sum + " uah" +  "<br\/>");
}
syma(check);

//функція отримання найдорожчої покупки у чеку
function maxSyma(check) {
    let maxElem = [];
    let maxtemp = 0;
    for (let i = 0; i < check.length; i++) 
    {
        maxElem[i] = +check[i].number * +check[i].price;
        if (maxElem[i] > maxtemp) 
        {
            maxtemp = maxElem[i];
        }
    }
    document.writeln("Max suma check = " + maxtemp + " uah" + "<br\/>");
}
maxSyma(check);

//функція підрахунку середньої вартості одного товару у чеку
function avarageSyma(check){
    let sum = 0;
    let sumAvarage = 0;
    for (let i = 0; i < check.length; i++)  
    {
        sum += +check[i].price;
    }
    sumAvarage = sum/(+check.length);
    document.writeln("Avarage suma check " + sumAvarage.toFixed(2) + " uah" + "<br\/>");
}
avarageSyma(check);
