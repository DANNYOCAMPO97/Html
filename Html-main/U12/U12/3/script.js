function startAnimation() {
var heading = document.getElementById("myHeading");
heading.style.color = getRandomColor(); // Cambia el color inicialmente

setInterval(function() {
heading.style.color = getRandomColor();
}, 1000);
}

function getRandomColor() {
var letters = "0123456789ABCDEF";
var color = "#";
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)]; }
return color;
}