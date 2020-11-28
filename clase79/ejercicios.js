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
        if(numero === multiploDe10){
            numerosMultiplosDe10.push(callback(numero))
        } 
    }
    return numerosMultiplosDe10;
}
const multiploDe10 = (x) => x % 10 === 0;

let resultadoFilter = filter(numeros2, multiploDe10) // [10, 40, 50]
console.log(resultadoFilter)
// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]