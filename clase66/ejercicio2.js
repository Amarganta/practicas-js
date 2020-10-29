// Crear una función estaEnRango que tome como argumentos tres números
// un valor, un número minimo y un número maximo, y devuelva true si el valor 
//se encuentra entre los números minimo y maximo o false si no 
//(si el valor es igual a uno de los extremos se considera que está dentro 
// del rango)

const estaEnRango = (valor, minimo, maximo) => (valor>minimo) && (valor<maximo)
console.log(estaEnRango(89, 5, 70))