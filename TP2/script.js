var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] },
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
/*
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
    if(mes === month + 1 && anio === year){
      guardarVentas.push(venta);
    }
  }
  //recorrer las ventas por año para obtener la vendedora
  for(let venta of guardarVentas){
    let valor = precioMaquina(venta.componentes);
    if(valor > acum){
      acum += valor;
      vendedoraNombre = venta.nombreVendedora;
    }
  }
  return vendedoraNombre
}

// console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//ventasMes(mes, anio): Obtener las ventas de un mes. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) =>{
 let acum = 0;
 mes--;
  for(let venta of local.ventas){
    let month = venta.fecha.getMonth();
    let year = venta.fecha.getFullYear();
    let valor = precioMaquina(venta.componentes);
    if(mes === month && anio === year){
      acum += valor;
    }
  }
  return acum;
}
// console.log(ventasMes(1, 2019) ); // 1250

//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
const ventasVendedora = (nombre) => {
  acum = 0;
  for(let venta of local.ventas){
    let valor = precioMaquina(venta.componentes);
    if(nombre === venta.nombreVendedora){
      acum += valor;
    }
  }
  return acum
}
// console.log(ventasVendedora("Grace")); // 900

// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. 
//El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente
const componenteMasVendido = () => {
  let masVendido = 0;
  let vendidos = [];
  for(let venta of local.ventas){
    for(let i = 0;i < venta.componentes.length; i++){
      if(!vendidos.includes(venta.componentes[i])){
        vendidos.push(venta.componentes[i]);
      }
    }
  }
  
  for(let i =0; i < vendidos.length; i++){
    let cantidadVentas = cantidadVentasComponente(vendidos[i]);
    if(cantidadVentas > masVendido){
      masVendido = vendidos[i];
    }
  }
  return masVendido;
}
//  console.log( componenteMasVendido() ); // Monitor GPRS 3000

//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. 
//El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const huboVentas = (mes, anio) => {
  for(let venta of local.ventas){
    let month = venta.fecha.getMonth();
    let year = venta.fecha.getFullYear();
    if(mes === month + 1 && anio === year){
      return true
    }
  }
  return false
}
//  console.log(huboVentas(3, 2019)); // false

/*
Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó.
 Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
 sucursal: 'Centro' }. Por este cambio, se pide:
*/
//En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
for(let venta of local.ventas){
  venta.sucursal = 'Centro';
}
// console.log(local.ventas)

//Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
local.sucursales = ['Centro', 'Caballito'];
// console.log(local)

//Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal

local.ventas.push(
  {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: 'Centro' },
  {fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: 'Caballito' },
  {fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: 'Centro' },
  {fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: 'Caballito' },
  {fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito" },
  {fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito" },
  {fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro" },
  {fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito" },
  {fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro" },
);

// console.log(local.ventas)

//Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
const ventasSucursal = (sucursal) => {
  acum = 0;
  for(let venta of local.ventas){
    let valor = precioMaquina(venta.componentes);
    if(sucursal === venta.sucursal){
      acum += valor;
    }
  }
  return acum
}

// console.log( ventasSucursal("Centro") ); // 4195

// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero 
//trabajando 
// con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

const ventasDe = (param) => {
  acum = 0;
  for(let venta of local.ventas){
    if((param === venta.sucursal) ||( param === venta.nombreVendedora)){
      console.log(venta, precioMaquina(venta.componentes))
      acum += precioMaquina(venta.componentes);
    }
  }
  return acum
}
// console.log(ventasDe("Centro") ); // 4195


//Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal 
//que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica 
//la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).
const sucursalDelMes = (mes, anio) => {
  let guardarVentas = [];
  let sucursalConMasVentas = '';
  acum = 0;
  for(let venta of local.ventas){
    let month = venta.fecha.getMonth();
    let year = venta.fecha.getFullYear();
    if(mes === month + 1 && anio === year){
      guardarVentas.push(venta);
    }
  }
  for(let venta of guardarVentas){
    let valor = precioMaquina(venta.componentes);
    if(valor > acum){
      acum += valor;
      sucursalConMasVentas = venta.sucursal;
    }
  }
  return sucursalConMasVentas
}
// console.log(sucursalDelMes(1, 2019)); // "Centro"

//Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte 
//que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
/**
 pasos:
 1. ordenar  el array de ventas por fecha sort()
 2. a las ventas ya ordenadas le acumulamos las ventas que se hicieron por cada mes con precioMaquina()
 3. mostrar en pantalla la lista
 */
const renderPorMes = () => {
  let ventasOrdenadas = local.ventas.sort((a, b) => {
    return a.fecha -  b.fecha
  })
  ventasPorMes = {}
  for(venta of ventasOrdenadas){
    ventasPorMes[venta.fecha.getMonth()] = ventasMes(venta.fecha.getMonth() + 1, venta.fecha.getFullYear());
  }
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
  ];

  let mostrar = 'Ventas por mes: \n';
  //mes es la propiedad
  for(let mes in ventasPorMes){
    mostrar += `Total de ${meses[mes]}: ${ventasPorMes[mes]} \n`;
  }

  return mostrar;
}
// console.log(renderPorMes());
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210s

// renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal
const renderPorSucursal = () => {
  ventasPorSucursal = {}
  for(venta of local.ventas){
    ventasPorSucursal[venta.sucursal] = ventasSucursal(venta.sucursal);
  }

  let mostrar = 'Ventas por Sucursal: \n';
  
  for(let sucursal in ventasPorSucursal){
    mostrar += `Total de ${[sucursal]}: ${ventasPorSucursal[sucursal]} \n`;
  }

  return mostrar;
}

// console.log(renderPorSucursal());
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265

//render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la 
//vendedora que más ingresos generó
const nombreMejorVendedora = () => {
  let ventasPorVendedora = [];
  
  for(vendedora of local.vendedoras){
    nombreVenta = {
      nombre: vendedora,
      ventas:  ventasVendedora(vendedora),
    };
    ventasPorVendedora.push(nombreVenta);
  }
  // console.log(ventasPorVendedora)
  
  let mejorVendedora = '';
  let mayorVenta = 0;

  for(venta of ventasPorVendedora){
    if(mayorVenta < venta.ventas){
      mayorVenta = venta.ventas;
      mejorVendedora = venta.nombre;
    }
  }
  // console.log(mayorVenta);
  // console.log(mejorVendedora);
  return mejorVendedora;
}
// console.log(nombreMejorVendedora())

const render = () => {
  let mostrar = 'Reporte: \n'
  mostrar += renderPorMes() + renderPorSucursal() + 'Producto estrella: ' + componenteMasVendido() +'\n'+ 'Vendedora que mas ingresos generó: ' + nombreMejorVendedora() ;
  return mostrar
}

console.log(render());
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace