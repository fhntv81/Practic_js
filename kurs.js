/*
const myInfo = {
    age: age = 28,
    name: name = 'Artem',
    country: 'Ukraine',
    city: {
        capital: 'Kiyv',
        population: 400000
    }
}
delete myInfo.name;
console.log(myInfo);
function updateInfoAge (info) {
    const newAge = Object.assign({}, info);
    newAge.age += 5;
    return newAge;
}
const apdateNewAge = updateInfoAge(myInfo);

console.log(myInfo.age);
console.log(apdateNewAge.age);

// callback function
function summaryFunction (a, b) {
    const summ = a + b;
    return summ;
} 
function fnCallbackFunction (callbackFunction) {
    callbackFunction()
}
fnCallbackFunction(summaryFunction);
*/
/*
const myName = 'Artem ' + 'Smilianskyi';
const myAge = 25;
const myAdress = 'Lugansk' + ' ' + 'Ukraine';

const result = `${myName} ${myAge} ${myAdress}`;
console.table(result);*/

/*setTimeout (function() {
    console.log('Hallo Artem')
}, 2000 );

const myArray = [1,2,3,false,'Artem']
myArray[1] = 'abcd';
myArray.push('Kiyv');
console.log(myArray.length);
console.log(myArray);
const removedElemnt = myArray.pop();
console.log(removedElemnt);
console.log(myArray);*/


// metod forEach
/*const sumArray = [1,2,3,4]
sumArray.forEach(el => console.log(el*3));
console.log(sumArray);*/

// metod MAP
/*const newSumArray = [1,2,3,12]
const resArray = newSumArray.map(el => el * 4);
const resNewArray = newSumArray.map(function(el) {
    return el * 5
});
console.log(newSumArray);
console.log(resArray);
console.log(resNewArray);*/

// if ... else .... switch
/*let a = 1
if (a > 6) { 
    a ++ 
} else {
    a -= 15
}
console.log(a);

const person = {age: 20}
if (!person.name) {
    setTimeout (function () {
        console.log('This name is out')
    }, 2000) 
}*/

// Тернарный оператор (тернарное выражение)
/*let value = 4;
console.log(value >= 5 ? value : -value);

newValue = -7;
const res = newValue >= 0 ? newValue : -newValue
console.log(res);*/

// Цыклы FOR
/*const exampleArray = [2, 4, 5, true, 'abc'];
for (let i = 0; i < exampleArray.length; i +=2) {
    console.log(exampleArray[i]);
}
exampleArray.forEach((el, i) => {
    console.log(el, i);
});*/

/*let a = 0;
while (a < 4) {
    console.log(a)
    a ++
}
// метод values
const myObject = {
    x: 20,
    y: true,
    z: 'abc'
}
Object.values(myObject).forEach(value => {
    console.log(value);
})
// метод keys
const myObjects= {
    x: 10,
    y: false,
    z: 'Artem'
}
Object.keys(myObjects).forEach(key => {
    console.log(key, myObjects[key]);
});*/

/*class NumbersArray extends Array {
    sum () {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const resultArray = new NumbersArray (4, 6, 8);
console.log(resultArray);
console.log(resultArray.sum());*/


// OBJECT
/*let users = [
    {name: 'Artem', age: 27, status: 'male'},
    {name: 'Kyrylo', age: 20, status: 'male'},
    {name: 'Olya', age: 16, status: 'female'},
    {name: 'Oleg', age: 56, status: 'male'},
    {name: 'Oksana', age: 22, status: 'female'},
    {name: 'Viktiriia', age: 41, status: 'female'},
    {name: 'Stas', age: 35, status: 'male'},
    {name: 'Kolya', age: 17, status: 'male'},
    {name: 'Sveta', age: 27, status: 'female'},
    {name: 'Marina', age: 32, status: 'female'},
];


// FOR
/*for (let i = 0; i < users.length; i ++) {
    if (users[i].age < 25) {
       document.write(`<h3>${users[i].name} ${users[i].status}</h3>`);
    } else if (users[i].age >=26 && users[i].age < 33) {
       document.write(`<h3>${users[i].name} ${users[i].status}</h3>`);
    } else {
        document.write(`<h3>${users[i].name} ${users[i].status}</h3>`);
    }
}*/


