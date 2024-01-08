"use strict";
let dimensionXStart = 0,
  dimensionYStart = 0,
  dimensionXEnd = 1,
  dimensionYEnd = 2;
let x = document.getElementById("canvas");
console.log(x);
let loading = x.getContext("2d");
function draw(x, y) {
  loading.moveTo(dimensionXStart, dimensionYStart);
  loading.lineTo(x, y);
  loading.lineWidth = 5;
  loading.strokeStyle = "blue";
  loading.stroke();
  dimensionXStart = x;
  dimensionYStart = y;
  (dimensionXEnd += 2), dimensionYEnd++;
}
let timing = setInterval(function () {
  draw(dimensionXEnd, dimensionYEnd);
}, 100);
setTimeout(function(){clearInterval(timing);
window.alert("animation ended");
},16000)
