// Crear un programa que muestre el dinero inicial, y que permita retirar dinero 
//preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. 
//Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, 
//debe mostrar un mensaje alertándolo e impedir seguir retirando.

let saldo = 50000;

const retirarDinero = () => {

    let dinero = prompt("¿Cuánto dinero desea retirar?");

    saldo = saldo > dinero 
        ? saldo - dinero 
        : alert('no tiene suficiente dinero');

    console.log(saldo);

    if(saldo > 0) retirarDinero();

}


retirarDinero();