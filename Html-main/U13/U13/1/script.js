function añadirNodoHijo() {
    var padre = document.getElementById("padre");
    var nuevoNodo = document.createElement("p"); 
    var textoNodo = document.createTextNode("Nuevo Nodo Hijo"); 
    nuevoNodo.appendChild(textoNodo);
    padre.appendChild(nuevoNodo); }
