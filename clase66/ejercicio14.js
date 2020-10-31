// Crear una función obtenerSensacion que tome como argumento un número
// temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!

const obtenerSensacion = (temp) =>{
    if(temp < 0){
        return '¡Está helando!';
    } if((temp >= 0) && (temp <= 15)){
        return '¡Hace frío!';
    }if((temp >= 16) && (temp <= 25)){
        return 'Está lindo'
    } if((temp >= 26) && (temp <= 30)){
        return 'Hace calor';
    } if((temp >= 31)){
        return '¡Hace mucho calor!';
    }
}

console.log(obtenerSensacion(-5))
console.log(obtenerSensacion(10))
console.log(obtenerSensacion(21))
console.log(obtenerSensacion(28))
console.log(obtenerSensacion(35))