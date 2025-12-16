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
