const libro = {
    titulo: "La Historia interminable",
    autor: "Michael Ende",
    fecha_de_publicacion: "1 de septiempre de 1979",
    datosdelibro() {
      document.write(
        `Titulo del libro: ${this.titulo} </br> Autor: ${this.autor} </br> Fecha de publicacion: ${this.fecha_de_publicacion}`
      );
    },
  };
  console.log(libro.datosdelibro());