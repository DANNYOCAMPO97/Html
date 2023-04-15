function eliminarNodoHijo() {
    var parentElement = document.getElementById("parentElement");
    var childToRemove = parentElement.firstChild; 

    parentElement.removeChild(childToRemove);
}
