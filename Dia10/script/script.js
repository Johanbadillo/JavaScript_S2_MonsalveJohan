const botonEstadisticas = document.getElementById('botonEstadisticas');
const modalEstadisticas = document.getElementById('estadisticas');
const cerrarModal = document.getElementById('cerrarModal');

function mostrarModal() {
    modalEstadisticas.style.display = 'block';
}

function ocultarModal() {
    modalEstadisticas.style.display = 'none';
}

botonEstadisticas.addEventListener('click', mostrarModal);
cerrarModal.addEventListener('click', ocultarModal);