"use strict";

document.addEventListener('DOMContentLoaded', function(){
    let rate = document.querySelectorAll('.rate-circle');
    let checked;
  rate.forEach(circle => {
    circle.addEventListener("click", function(){
        circle.style.backgroundColor = "hsl(25, 97%, 53%)";
        circle.style.color = "hsl(0, 0%, 100%)";
        checked = circle["outerText"];
    });
  });

  let submit = document.querySelector(".submit");
  submit.addEventListener("click", function(){
    document.querySelector(".rating").style.display = 'none';
    document.querySelector(".thanks").style.display = 'flex';
    document.querySelector(".selected").appendChild(document.createElement("p").appendChild(document.createTextNode(`You selected ${checked} out of 5`)));

  });
});