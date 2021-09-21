"use strict";

/*-------------------------------------------*/
/*-------------------ARMSTRONG PROGRAM */
/*-------------------------------------------*/

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
