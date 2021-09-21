"use strict";

/*-------------------------------------------*/
/*--------------PRIME NUMBER PROGRAM---- */
/*-------------------------------------------*/

document.querySelector("#prime").addEventListener("click", function () {
  let i, num;

  num = Number(document.querySelector("#primeNumber").value);

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
