const botonEstadisticas = document.getElementById('botonEstadisticas');
const estadisticas = document.getElementById('estadisticas');
const cerrarEst = document.getElementById('cerrarEst');
const botonJugar = document.getElementById('botonJugar');
const juego = document.getElementById('juego');
const cerrarJuego = document.getElementById('cerrarJuego');

function mostrarEst() {
    estadisticas.style.display = 'block';
}

function ocultarEst() {
    estadisticas.style.display = 'none';
}

function mostrarJ() {
    juego.style.display = 'block';
}

function ocultarJ() {
    juego.style.display = 'none';
}

botonEstadisticas.addEventListener('click', mostrarEst);
cerrarEst.addEventListener('click', ocultarEst);
botonJugar.addEventListener('click', mostrarJ);
cerrarJuego.addEventListener('click', ocultarJ);