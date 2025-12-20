// Basics

// 0: Keywords and words
// Woh words jinko js janti ha wo keywords hotay hain usky ilawa saray words kahlatay hain. keywords example: function, let, const, var, async, await, fetch...

// 1: Data Types
// string: "iohdidsfhoids"
// number: 12232131
// Arrays: []
// Object: {}
// functions
// Booleans: true / false
// undefined
// null

// 2: Variables
// # var can redaclare and reassign.
// var dulha = "shoaib";
// var dulha = "shahzaib";
// var dulan = "justifyContent";
// # let can't redaclare but reassign.
// let dulha = "grid";
// dulha = "shahzaib";
// let dulhan = "flex";
// # const can't redaclare or reassign.
// const dulha = "block";
// dulha = "shahzaib";
// const dulhan = "flex";

// # var is function scope.
// var num = 2;
// function name() {
//     var num = 40;
// }
// console.log(num);

// # let and const is block scope
// let num = 4;
// {
//     let num = 90;
//     console.log(num);
//     {
//         let num = 30;
//         console.log(num);
//     }
// }
// console.log(num);
// var cup;
// console.log(cup);
// cup = "coffee";
// variable which is created with var keyword can hoist. its mean the initialize of the var will lift and the assignment will remain there.
// let cup = "coffee";
// const cup = "coffee";
// let and const can hoist but if we call them before initialize its called TDZ (temporal dead zone)

// Data types:
// 0-primitives and reference ( without brackets all the types is premetives... )
// 1-dynamic typing ( there's no static typing in js which mean we don't define type of variable while declare )
// 2-typeof quirks ( null type is object, nan type is number ) (behaviour)
// 3-type coercion ( "5"+1 = "51" )(if operand is a string then it will concatenate while using + but calculate if - )( force )
// 4-truthy vs falsy ( false values... 0 false "" null undefined NaN document.all )(for checking !! write this before value)(nature)(-1 its truthy)

// Operators:
// 0-types
// a: artihimetic (+, -, *, %, /)
// b: assignment (+=, -=, *=)
// c: logical (&&, ||, !)
// d: comparison (==, ===, >, <, >=, <=)
// b: terinay ( ? : )

// const input = Number(prompt("Enter your age"));
// const age = input >= 18 ? "Eligible" : "Under-age";
// alert(age);

// 1- pre / post increment
// let counter = 5;
// console.log(counter++); post
// console.log(++counter); pre

// 2-for checking real type of array or object use var instanceof Array / false or true
// const arr = [];
// console.log(arr instanceof Array);

// Control Flow:
// 0-if else else if

// const age = Number(prompt("Enter your age:"));
// if (age >= 18 && typeof age === 'number') {
//     console.log("License");
// } else {
//     console.log("Student card");
// }

// const fan = !true;
// if (fan && typeof fan === "boolean") {
//     console.log("Fan is on.");
// } else if (!fan && typeof fan === "boolean") {
//     console.log("Fan is off.");
// } else {
//     console.log("Unexpected input value.");
// }

// 1-switch case

// switch (3) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Not a valid number for week.");
//         break;
// }

// const age = 18;
// console.log(age >= 18 ? "Yes" : "No");

// 2-early return pattern

// function button(state) {
//     return state === true;
// }

// Loops
// 0- for
// let myclass = 46;
// for (let i = 0; myclass >= i; i++) {
//     console.log(`Welcome new student: ${i}`);
// }

// const table = 9;
// for (let c = 1; 10 >= c; c++) {
//     console.log(`${table} x ${c} = ${table * c}`);
// }

// 1- while
// let num = 1;
// while (num <= 10000000) {
//     console.log(num);
//     num++
// }

// 2- do-while
// let num = 0;
// do {
//     console.log(num);
//     num--
// } while (num >= 1);

// 3- break or continue
// for (let index = 1; index <= 20; index++) {
//     // if(index === 3) continue;
//     // if (index === 11) break;
//     console.log(index);
// }

// functions

// function shoaib(time) {
//     if (time === 12) console.log("shoaib raat ko 12 bjy code k puchy ga");
// }

// shoaib(11);

// function sum(...str) { return str.sort() }
// console.log(sum("b", "c", "a", "z", "x"));

// function date(d = new Date().toLocaleDateString()) {
//     console.log(d);
// }

// date("18/12/2025");
// date();


// const bulb = () => {
//     console.log("fat arrow function");
// }

// bulb();

// const newfn = function () { return 54 };
// console.log(newfn());


// button()

// function button(state = true) {
//     console.log(`bulb is ${state ? "on" : "off"}`);
// }


// const button = (state) => {
//     console.log(`bulb is ${state ? "on" : "off"}`);
// }

// button()

// const bulb = function led(state) { console.log(`bulb is ${state ? "on" : "off"}`); }
// bulb()

// const sort = (...params) => {
//     console.log(params.sort());
// }

// sort("b", "c", "d", "x", "w");


// const firstClass = function circuit(fn) {
//     return fn;
// }

// console.log(
//     firstClass(
//         function () {
//             return 200
//         }
//     )()
// );

// function board() {
//     return function () {
//         return 200;
//     }
// }

// console.log(board()());


// let num = 0;
// const counter = () => {
//     console.log(++num);
// }
// counter();

// function parent(a = 0) {
//     const num = a;
//     return function (n = 0) {
//         return num + n;
//     }
// }

// console.log(parent(18)(10));

// function parent(a = 0) {
//     const num = a;
//     return function (n = 0) {
//         const second = num + n;
//         return function (m = 0) {
//             return second * m;
//         }
//     }
// }

// console.log(parent(2)(2)(2));

// (
//     function run() {
//         console.log("running");
//     }
// )()

// (
//     run = () => {
//         console.log("running");
//     }
// )()

const colors = ["red", "pink", "blue", "yellow", "tomato", "black", "aqua"];
const numbers = [1, 20, 18, 15, 12, 8, 3, 2, 5, 4, 88];

// insert one in last
// colors.push("black");
// remove one from last
// colors.pop();

// remove one from start
// colors.shift();
// insert one in start
// colors.unshift("tomato");

// delete or add in the original array
// colors.splice(1, 4);
// colors.splice(4, 0, "purple");

// slice of an array in new array
// const newColors = colors.slice(3, 5);

// console.log(numbers.sort((a, b) => { return a - b }));

// console.log(colors);

// const newColors = [...colors];
// console.log(newColors);

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// numbers.forEach((n) => {
//     console.log(n * 4);
// })

// console.log(newNumbers);

// const newNumbers = numbers.map((n) => {
//     return n * 8;
// })

// console.log(newNumbers);

// const newNumbers = numbers.filter((n) => {
//     return n >= 20;
// })

// console.log(newNumbers);

// const newNumbers = numbers.reduce((a, b) => {
//     return a + b;
// })

// console.log(newNumbers);

// const findColor = colors.find((a) => {
//     return a === "yellow";
// })

// console.log(findColor);

// console.log(colors.indexOf("yellow"));


// const newNumbers = numbers.some((n) => {
//     return n > 20;
// })

// console.log(newNumbers);

// const newNumbers = numbers.every((n) => {
//     return n >= 1;
// })

// console.log(newNumbers);
