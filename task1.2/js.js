const redRange= document.getElementById("Red");
const greenRange=document.getElementById("Green");
const blueRange=document.getElementById("Blue");
const colorChange=document.getElementById("para");

function changeColor(){
    const redValue=redRange.value;
    const greenValue=greenRange.value;
    const blueValue=blueRange.value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorChange.style.color = color;
}
redRange.addEventListener("input", changeColor);
greenRange.addEventListener("input", changeColor);
blueRange.addEventListener("input", changeColor);