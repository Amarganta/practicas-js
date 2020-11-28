// Crear una funcióm crearUsuario que reciba como argumento un callback. 
// La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.
const crearUsuario = (callback) =>{
    let usuario = prompt('Por favor ingrese su nombre de usuario:');
    console.log(usuario);
    callback();
}
const confirmarCreacion = () => alert("Usuario creado!"); // callback

// crearUsuario(confirmarCreacion);

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!

// Crear una función validarUsuario que reciba como argumento un callback validador. 
//El callback debe ser una función que tome un string como argumento, haga alguna validación, 
//y devuelva true o false si pasa dicha validación o no. La función validarUsuario, al ejecutarse, 
//debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como 
//argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje 
//si el usuario ingresado es correcto o no.
const validarUsuario = (callback) => {
 let usuario = prompt('Por favor ingrese nombre de usuario: ');
 if(callback(usuario)){
     alert('Tu usuario ha sido validado')
 } else {
     alert('FATAL ERROR')
 }
}
const validacion = (usuario) => {
    if(usuario.length > 5 ){
        return true
     } else {
         return false
     }
}

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

// Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.
const numeros = [1, 2, 3]; 

const map = (numeros, callback) => {
    const numerosDuplicados = [];
    for(numero of numeros){
        numerosDuplicados.push(callback(numero));
    }
    return numerosDuplicados
}
const duplicar = (x) => x * 2;

let resultado = map(numeros, duplicar) // [2, 4, 6]
console.log(resultado)
// Ejemplo:
// const numeros = [1, 2, 3]
// const duplicar = (x) => x * 2
// map(numeros, duplicar) // [2, 4, 6]

// Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".
const numeros2 = [10, 2, 3, 40, 33, 50];
const filter = (numeros2, callback) => {
    const numerosMultiplosDe10 = [];
  
    for(numero of numeros2){
        if(callback(numero)){
            numerosMultiplosDe10.push(numero);
        } 
    }
    return numerosMultiplosDe10;
}
const multiploDe10 = (x) => x % 10 === 0;

let resultadoFilter = filter(numeros2, multiploDe10) // [10, 40, 50]
const palabras = ["hola","mesa","queso","árboles"]

const cuatroLetra = (palabra) => palabra.length === 4;

// console.log(filter(palabras,cuatroLetra));

// console.log(resultadoFilter)

// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]


// Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true
const every = (array, callback) => {
    for(dato of array){
        if(!callback(dato)){
            return false;
        }
    }
    return true;
}
// Ejemplo:

 const numeros3 = [10, 2, 3, 40, 33, 50]
//  const multiploDe10 = (x) => x % 10 === 0
 const esPositivo = (x) => x >= 0

// console.log( every(numeros3, multiploDe10)) // false
// console.log(every(numeros3, esPositivo)) // true

// Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true
const some = (array, callback) => {
    for(dato of array){
        if(callback(dato)){
            return true;
        }
    }
    return false;
}


console.log( some(numeros3, multiploDe10)) // true
console.log( some(numeros3, esPositivo)) // true

  
// Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const numeros4 = [8, 2, 3, 40, 33, 50]
const find = (array, callback) => {
    for(dato of array){
        if(callback(dato)){
            return dato
        } 
    }
    return undefined;
}
// const multiploDe10 = (x) => x % 10 === 0
console.log(find(numeros4, multiploDe10)) // 40

  
// Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined
const findIndex = (numeros4, callback) => {
    for(let i = 0; i < numeros4.length; i++){
        if(callback(numeros4[i])){
            return i;
        }
    }
    return undefined
}
// const multiploDe10 = (x) => x % 10 === 0
console.log(findIndex(numeros4, multiploDe10)) // 3

  
// Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, 
//no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir 
//de dicho elemento inclusive)

const numeros5 = [40, 30, 50, 8, 2, 3, 20];
const dropWhile = (array, callback) => {
    let arrayFalse = [];
    let primeraVez = false;
    let nuevoArray = array.findIndex(dato => !callback(dato))
    return array.splice(nuevoArray);
    // for(dato of array){
    //     if(!callback(dato)){
    //         arrayFalse.push(dato);
    //     }
    // }
    return arrayFalse;
}
// const multiploDe10 = (x) => x % 10 === 0
console.log(dropWhile(numeros5, multiploDe10)) // [8, 2, 3, 20]