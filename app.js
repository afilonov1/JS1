"use strict";
// 3 урок

// 1 задание
function createArr() {
	let arr = [];
	for (let i = 0; i <= 10; i++) {
		if (i === 0) {
			arr[i] = `${i} - это ноль`;
		} else if (i % 2 !== 0) {
			arr[i] = `${i} - это нечетное число`;
		} else {
			arr[i] = `${i} - это четное число`;
		}
	}
	return arr;
}
createArr().forEach((elem) => console.log(elem));

// 2 задание
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

const newPost = [post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text];
console.log(newPost.join('||'));

// 3 задание
const products = [{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];
products.forEach((product) => product.price *= 0.85)
console.log(products);

// 4 задание
const productsNextTask = [{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	}
];
const productsWithPhoto = productsNextTask.filter(product => (product.photos !== undefined) ? 1 : 0);
console.log(productsWithPhoto);
productsNextTask.sort((a, b) => a.price - b.price);
console.log(productsNextTask);

// 5 задание
for (let i = 0; i <= 9; console.log(i), i++) {}

// 6 задание
for (let i = 0; i < 20; i++) {
	console.log('x'.repeat(i + 1));
}