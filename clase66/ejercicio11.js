// Crear una función avanzarSemaforo que acepte como argumento un string 
//colorActual y devuelva un string con el siguiente color del semáforo, 
//siguiendo el orden: verde -> amarillo -> rojo -> verde
/*
const avanzarSemaforo = (colorActual) => {
    if(colorActual === 'verde'){
        return 'amarillo'
    } if(colorActual === 'amarillo'){
        return 'rojo'
    } if(colorActual === 'rojo'){
        return 'verde'
    }
    return 'Error: color no válido'
}
*/
const avanzarSemaforo = (colorActual) => {
    switch(colorActual){
        case 'verde':
            return 'amarillo';
        case 'amarillo':
            return 'rojo';
        case 'rojo':
            return 'verde';
        default:
        return 'Error: color no válido';
    }
}

console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))     // 'verde'
console.log(avanzarSemaforo('rosa'))