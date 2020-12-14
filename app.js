"use strict";

// 1 задание

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
console.log(c); // ответ: 2, потому что a сначала увеличивается на 1, потом приравнивается к c
//пример 2
d = b++;
console.log(d); //ответ: 1, потому что b сначала приравнивается к d, потом увеличивается на 1
//пример 3
c = 2 + ++a;
console.log(c); //ответ: 5. a был равен 2.он увеличивается на 1 = 3, потом присоединяется к 2 => c = 5
//пример 4
d = 2 + b++; //ответ 4, тк 2 + 2(b) = 4 и потом b увеличивается на 1
console.log(d); //4
console.log(a); //3
console.log(b); //3

// 2 задание
a = 2;
let x = 1 + (a *= 2);
// a сначала умножается на 2 и записывается в a => a = 4
// x = 1 + 4 = 5

// 3 задание
a = 5;
b = -33;
if (a >= 0 && b >= 0) {
	console.log(Math.abs(b-a));
} else if (a < 0 && b < 0) {
	console.log(a * b);
} else {
	console.log(a + b);
}

// 4 задание
a = 1;
b = 5;
function sum(a, b) {
	return a + b;
}
let difference = (a, b) => Math.abs(a - b);
let division = function() {
	return a / b;
}

const multiplication = (a, b) => a * b;

console.log(sum(a, b), difference(a, b), division(a, b), multiplication(a, b));

// 5 задание
function mathOperation(arg1, arg2, operation) {
	let oper = null;
	switch (operation) {
		case 'sum':
			oper = arg1 + arg2;
			break;
		case 'diff':
			oper = Math.abs(arg1 - arg2);
			break;
		case 'divide':
			oper = arg1 / arg2;
			break;
		case 'multiply':
			oper = arg1 * arg2;
			break;
	}
	if (oper === null) 
		console.log('Операция введена неверно');
	else
		return oper;
}
console.log(mathOperation(1, 2, 'multiply'))

// 6 задание

function ending(number) {
	let word;
	if (number === 1 ) {
		word = 'рубль';
	} else if (number === 2 || number === 3 || number === 4) {
		word = 'рубля';
	} else {
		word = 'рублей';
	}
	return word;
}
function lastNumeral(number) {
	if (number > 10) {
		number %= 10;
	}
	return parseInt(number);
}
let constructor = (value, word) => alert(`"Ваша сумма в ${value} ${word} успешно зачислена`);
const value = +prompt('Какое число хотите положить на счет?');
constructor(value, ending(lastNumeral(value)));