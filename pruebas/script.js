// 1. TOMAR TEXTO
function tomarTexto() {
    let nombre = document.getElementById('nombre').value;

    if (nombre === '') {
        alert('Por favor escribe un nombre');
        return;
    }

    document.getElementById('resultado-texto').innerHTML =
        `<strong>Variable creada:</strong> nombre = "${nombre}"<br>
        <strong>Tipo:</strong> ${typeof nombre}<br>
        <strong>Longitud:</strong> ${nombre.length} caracteres`;
    document.getElementById('resultado-texto').style.display = 'block';
}

// 2. TOMAR NÚMERO
function tomarNumero() {
    let edad = document.getElementById('edad').value;

    if (edad === '') {
        alert('Por favor ingresa una edad');
        return;
    }

    // Convertir a número
    let edadNum = parseInt(edad);

    document.getElementById('resultado-numero').innerHTML =
        `<strong>Variable creada:</strong> edad = ${edadNum}<br>
        <strong>Tipo:</strong> ${typeof edadNum}<br>
        <strong>Es mayor de edad:</strong> ${edadNum >= 18 ? 'Sí' : 'No'}`;
    document.getElementById('resultado-numero').style.display = 'block';
}

// 3. TOMAR SELECT
function tomarOpcion() {
    let ciudad = document.getElementById('ciudad').value;
    let textoOpcion = document.getElementById('ciudad').options[document.getElementById('ciudad').selectedIndex].text;

    if (ciudad === '') {
        alert('Por favor selecciona una ciudad');
        return;
    }

    document.getElementById('resultado-select').innerHTML =
        `<strong>Valor seleccionado:</strong> "${ciudad}"<br>
        <strong>Texto visible:</strong> "${textoOpcion}"<br>
        <strong>Tipo:</strong> ${typeof ciudad}`;
    document.getElementById('resultado-select').style.display = 'block';
}

// 4. TOMAR RADIO
function tomarRadio() {
    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    if (!generoSeleccionado) {
        alert('Por favor selecciona una opción');
        return;
    }

    let genero = generoSeleccionado.value;

    document.getElementById('resultado-radio').innerHTML =
        `<strong>Variable creada:</strong> genero = "${genero}"<br>
        <strong>Tipo:</strong> ${typeof genero}`;
    document.getElementById('resultado-radio').style.display = 'block';
}

// 5. TOMAR CHECKBOX
function tomarCheckbox() {
    let deportes = [];
    let checks = document.querySelectorAll('input[name="deportes"]:checked');

    checks.forEach(check => deportes.push(check.value));

    if (deportes.length === 0) {
        alert('Por favor selecciona al menos un deporte');
        return;
    }

    document.getElementById('resultado-checkbox').innerHTML =
        `<strong>Variable creada:</strong> deportes = [${deportes.map(d => `"${d}"`).join(', ')}]<br>
        <strong>Tipo:</strong> ${typeof deportes} (Array)<br>
        <strong>Cantidad seleccionada:</strong> ${deportes.length}`;
    document.getElementById('resultado-checkbox').style.display = 'block';
}

// 6. TOMAR TEXTAREA
function tomarTexarea() {
    let comentario = document.getElementById('comentario').value;

    if (comentario.trim() === '') {
        alert('Por favor escribe un comentario');
        return;
    }

    document.getElementById('resultado-textarea').innerHTML =
        `<strong>Variable creada:</strong> comentario = "${comentario.substring(0, 50)}${comentario.length > 50 ? '...' : ''}"<br>
        <strong>Tipo:</strong> ${typeof comentario}<br>
        <strong>Palabras:</strong> ${comentario.split(' ').length}`;
    document.getElementById('resultado-textarea').style.display = 'block';
}

// 7. EJEMPLO COMPLETO
function crearProducto() {
    // Tomar todos los valores
    let nombre = document.getElementById('prod-nombre').value;
    let precio = document.getElementById('prod-precio').value;
    let categoria = document.getElementById('prod-categoria').value;
    let disponible = document.getElementById('prod-disponible').checked;

    // Validaciones
    if (nombre === '') {
        alert('El nombre es obligatorio');
        return;
    }
    if (precio === '') {
        alert('El precio es obligatorio');
        return;
    }
    if (categoria === '') {
        alert('La categoría es obligatoria');
        return;
    }

    // Crear objeto producto
    let producto = {
        nombre: nombre,
        precio: parseInt(precio),
        categoria: categoria,
        disponible: disponible
    };

    // Mostrar resultado
    document.getElementById('resultado-completo').innerHTML =
        `<strong>🎉 Producto creado exitosamente!</strong><br>
        <strong>Nombre:</strong> ${producto.nombre}<br>
        <strong>Precio:</strong> $${producto.precio}<br>
        <strong>Categoría:</strong> ${producto.categoria}<br>
        <strong>Disponible:</strong> ${producto.disponible ? 'Sí' : 'No'}<br>
        <strong>Objeto completo:</strong> ${JSON.stringify(producto, null, 2)}`;
    document.getElementById('resultado-completo').style.display = 'block';

    // Limpiar formulario
    document.getElementById('prod-nombre').value = '';
    document.getElementById('prod-precio').value = '';
    document.getElementById('prod-categoria').value = '';
    document.getElementById('prod-disponible').checked = false;
}