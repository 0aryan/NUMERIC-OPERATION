"use strict";

/*-------------------------------------------*/
/*--------------FIBONNACI SERIES PROGRAM---- */
/*-------------------------------------------*/

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
