"use strict"

// 1 задание
let temptCels = prompt('Введите температуру в градусах Цельсия');
let tempFaren = (9 / 5) * +temptCels + 32;
alert('Температура в градусах Фаренгейта: ' + tempFaren);

// 2 задание
let admin;
let name = 'Василий';
admin = name;
console.log(admin);

// 3 задание
console.log(10 + 10 + "10");
// Выведет 2010
// cначала сложит 10 + 10 и получит 20; 20 + "10" = number + string = string;
console.log(10 + "10" + 10);
// Выведет 101010
// nuber + string + number = string(10) + "10" + string(10);
console.log(10 + 10 + +"10");
// Выведет 30
// 10 + 10 = 20; 20 + 10 = 30; тк унарный + имеет приоритет выше сложения и преобразует '10' в число
console.log(10 / -"");
// Выведет -Infinity
// -"" = -0; тк унарный минус преобразует string в число и переворачивает; 10 / -0 = -Indinity
console.log(10 / +"2,5");
// Выведет NaN
// +"2,5" = NaN, тк 2,5 воспринимается как строка из за запятой; 10 / NaN = NaN
