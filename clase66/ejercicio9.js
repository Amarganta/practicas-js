// Crear una función esParOImpar que acepte como argumento un numero y 
//devuelva el string par si el numero es par, o el string impar si el 
//numero es impar
/** 
const esParOImpar = (numero) =>{
    if(numero % 2 == o){
        return 'Es Par'
    }
    return 'Es impar'
}
*/
const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';
console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'