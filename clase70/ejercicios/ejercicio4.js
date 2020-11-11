// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron
var Ada = {
   id: 01,
    nombre: "Ada",
    email: "ada@terra.com",
    telefono: "1111111111"
 }
 var Grace = {
    id: 02,
     nombre: "Grace",
     email: "grace@terra.com",
     telefono: "22222222"
  }
  var Hedy = {
   id: 03,
    nombre: "Hedy",
    email: "hedy@terra.com",
    telefono: "333333333333"
 }
 var Radia = {
    id: 04,
     nombre: "Radia",
     email: "radia@terra.com",
     telefono: "4444444444"
  }
  var Sheryl = {
    id: 05,
     nombre: "Sheryl",
     email: "sheryl@terra.com",
     telefono: "5555555555"
  }
// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log(Ada.nombre);

// 2. El ID de Grace
console.log(Grace.id);

// 3. El email de Hedy
console.log(Hedy.email);

// 4. El ID y nombre de Radia
console.log(`${Radia.id} ${Radia.nombre}`);

// 5. El telefono de Sheryl
console.log(Sheryl.telefono);