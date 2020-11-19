var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

//"Monitor ASC 543"
//   array con objetos dentro = coleccion de objetos
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],
  
    precios: [
        //propiedad      //dato      //propiedad  //dato 
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };

// precioMaquina(componentes): recibe un array de componentes y devuelve el precio 
// de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
/*
const precioMaquina = (componentes) =>{
    let suma = 0;
    local.precios.forEach(element => {
      for(let i = 0; i < componentes.length; i++){
        if(element.componente === componentes[i]){
          suma += element.precio;
        }
      }
    });
    return suma;
}
*/
const precioMaquina = (componentes) =>{
  let suma = 0;
  componentes.forEach(componente => {
    for(let i = 0; i < local.precios.length; i++){
      if(local.precios[i].componente === componente){
        suma += local.precios[i].precio;
      }
    }
  });
  return suma;
}

// console.log( precioMaquina(["Motherboard ASUS 1500", "Monitor GPRS 3000"]) ); 
// 320 ($200 del monitor + $120 del motherboard)

//cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, 
//o sea que formó parte de una máquina que se vendió. 
//La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

const cantidadVentasComponente = (componente) =>{
  let cant = 0;
  local.ventas.forEach(venta => {
      if(venta.componentes.includes(componente)){
        cant += 1;
      }
    });
  return cant
}
// console.log(cantidadVentasComponente("Monitor GPRS 3000") ); // 2

//vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora
// que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
/**
const vendedoraDelMes = (mes, anio) =>{
    for(venta of local.ventas){
      let month = venta.fecha.getMonth();
      let year = venta.fecha.getFullYear();
      let valorAcumulado = precioMaquina(venta.componentes);
      
      if((month === mes) && (year === anio)){
      }
    }
    return valorAcumulado;
}


pasos:
1. buscar en las ventas las que coinciden con la fecha ingresada como parametro
1.2. guardar ventas en una nueva variable
3. buscar por vendedora y acumular en una variable iniciada en 0 el total de las ventas de esa vendedora
4. comparar ventas para saber cual es mayor
5. devolver un string con el nombre de la vendedora
 */
const vendedoraDelMes = (mes, anio) => {
  let guardarVentas = [];
  let vendedoraNombre = ''; 
  let acum = 0;
//recorrer para obtener las ventas por mes y año
  for(let venta of local.ventas){
    let month = venta.fecha.getMonth();
    let year = venta.fecha.getFullYear();
    if(mes === month && anio === year){
      guardarVentas.push(venta);
    }
  }
  //recorrer las ventas por año para obtener la vendedora
  for(let venta of guardarVentas){
    if(precioMaquina(venta.componentes) > acum){
      acum = precioMaquina(venta.componentes);
      vendedoraNombre = venta.nombreVendedora;
    }
  }
  return {vendedoraNombre, acum};
}
//me devuelve la vendera de la venta mas alta NO EL TOTAL DE LAS VENTAS POR VENDEDORA
//NO ACUMULA LAS VENTAS POR VENDEDORAS
// console.log(vendedoraDelMes(0, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) =>{
  mostrarVenta = [];
  acum = 0;

  for(let venta of local.ventas){
    let month = venta.fecha.getMonth();
    let year = venta.fecha.getFullYear();

    if(month === mes && year === anio){
      mostrarVenta.push(venta);
    }
  }
  for(let venta of mostrarVenta){
    let valorAcumulado = precioMaquina(venta.componentes);
    acum += valorAcumulado;
  }
  return acum
}
console.log(ventasMes(1, 2019) ); // 1250

//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
const ventasVendedora = (nombre) => {
  acum = 0;
  guardarVentas = [];
  
}
console.log( ventasVendedora("Grace") ); // 900

// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

// console.log( componenteMasVendido() ); // Monitor GPRS 3000

//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// console.log( huboVentas(3, 2019) ); // false