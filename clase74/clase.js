// Asignacion por destruccturacion

const objeto = {
    name: 'ama',
    lastname: 'gonzalez',
    age: 22,
    email: 'ama@mail.com',
    datosBancarios: {
        cbu: '001010101010101',
        numeroCuenta: '0000001',
        alias: 'UNO.CERO.UNO',
    }
}
// const {name, lastname, email} = objeto;
// console.log(name);

/**
 Cambiando el nombre de las variables destructuradas
 const {name: name2, lastname, email} = objeto; 
 */

/*destruccturacion anidada:
*/
// const {datosBancarios: {numeroCuenta}} = objeto;
// console.log(numeroCuenta);


// const{
//     datosBancarios,
//     datosBacarios: {numeroCuenta},
// } = objeto;

//destructuracion de parametros

// const miFuncion = ({name,datosBancarios}) =>{
//     // console.log(name,datosBancarios);
// }
// miFuncion(objeto);

//objetos como parametros



//Operador Spread 

const {...restoDelObjeto}=objeto;//copia fiel
//agregado datos:
// restoDelObjeto.otroDato='otro dato';
// restoDelObjeto.name='ama sofia';

// console.log(restoDelObjeto);//estos son nuevos datos, son nuevos
// console.log(objeto);

//inmutabilidad: que un objeto que no se pueda modificar
//Object.freeze(objeto);//no rompe el programa, lo congela
//Object.seal(objeto)//este solo te deja modificar datos existentes
                    //no permite agregar nuevas propiedades

objeto.name = 'ama sofi';
objeto.otroDato = 'otro dato';
console.log(objeto);

//pasaje por valor vs pasaje por referencia
//shallow copy vs deep copy

let objeto2 = objeto;