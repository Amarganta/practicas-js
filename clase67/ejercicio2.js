  
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:


const sumar = (numeros) =>{
    let total = 0;
    for(let i of numeros){
        total += i;
        console.log(total);
    }
}

sumar([5, 7, 10, 12, 24]); // 58