"use strict";

/*-------------------------------------------*/
/*--------------PALINDROME NUMBER PROGRAM---- */
/*-------------------------------------------*/

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
