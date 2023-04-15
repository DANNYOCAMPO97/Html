function increaseSize() {
var obj = document.getElementById('myObject');
var currentWidth = obj.offsetWidth;
var currentHeight = obj.offsetHeight;

obj.style.width = (currentWidth + 50) + 'px';
obj.style.height = (currentHeight + 50) + 'px';
}

function decreaseSize() {
var obj = document.getElementById('myObject');
var currentWidth = obj.offsetWidth;
var currentHeight = obj.offsetHeight;

obj.style.width = (currentWidth - 50) + 'px'; 
obj.style.height = (currentHeight - 50) + 'px';
}
