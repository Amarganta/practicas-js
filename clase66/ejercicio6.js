// Crear una función esHoraValida que tome como argumento un string hora con el
// formato HH:mm y determine si es una hora válida del día o no

//const esHoraValida = (hora, minuto) => (hora>=00) || (hora<=23) && (minuto>=00) || (minuto<=59)
//console.log(esHoraValida(4,55))
//console.log(esHoraValida(23,35))

const esHoraValida = (hora) => {
    
    let hora_split = hora.split(':');
    hora = hora_split[0]
    minuto = hora_split[1]
    if (hora < 24 && minuto < 60) {
        return true
    }
    return false
}
console.log(esHoraValida('12:28'))