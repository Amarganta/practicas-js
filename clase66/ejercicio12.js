// Crear una función obtenerDiasMes que tome como argumento un 
//string mes y devuelva un número dependiendo de la cantidad de 
//días que tenga ese mes

const obtenerDiasMes = (mes) =>{
    
        if(['febrero'].includes(mes)) {
            return '28'
        } if(['enero', 'marzo', 'mayo', 'julio', 'agosto', 'octubre', 'diciembre'].includes(mes)){
            return '31'
        } if(['abril', 'junio', 'septiembre', 'noviembre']){
            return '30'
        } else {
            'Error: Este no es un día del mes'
        }
    }

console.log(obtenerDiasMes("diciembre")) // 31
console.log(obtenerDiasMes("febrero"))   // 29
console.log(obtenerDiasMes('septiembre'))
console.log(obtenerDiasMes('October'))