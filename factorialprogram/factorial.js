"use strict";

/*-------------------------------------------*/
/*--------------FACTORIAL PROGRAM---- */
/*-------------------------------------------*/

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
