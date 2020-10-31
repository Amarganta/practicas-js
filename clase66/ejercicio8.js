// Crear una función puedeGraduarse que tome como argumentos dos números 
//asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true 
//si una persona puede gruadarse o false si no. Una persona puede graduarse si 
//tiene un 75% de asistencia o más, 50 materias aprobadas o más y 
//la tesis aprobada.

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>{
    if((asistencia => 75) && (materiasAprobadas >= 50) && (tesisAprobada == true)){
        return true
    }
    return false
}
console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false