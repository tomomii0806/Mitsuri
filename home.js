"use strict";

const init = function(e){
  let btn1 = document.querySelector("#metal-sheet");
  let btn2 = document.querySelector("#discover");
  let btn3 = document.querySelector("#introduce");
  let btn4 = document.querySelector("#connect");

  btn1.addEventListener('click', function(){
    localStorage.setItem('val', 1);
    window.document.location = './description.html';
  });
  btn2.addEventListener('click', function(){
    localStorage.setItem('val', 2);
    window.document.location = './description.html';
  });
  btn3.addEventListener('click', function(){
    localStorage.setItem('val', 3);
    window.document.location = './description.html';
  });
  btn4.addEventListener('click', function(){
    localStorage.setItem('val', 4);
    window.document.location = './description.html';
  });
};

document.addEventListener('DOMContentLoaded', function(){
  init();});
