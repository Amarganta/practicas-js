// - Crear una variable llamada user, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: fullname, email, age
// - Mostrar en consola el objeto user
// - Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"



const user = {
    fullname: 'Maria Lopez',
    email: 'marialopez@gmail.com',
    age: 30,
}
console.log(user);
console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`)