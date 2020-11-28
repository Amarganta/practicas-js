// Trabajando con atributos
//      getAttribute - setAttribute - removeAttribute

// Modificando HTML
//      createTextNode - CreateElement - removeChild - replaceChild - appendChild - append - prepend

// innerHTML y template strings

const elem = document.getElementById("texto");

// console.log(elem);
// elem.setAttribute("data-src", "bg-primary");
// console.log(elem);
// console.log(elem.getAttribute("data-ref"));
// elem.removeAttribute("data-ref");
// console.log(elem);

const habitantes = getInhabitants();

console.log(habitantes);

const primerHabitante = habitantes[0];

console.log(primerHabitante);

const h1 = document.createElement("h1");
const imagen = document.createElement("img");
imagen.setAttribute("src", primerHabitante.thumbnail);

const texto = document.createTextNode(primerHabitante.name);
h1.appendChild(texto);

const ul = document.createElement("ul");

for (data of primerHabitante.professions) {
  const li = document.createElement("li");
  const texto = document.createTextNode(data);
  li.appendChild(texto);
  ul.appendChild(li);
}

const p = document.createElement("p");
p.appendChild(document.createTextNode("Texto de ejemplo"));

elem.appendChild(h1);
elem.appendChild(imagen);
elem.appendChild(ul);
elem.removeChild(imagen);
elem.appendChild(imagen);
elem.replaceChild(p, ul);

const { name, age } = primerHabitante;

elem.append(`Este personaje se llama ${name} y tiene ${age} años`);
elem.prepend("Escribo un texto directamente al principio");
elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años</p>`;