//FOR OF
/*for (let user of users) {
    console.log(user['name'], user['age']);
}*/


//FOR IN
/*debugger;
for (const user of users) {
    for (const newUser in user) {
        console.log(newUser, user[newUser]);
    }
}
console.log(' ');
*/


// FUNCTION

/*1)
function fancy(productTitle, price, descr) {
    document.write(`
        <div>
            <h2>${productTitle} - ${price} UAH</h2>
            <p>${descr}</p>
        </div>
    `)
}
fancy('Tuborg', 50, 'lager');*/


/*2)
function printerArray (array) {
    for (const item of array)
    console.log(item);
}

let users = [
    {name: 'Artem', age: 27, status: 'male'},
    {name: 'Kyrylo', age: 20, status: 'male'},
    {name: 'Olya', age: 16, status: 'female'},
    {name: 'Oleg', age: 56, status: 'male'},
    {name: 'Oksana', age: 22, status: 'female'},
    {name: 'Viktiriia', age: 41, status: 'female'},
    {name: 'Stas', age: 35, status: 'male'},
    {name: 'Kolya', age: 17, status: 'male'},
    {name: 'Sveta', age: 27, status: 'female'},
    {name: 'Marina', age: 32, status: 'female'},
];
printerArray(users);

let products = [
    {title: 'Tuborg', price: 50, descr: 'lager'},
    {title: 'Stella', price: 80, descr: 'lager'},
    {title: 'Carsberg', price: 25, descr: 'dark'},
    {title: 'Kronenburg', price: 42, descr: 'blance'},
];
printerArray(products);*/


/*function calc(a, b) {
    let result = a + b
    return result;
};
let r1 = calc(20, 25)
let r2 = calc(50, 45)
console.log(r1, r2);



// Example-1 /*return sum - pdv -varPdv */ // можно и так вернуть return
/*function tax(sum) {
    let pdv = sum / 100 * 20;
    let varPdv = sum / 100 * 1.5;
    let result = sum - pdv - varPdv;
    return result;    
}*/

// Example-2
/*function percentMathematic(cash, percent) {
    return cash / 100 * percent;
}
function tax(sum) {
    let pdv = percentMathematic(sum, 20);
    let varPdv = percentMathematic(sum, 1.5);
    return sum - pdv - varPdv;
}

let finalySum = tax(10000)
let finalySum1 = tax(13000000)
console.log(finalySum);
console.log(finalySum1);*/


/*function filterArray (users) {
    const userFilterArray = [];
    for (let user of users) {              // можно и так for (let i = 0; i < users.length; i ++) { const user = users[i]}
        if (user['age'] > 25) {
            userFilterArray.push(user)
        }
    }
    return userFilterArray
}

let users = [
    {name: 'Artem', age: 27, status: 'male'},
    {name: 'Kyrylo', age: 20, status: 'male'},
    {name: 'Olya', age: 16, status: 'female'},
    {name: 'Oleg', age: 56, status: 'male'},
    {name: 'Oksana', age: 22, status: 'female'},
    {name: 'Viktiriia', age: 41, status: 'female'},
    {name: 'Stas', age: 35, status: 'male'},
    {name: 'Kolya', age: 17, status: 'male'},
    {name: 'Sveta', age: 27, status: 'female'},
    {name: 'Marina', age: 32, status: 'female'},
];
const filter = filterArray(users)
console.log(filter);*/



// Стрелочная функция
/*const mathSum = (a, b) => a * b
console.log(mathSum(10, 10));*/


