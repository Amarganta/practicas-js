// Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
  };
  
  // codea aca la solucion
  if(datos.programa === true){
      datos.lenguajeeFavotito = "JavaScript"
  }  
  
  // finalmente, mostramos los datos
  console.log(datos);
  // { id: 1,
  //   nombre: 'Ada',
  //   apellido: 'Lovelace',
  //   email: 'ada.lovelace@gmail.com',
  //   telefono: '1234567890',
  //   edad: 29,
  //   programa: true,
  //   lenguajeFavorito: 'Javascript' }