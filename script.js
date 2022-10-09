// ==UserScript==
// @name        wikipedia table header float
// @namespace   Violentmonkey Scripts
// @grant       none
// @version     1.0
// @author      tanhaworen
// @description 2/8/2022, 6:40:34 PM
// @match      https://*.wikipedia.org/wiki/*
// @downloadURL  https://github.com/jahanzebshayan/wikipedia-table-header-float/raw/main/script.js
// @updateURL    https://github.com/jahanzebshayan/wikipedia-table-header-float/raw/main/script.js
// @run-at     document-start
// @license      GNU GPLv2
// ==/UserScript==


document.addEventListener('DOMNodeInserted', function() {
  var listOfThead = document.getElementsByTagName('thead');
  //console.log(listOfThead)
  var num = listOfThead.length;
  //console.log(num)
  var newUI = document.getElementById('vector-sticky-header');
    if (num > 0 ){
    Array.from(listOfThead).forEach(child => {
      child.style.position = "sticky";
      if(newUI){
          child.style.top = "50px";
      } else {
          child.style.top = 0;
      }
    });
  }
}, false);
