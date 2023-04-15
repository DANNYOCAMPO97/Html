const persona = {
    nombre: "Roberto",
    edad: "20",
    correoelectronico: "Villato247@gmail.com",
    datosdepersona() {
      document.write(
        `Nombre de la persona: ${this.nombre} </br> Edad: ${this.edad} </br> Correo electronico: ${this.correoelectronico}`
      );
    },
  };
  console.log(persona.datosdepersona());