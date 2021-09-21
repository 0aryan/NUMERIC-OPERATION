"use strict";

/*-------------------------------------------*/
/*-------------------EVEN_ODD PROGRAM */
/*-------------------------------------------*/
/*


document.querySelector("#even_odd").addEventListener("click", function () {
  const num = document.querySelector("#even_oddNumber").value;
  if (num % 2 === 0) {
    document.querySelector(".even_odd_ans").textContent = "Number is even";
  } else {
    document.querySelector(".even_odd_ans").textContent = "Number is odd";
  }
});

*/

/*-------------------------------------------*/
/*-------------------ARMSTRONG PROGRAM (not used) */
/*-------------------------------------------*/

/*

let abc = 0;

abc = Math.pow(3, 4);

console.log(abc);

let sum;
let num;
const ans = 0;
num = Number(prompt("Enter a number:- "));
loop1: for (let i = 0; i <= 10; i++) {
  loop2: for (let j = 0; j <= 10; j++) {
    loop3: for (let k = 0; k <= 10; k++) {
      sum = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
      if (num === sum) {
        console.log(sum);
        console.log("It is an armstrong number");
        break loop1;
      }
    }
  }
}


*/

/*-------------------------------------------*/
/*-------------------ARMSTRONG PROGRAM */
/*-------------------------------------------*/
/*
document.querySelector("#armstrong").addEventListener("click", function () {
  let r,
    temp,
    n,
    result = 0;

  n = Number(document.querySelector("#armstrongNumber").value);
  temp = n;

  while (n !== 0) {
    r = n % 10;
    console.log(r);
    result = result + r * r * r;
    n = Math.trunc(n / 10);
  }
  console.log(result);
  if (temp === result) {
    document.querySelector(".armstrong_ans").textContent =
      "It is an armstrong number";
  } else {
    document.querySelector(".armstrong_ans").textContent =
      "it is not an armstrong number";
  }
});
*/
/*-------------------------------------------*/
/*--------------PALINDROME NUMBER PROGRAM---- */
/*-------------------------------------------*/
/*
document.querySelector("#palindrome").addEventListener("click", function () {
  let n,
    temp,
    result = 0,
    r;

  n = Number(document.querySelector("#palindromeNumber").value);
  temp = n;
  while (n !== 0) {
    r = n % 10;
    result = result * 10 + r;
    n = Math.trunc(n / 10);
  }

  if (temp === result) {
    document.querySelector(".palindrome_ans").textContent =
      "it is a palindrome number";
  } else {
    document.querySelector(".palindrome_ans").textContent =
      "it is not a palindrome number";
  }
});
*/

/*-------------------------------------------*/
/*--------------FIBONNACI SERIES PROGRAM---- */
/*-------------------------------------------*/

/*

document.querySelector("#fibonacci").addEventListener("click", function () {
  let n,
    t1 = 0,
    t2 = 1,
    t3 = t1 + t2;

  n = Number(document.querySelector("#fibNumber").value);
  for (let i = 0; i < n; i++) {
    document.querySelector(
      ".fibonacci_ans"
    ).textContent = `Fibonnaci series for ${n} is ${t3}`;
    t1 = t2;
    t2 = t3;
    t3 = t1 + t2;
  }
});


*/

/*-------------------------------------------*/
/*--------------FACTORIAL PROGRAM---- */
/*-------------------------------------------*/
/*

document.querySelector("#factorial").addEventListener("click", function () {
  let fact = 1,
    n;

  n = Number(document.querySelector("#factorialNumber").value);
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  document.querySelector(
    ".factorial_ans"
  ).textContent = `${fact} is the answer`;
});

*/
/*-------------------------------------------*/
/*--------------REVERSE A NUMBER PROGRAM---- */
/*-------------------------------------------*/

/*

document.querySelector("#reverse").addEventListener("click", function () {
  let temp,
    n,
    r,
    result = 0;

  n = Number(document.querySelector("#reverseNumber").value);

  while (n !== 0) {
    r = n % 10;
    result = result * 10 + r;
    n = Math.trunc(n / 10);
  }
  document.querySelector(
    ".reverse_ans"
  ).textContent = `${result} is the answer`;
});

*/

/*-------------------------------------------*/
/*--------------PRIME NUMBER PROGRAM---- */
/*-------------------------------------------*/

/*

document.querySelector("#PrimeNumber").addEventListener("click", function () {
  let i, num;

  num = Number(document.querySelector("#prime").value);

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      document.querySelector(".prime_ans").textContent =
        "it is not a prime Number";
      break;
    } else {
      document.querySelector(".prime_ans").textContent = "it is a prime number";
    }
  }
});

*/
