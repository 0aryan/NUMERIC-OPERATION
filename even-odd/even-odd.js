"use strict";

/*-------------------------------------------*/
/*-------------------EVEN_ODD PROGRAM */
/*-------------------------------------------*/

document.querySelector("#even_odd").addEventListener("click", function () {
  const num = document.querySelector("#even_oddNumber").value;
  if (num % 2 === 0) {
    document.querySelector(".even_odd_ans").textContent = "Number is even";
  } else {
    document.querySelector(".even_odd_ans").textContent = "Number is odd";
  }
});
