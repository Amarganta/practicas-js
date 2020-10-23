/**
 calcularPorcentaje(numero, porcentaje)
Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y 
devuelva el valor del porcentaje correspondiente al número

 console.log(calcularPorcentaje(100, 15)) // 15
 console.log(calcularPorcentaje(10, 50)) // 5
 console.log(calcularPorcentaje(200, 10)) // 20
 */

 const calcularPorcentaje = (num, numPorcent) => {
    return porcentaje = (num*numPorcent)/100
 }

 /**
restarPorcentaje(numero, porcentaje)
Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
  */

const restarPorcentaje = (num, numPorcent) => {
    return resta = num - calcularPorcentaje(num, numPorcent) 
}

/**
 burlarse(str)
Crear una función contarPalabras que tome como argumento un string str y 
devuelva el mismo string con todas las vocales reemplazadas por la letra i

burlarse('programar es dificil') // 'prigimir is dificil'
 */

const burlarse = (str) => {
    
    const vocales = ["a", "e", "o", "u"];

    for(let i = 0; str.length > i; i++) {

        if(vocales.includes(str[i])){

            str = str.replace(str[i], 'i');

        }
    }

    return str;
}

const rta = burlarse('programar es dificil');

console.log(rta);


//forma de pau
const burlarse2 = (str) => {
    let reemplazo= str.replace((/a|e|o|u/gi), function(i){
        return "i";
    })
    return reemplazo;
}

 /**
  Crear una función aHackerSpeak que tome como argumento un string str
   y devuelva el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0
  */