/*const abcd = {
    name: 'Artem',
    age: 42,
    area: 'Lugansk',
    greeting: function(msg) {
        console.log(abcd);
        return (`${msg} - my name is ${this.name}. I am ${this['age']}`) // можно (`${msg} - my name is ${abcd.name}. I am ${abcd['age']}`)
    },
    place: (msg) => `${msg} i am from ${abcd.area}`,  // this. в этом случая не работает (ссылается на объект WINDOW)
}
console.log(abcd.greeting('Hi'));
console.log(abcd.place('Hello'));*/


//
/*const str = 'Hello my wife'
for (let i = 0; i < str.length; i ++) {
   console.log(str[i]);
}*/

/*const str = 'Hello world'
const a = str.concat(' and world')
console.log(a);

console.log(str.replaceAll('l', 'q'));
console.log(str.replace('l', 'w'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());*/



// МЕТОД filter. findIndex
/*
let users = [
    {name: 'Artem', age: 27, status: 'male'},
    {name: 'Kyrylo', age: 20, status: 'male'},
    {name: 'Olya', age: 16, status: 'female'},
    {name: 'Oleg', age: 56, status: 'male'},
    {name: 'Oksana', age: 22, status: 'female'},
    {name: 'Viktiriia', age: 41, status: 'female'},
    {name: 'Stas', age: 35, status: 'male'},
    {name: 'Kolya', age: 17, status: 'male'},
    {name: 'Sveta', age: 27, status: 'female'},
    {name: 'Marina', age: 32, status: 'female'},
];
let filterUser = users.findIndex(item => item.name == 'Oleg') // findIndex
console.log(filterUser);

let filterUser1 = users.filter(item => item.name.length < 5 && item.age > 26) //filter
console.log(filterUser1);

function bigValue (el) {return el >= 20}  // еще один способ использовать метод filter
const result = [8, 22, 130, 18, 87, 10].filter(bigValue)
console.log(result);

const myArray = [8, 22, 130, 18, 87, 10] // // еще один способ использовать метод filter
const result1 = myArray.filter(el => el >= 15)
console.log(result1);*/


/*let nums = [1,22, 35,55]
let concatArray = nums.concat(users)
console.log(concatArray);
let newConcatArray = concatArray.slice(3, 8)
console.log(newConcatArray);*/
/*let abcd = concatArray.splice(2, 4); //вырезает и создает новый массив начиная с элемента с индексом 2 и последующие 4 элемента массива 
console.log(abcd);
console.log(concatArray); // возвращает новый массив без вырезанных элементов*/


/*const arrayFirst = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function resultNature(item) {
    for (let i = 2; item > i; i++) {
        if (item % i == 0) {
            return false
        }
    }
    return item > 1
}
console.log(arrayFirst.filter(resultNature));*/ // найти все простые числа данного массива



// МЕТОД flat
/*const arrayFlat = [1, 5, 8, 15, [5, 10, [15, 18]]] // поднятие вложенного массива на один уровень вверх
console.log(arrayFlat.flat());*/


// МЕТОД flatmap
/*const arr1 = [1, 4, 7, 8]
console.log(arr1.flatMap((el) => [el * 2]));

const arr2 = [1, 4, 7, 8]
console.log(arr2.map((x) => [x * 2]));*/ // Вот отличие от flatmap


//МЕТОД forEach
/*const items = ["item1", "item2", "item3"];
const copy = [];

// до
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
console.log(copy);

// после
items.forEach(item => copy.push(item));
console.log(copy);*/


// CALLBACK ФУНКЦИИ
/*const doHomework = (subject, callback) => {
    console.log(`Starting my ${subject} homework.`);
    callback();
  };
  
const finishHomework = () => {
    console.log(`Finish my homework`);
};
doHomework('geography', finishHomework);

let first = (callback) => {
    setTimeout(() => {
        console.log(111);
        callback();
    }, 1000 )
};
let second = () => {
    console.log(222);
}
first(second);*/


