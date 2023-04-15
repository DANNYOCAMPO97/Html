const objeto = document.getElementById("objeto");
let posicionX = 0;
let posicionY = 0;

function moverObjeto(direccion) {
  switch (direccion) {
    case "izquierda":
      posicionX -= 10;
      break;
    case "derecha":
      posicionX += 10;
      break;
    case "arriba":
      posicionY -= 10;
      break;
    case "abajo":
      posicionY += 10;
      break;
    default:
      break;
  }
  objeto.style.left = `${posicionX}px`;
  objeto.style.top = `${posicionY}px`;
}

document.addEventListener("keydown", (event) => {
  const teclaPresionada = event.key;
  switch (teclaPresionada) {
    case "ArrowLeft":
      moverObjeto("izquierda");
      break;
    case "ArrowRight":
      moverObjeto("derecha");
      break;
    case "ArrowUp":
      moverObjeto("arriba");
      break;
    case "ArrowDown":
      moverObjeto("abajo");
      break;
    default:
      break;
  }
});
