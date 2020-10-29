// Crear una función esConsonante que tome como argumento un string
// letra y devuelva true si letra es una consonante o false si no lo es

const esConsonante = (letra) => !/[aeiou]/.test(letra)
console.log(esConsonante('r'))
console.log(esConsonante('e'))