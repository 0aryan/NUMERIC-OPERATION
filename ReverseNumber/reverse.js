"use strict";

/*-------------------------------------------*/
/*--------------REVERSE A NUMBER PROGRAM---- */
/*-------------------------------------------*/

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
