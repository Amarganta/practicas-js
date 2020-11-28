const progreso = () => {
  const contenedor = document.createElement('div');
  const barra = document.createElement('div');
  const progreso = parseInt(prompt('Ingrese el porcentaje de su barra de progreso: '));

  contenedor.style.backgroundColor = 'lightgrey';
  barra.style.backgroundColor = 'teal';
  barra.style.height = '20px';
  barra.style.width = `${progreso}%`;

  document.body.appendChild(contenedor);
  document.appendChild(barra);
};
progreso();