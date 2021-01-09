/**
 Utilizando el template de ejercicio Zorro, se debe mostrar una imagen aleatoria de un zorro cuando se apriete el botón.

 */

 fetch('https://randomfox.ca/?i=113')
 .then((response) => {
    console.log(response);
});
