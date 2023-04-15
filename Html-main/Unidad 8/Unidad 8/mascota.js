const mascota = {
    nombre: "Memo",
    edad: "7 meses",
    tipo_de_animal: "Canino",
    datosdemascota() {
      document.write(
        `Nombre de la mascota: ${this.nombre} </br> La edad de la mascota: ${this.edad} </br> Tipo de animal: ${this.tipo_de_animal}`
      );
    },
  };
  console.log(mascota.datosdemascota());