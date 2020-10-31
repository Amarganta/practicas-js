  
// Crear una función obtenerNota que tome como argumento un número puntaje y devuelva
// un string dependiendo del puntaje redondeado, con las siguientes reglas:

// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido
const obtenerNota = (puntaje) =>{
    if((puntaje < 0) || (puntaje > 10)){
        return 'Puntaje inválido'
    }if(puntaje < 6){
        return 'Desaprobado'
    } if ((puntaje >= 6) && (puntaje < 7)){
        return 'Regular'
    } if((puntaje >= 7) && (puntaje < 10)){
        return 'Muy bueno';
    } if(puntaje = 10){
        return 'Excelente'
    } 
}

console.log(obtenerNota(3))
console.log(obtenerNota(6))
console.log(obtenerNota(10))
console.log(obtenerNota(9))
console.log(obtenerNota(-9))
console.log(obtenerNota(44))