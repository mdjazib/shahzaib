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

function shoaib(time) {
    if (time === 12) console.log("shoaib raat ko 12 bjy code k puchy ga");
}

shoaib(11);

function sum(...str) { return str.sort() }
console.log(sum("b", "c", "a", "z", "x"));

function date(d = new Date().toLocaleDateString()) {
    console.log(d);
}

date("18/12/2025");
date();


// const bulb = () => {
//     console.log("fat arrow function");
// }

// bulb();

const newfn = function () { return 54 };
console.log(newfn());


