"use strict";
// 4 урок

// 1 задание

function IntToObj (num) {
	if (Number.isInteger(num) && num <= 999 & num >= 0) {
		this.units = Math.floor(num % 10);
		this.tens = Math.floor(num / 10 % 10);
		this.hundreds = Math.floor(num / 100);
	} else {
		console.log('Введены неверные данные');
	}
}

const number = Number(prompt('Введите число'));

const numberObj = new IntToObj(number);

console.log(numberObj);

// 1.1 задание ES5

// function Product(name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// Product.prototype.make25PercentDiscount = function() {
// 	this.price *= 0.75;
// }

// let product = new Product('car', 2000);
// console.log(product);
// product.make25PercentDiscount();
// console.log(product);

// 1.1 задание ES6

// class Product {
// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}
// 	make25PercentDiscount() {
// 		this.price *= 0.75;
// 	} 
// }
// let product1 = new Product('fridge', 400);
// product1.make25PercentDiscount();

// 1.2 задание ES5

// function Post(author, text, date) {
// 	this.author = author;
// 	this.text = text;
// 	this.date = date;
// }

// Post.prototype.edit = function(textSecond) {
// 	this.text = textSecond;
// };
// let post1 = new Post('Ivan', 'Hello world', 29); 
// post1.edit('No hello');

// function AttachedPost(author, text, date) {
// 	Post.call(this, author, text, date);
// 	this.highlighted = false;
// }

// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.makeTextHighlighted = function() {
// 	this.highlighted = true;
// };
// let post2 = new AttachedPost('Petr', 'Privet', 31);
// post2.edit('Some text');
// post2.makeTextHighlighted();

// 1.2 задание ES6

// class Post {
// 	constructor(author, text, date) {
// 		this.author = author;
// 		this.text = text;
// 		this.date = date;
// 	}
// 	edit(textSecond) {
// 		this.text = textSecond;
// 	}
// }
// let post01 = new Post('Evgeny', 'Frontend', 9);
// post01.edit('Front-end'); 
// class AttachedPost extends Post {
// 	constructor(author, text, date) {
// 		super(author, text, date);
// 		this.highlighted = false;
// 	}
// 	makeTextHighlighted() {
// 		this.highlighted = true;
// 	}
// }
// let post02 = new AttachedPost('Semeon', 'Backend', 22);
// post02.edit('back-end');
// post02.makeTextHighlighted();