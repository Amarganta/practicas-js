  
// Crear una función sumar que tome como argumento un array 
//de números numeros y devuelva la suma de ellos. Ejemplo:

const numeros = [1, 2, 3, 4, 5];

const contiene = (numero, numeros) =>{
    if(numero.includes(numeros)){
        return true
    }
    return false
}


console.log(contiene(numeros, 4))
console.log(contiene(numeros, 9))