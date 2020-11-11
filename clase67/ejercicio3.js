  
// Crear una función contiene que tome como argumentos un 
//número numero y un array de números numeros y devuelva true
// o false dependiendo de si dicho numero se encuentra en el 
//array de numeros. Ejemplo:


const numeros = [1, 2, 3, 4, 5];

const contiene = (numero, numeros) =>{
    if(numero.includes(numeros)){
        return true
    }
    return false
}


console.log(contiene(numeros, 4))
console.log(contiene(numeros, 9))