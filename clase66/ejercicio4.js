/// Crear una función esVocal que tome como argumento un string letra y 
//devuelva true si letra es una vocal o false si no lo es.

const esVocal = (letra) => /[aeiou]/.test(letra)
console.log(esVocal('a'))
console.log(esVocal('f'))