// Crear una función filtrarPorLongitud que tome como argumentos 
//un número longitud y un array de strings palabras y que 
//devuelva un array con las palabras que tengan una cantidad de 
//letras mayor a longitud. Ejemplo:

const filtrarPorLongitud = (longitud, arrayPalabras) =>{
    let longitudMayor = [];
    for(i=0; i <arrayPalabras.lenght; i++){
        if(arrayPalabras[i].lenght > longitud){
            longitudMayor.push(arrayPalabras[i])
        }
    }
}


console.log(filtrarPorLongitud(4, [
    "dia",
    "remolacha",
    "azul",
    "sorpresa",
    "te",
    "verde",
  ])); // ['remolacha', 'sorpresa', 'verde']