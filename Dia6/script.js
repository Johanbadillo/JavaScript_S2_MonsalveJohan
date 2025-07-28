function buscarPersonaje() {

  let nombreBuscado = prompt('Ingrese el nombre exacto del personaje:');
  nombreBuscado = nombreBuscado.toLowerCase().trim();
  
  let paginaActual = 1;
  let totalPaginas = 42;
  let personajeEncontrado = false;

  function buscarEnPagina(pagina) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rickandmortyapi.com/api/character?page=' + pagina, true);
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
        for (i = 0; i < data.results.length; i++) {
          let personaje = data.results[i];
          if (personaje.name.toLowerCase() === nombreBuscado) {
            let mensaje = 'Personaje encontrado:\n\n';
            mensaje += 'Nombre: ' + personaje.name + '\n';
            mensaje += 'Especie: ' + personaje.species + '\n';
            mensaje += 'Estado: ' + personaje.status + '\n';
            mensaje += 'Ubicación: ' + personaje.location.name;
            alert(mensaje);
            personajeEncontrado = true;
            return;
          }
        }
        if (pagina < totalPaginas && !personajeEncontrado) {
          buscarEnPagina(pagina + 1);
        } else if (!personajeEncontrado) {
          alert('No se encontró el personaje con el nombre "' + nombreBuscado + '".');
        }
      }
    };

    xhr.send();
  }
  
  buscarEnPagina(paginaActual);
}

buscarPersonaje();