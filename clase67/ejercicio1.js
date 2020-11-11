
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
/**
 mostrar = Math.min(...misNumeros);
 console.log(mostrar)

 */

 const obtenerNumeroMenor = (numeros) => {
     let min = numeros[0];
     for(i = 1; i < numeros.length; i++){
         if(numeros[i] < min){
             (min=numeros[i])
         }
     }
     console.log(min);
 }
 obtenerNumeroMenor([5, 7, 99, 34, 54, 2, 12]);