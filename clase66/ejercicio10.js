// Crear una función esPositivoONegativo que acepte como argumento un numero
// y devuelva el string positivo si el numero es positivo, o el string 
//negativo si el numero es negativo

const esPositivoONegativo = (numero) => (numero>0)?'positivo':'negativo';

console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'