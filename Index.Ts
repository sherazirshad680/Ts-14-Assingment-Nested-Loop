//Nested loop
// for (let i = 0; i <= 4; i++) {
//     for (let j = 1; j <= 4; j++) {
//         console.log(`Value of i: ${i}, Value of j: ${j}`);
//     }
// }

//1. Write a ts program to print all natural numbers from 1 to n. - using for loop
// let n: any = prompt(`Enter a number`);

// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using for loop
// let n: any = prompt(`Enter a number`);

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

//3. Write a ts program to print all alphabets from a to z. - using for loop
// for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//     let alphabet = String.fromCharCode(i);
//     console.log(alphabet);
// }
//4. Write a ts program to print all even numbers between 1 to 100. - using for loop
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

//5. Write a ts program to print all odd number between 1 to 100.
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

//6. Write a ts program to find sum of all natural numbers between 1 to n.
// let n: any = prompt(`Enter a number`);
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(`The sum of all natural numbers between 1 and ${n} is: ${sum}`);

//7. Write a ts program to find sum of all even numbers between 1 to n.
// let n: any = prompt(`Enter a number`);

// let sum = 0;
// for (let i = 2; i <= n; i += 2) {
//     sum += i;
// }
// console.log(`The sum of all even numbers between 1 and ${n} is: ${sum}`);

//8. Write a ts program to find sum of all odd numbers between 1 to n.
// let n: any = prompt(`Enter a number`);
// let sum = 0;
// for (let i = 1; i <= n; i += 2) {
//     sum += i;
// }

// console.log(`The sum of all odd numbers between 1 and ${n} is: ${sum}`);

// //9. Write a ts program to print multiplication table of any number.
// var table: any = prompt(`Enter The Any Table`);
// for (var i = 1; i <= 10; i++) {
// console.log(`${table} x ${i} = ${table * i}`);
// }

//10. Write a ts program to count number of digits in a number.
// var hello: any = prompt(`enter a digit to know how many digits are there`);
// var digit: number = 0;

// for (let i = 0; i < hello.length; i++) {
//   var element: any = hello[i];

//   if (element >= `0` && element <= `9`) {
//     digit++;
//   }
// }
// console.log(`there are total  ${digit} digit `);


//11. Write a ts program to swap first and last digits of a number.
// var inputNumber: any = prompt(`enter a number`);
// var numberAsString: string = inputNumber.toString();

// var firstDigit: number = 0;
// var lastDigit: number = 0;

// for (let i = 0; i < numberAsString.length; i++) {
//     if (i == 0) {
//         firstDigit = parseInt(numberAsString.charAt(i));
//     }
//     if (i == numberAsString.length - 1) {
//         lastDigit = parseInt(numberAsString.charAt(i));
//     }
// }

// console.log(`Input number: ${inputNumber}`);
// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);

// 12. Write a ts program to find sum of first and last digit of a number.
// var inputNumber: any = prompt(`enter a number`);
// var numberAsString: string = inputNumber.toString();

// var firstDigit: number = 0;
// var lastDigit: number = 0;
// var sum: number = 0;

// for (let i = 0; i < numberAsString.length; i++) {
//     if (i == 0) {
//         firstDigit = parseInt(numberAsString.charAt(i));
//     }
//     if (i === numberAsString.length - 1) {
//         lastDigit = parseInt(numberAsString.charAt(i));
//     }
// }
// sum += lastDigit + firstDigit;
// console.log(`Input number: ${inputNumber}`);
// console.log(`First digit: ${firstDigit}`);
// console.log(`Last digit: ${lastDigit}`);
// console.log(`Sum of First and Last digit: ${sum}`);

// nested loop by yahoo baba

for (var a = 1; a <= 5; a++) {
    for (var b = 1; b <= a; b++)
        console.log(b);
}