// REDUCE
let users = [
    {id: '12', name: 'Artem', age: 27, status: 'male'},
    {id: '25', name: 'Kyrylo', age: 20, status: 'male'},
    {id: '2', name: 'Olya', age: 16, status: 'female'},
    {id: '5', name: 'Oleg', age: 56, status: 'male'},
    {id: '125', name: 'Oksana', age: 22, status: 'female'},
    {id: '653', name: 'Viktoriia', age: 41, status: 'female'},
    {id: '66', name: 'Stas', age: 35, status: 'male'},
    {id: '77', name: 'Kolya', age: 17, status: 'male'},
    {id: '43', name: 'Sveta', age: 27, status: 'female'},
    {id: '23', name: 'Marina', age: 32, status: 'female'},
];
/*let newUsers = users.reduce((acc, user) => {
    if (user.age < 26) {
        acc.statT.push(user)
    }else {
        acc.statF.push(user)
    }
    return acc;
}, {statT: [], statF: []});
console.log(newUsers);*/


/*const sumAgeUser = users.reduce((acc, currentage) => {
    return acc + currentage.age
}, 0);
console.log(sumAgeUser);


const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const sum = nums.reduce((currentSum, currentNumber) => {
  return currentSum + currentNumber
}, 0);
console.log(sum);*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // отобрать все четные, возвести в квадрат, отобрать результат > 50 

function filterEven(num) {
  return num % 2 === 0
}
function square(num) {
  return num * num
}
function filterGreaterThanFifty(num) {
  return num > 50
}
//const result = numbers.filter(filterEven) .map(square) .filter(filterGreaterThanFifty);
//console.log(result);

const result = numbers.reduce((acc, num) => {
    if (filterEven(num)) {
        const squared = square(num)
        if (filterGreaterThanFifty(squared)) {
            acc.push(squared)
        }
    }
    return acc
}, []);
console.log(result);*/

/*const getElementById = users.reduce(function(acc, user) {
    acc[user.id] = {
        name: user.name,
        age: user.age,
    }
    return acc;
}, {});
console.log(getElementById["43"]);*/


/*const getArrayStatus = (users) => {
    return users.reduce((statussum, user) => {
        if (user.status === 'male') {
            statussum.push(user.status)
        }
        return statussum;
    }, []);
}
console.log(getArrayStatus(users));*/


// ЗАДАЧА НА ПРОВЕРКУ ПОЛЛИНДРОМА (Example 1)
/*function polindrom (str) {
    str = str.toLowerCase();
    let str2 = str.split('');
    str2 = str2.reverse();
    str2 = str2.join('');
    if (str2 == str) {
        return true
    }else {
        return false
    }

    return str2;
}
console.log(polindrom('aannnaa'));*/

        // Example 2 (сразу возвращает булевое значение)
/*function polindrom (str) {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('')
}
console.log(polindrom('abba22'));*/

        // Example 3
/*const polindrom = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('')
}
console.log(polindrom('abba'));*/


// spread
/*const univer = ['supervisor', 'manager', 'regional']
const newUniver = [...univer, 'merchendaiser', 'klient'] // добавляет все значения массива <univer>
console.log(newUniver);

const player = {
    name: 'Ronaldu',
    club: 'Real Madrid',
    number: 7
}

const newPlayer = {...player, age: 32}
console.log(newPlayer);


// rest
const num = (...args) => args; // все аргументы залетят в массив
console.log(num(1, 3, 55, 66));*/
let resInt = function result(a) {
    if (a < 0) {
        console.log('число отрицательное')
    }else if (a == 0) {
        console.log('число равно нулю')
    }else {
        console.log('число положительное')
    }
    return resInt
};
resInt(6);

let str = 'sjdfriguejwkf'
console.log(str.length);

let str1 = 'Hello my name is Viktor'
let str2 = str1.toString().slice(- 1);
console.log(str1[str1.length - 1]);
console.log(str2);

let str4 = 'sjfskf wfekg wjfkgeq';
function lastLetter() {
    console.log(str4.toString().slice(- 1));
}
lastLetter(str4);


let resEven = el => !(el % 2)
console.log(resEven(4));


















































