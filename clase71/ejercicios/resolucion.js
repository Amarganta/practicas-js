const personajes = getInhabitants();

// 1 Mostrar en pantalla al/los personajes mas pequeños de "Brastlewark"

const personajesMasPequenios = () => {

  let menor = personajes[0];
  
  for(let i = 0; i < personajes.length - 1; i++) {
    // const p1 = personajes[i].height;
    const p2 = personajes[i+1]
    
    if(menor.height > p2.height){
      menor = p2
    }
  }
  return menor;
}

personajesMasPequenios();





// 2 Crear una funcion que devuelva los personajes por ID en base a un rango numerico.

const rangoId = (inicio, final) =>{

  const personajesRango = [];

  for(let i = inicio; i <= final; i++){

    personajesRango.push(personajes[i]);

  }

  return personajesRango;
}
//rangoId(4, 34);


// 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

function colorCabello(color){
  const personajesColorCabello = personajes.filter((personaje=> personaje.hair_color === color))
  return personajesColorCabello
}

// console.table(colorCabello('Pink'));


// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.
/*

const dinamico = (key, value)=>{
  const lista = [];
  for(const personaje of personajes){
    if(personaje[key] === value){
      lista.push(personaje);
    }
  }
  return lista
}
//  console.log(dinamico('age', 100));

