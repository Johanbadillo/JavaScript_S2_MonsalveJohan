function Opciones() {
    let opcion = document.getElementById("opcion").value;
    let resultadoDIV = document.getElementById("resultado");

    opcion = Number(opcion);

    let menu = '';
    let claseCSS = '';

    if (opcion == 1) {
        menu = `
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion1';
    } else if (opcion == 2) {
        menu = `
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion2'
    }
    else if (opcion == 3) {
        menu = `
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion3'
    }
    else if (opcion == 4) {
        menu = `
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion4'
    }
    else if (opcion == 5) {
        menu = `
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion5'
    } else if (opcion == 6) {
        menu = `
        <h2>Regresando al menu anterior</h2>
        `;
        claseCSS = 'opcion5'
    }else {
        menu = `
        <ul>
        <h2>Opcion no valida</h2>
        <p>Las opciones disponibles son:</p>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        `;
        claseCSS = 'error'
    }
    resultadoDIV.className = 'resultado';

    resultadoDIV.innerHTML = menu;
    resultadoDIV.classList.add(claseCSS);

    resultadoDIV.style.display = 'flex';

    resultadoDIV.scrollIntoView({ behavior: 'smooth' });

}

document.getElementById('opcion').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        Opciones();
    }
});
