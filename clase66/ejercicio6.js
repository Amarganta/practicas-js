// Crear una función esHoraValida que tome como argumento un string hora con el
// formato HH:mm y determine si es una hora válida del día o no

const esHoraValida = (hora, minuto) => (hora>=00) || (hora<=23) && (minuto>=00) || (minuto<=59)
console.log(esHoraValida(4,55))
console.log(esHoraValida(23,35))
