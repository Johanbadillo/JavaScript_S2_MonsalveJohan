const menuPrincipal = `
        <h1>Opciones Disponibles</h1>
        <ul>
            <li><strong>1.</strong> Registro y Gestión de Ingredientes</li>
            <li><strong>2.</strong> Seguimiento del Historial de Ingredientes</li>
            <li><strong>3.</strong> Registro y Gestión de Categorías</li>
            <li><strong>4.</strong> Registro y Gestión de Chef </li>
            <li><strong>5.</strong> Registro y Gestión de Hamburguesas</li>
            <li><strong>6.</strong> Salir del programa</li>
        </ul>
`;

function Opciones() {
    let opcion = document.getElementById("opcion").value;
    let resultadoDIV = document.getElementById("resultado");
    let menuPrincipalDIV = document.querySelector(".menuPrincipal");

    opcion = Number(opcion);

    let menu = '';
    let claseCSS = '';

    resultadoDIV.innerHTML = '';
    resultadoDIV.className = '';
    resultadoDIV.style.display = 'none';

    if (opcion == 1) {
        menu = `
        <h1>Menu Ingredientes</h1>
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
        menuPrincipalDIV.innerHTML = menu;
        menuPrincipalDIV.classList.remove('opcion2', 'opcion3', 'opcion4', 'opcion5', 'error');
        menuPrincipalDIV.classList.add(claseCSS);
    } else if (opcion == 2) {
        menu = `
        <h1>Historial Ingredientes</h1>
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion2';
        menuPrincipalDIV.innerHTML = menu;
        menuPrincipalDIV.classList.remove('opcion1', 'opcion3', 'opcion4', 'opcion5', 'error');
        menuPrincipalDIV.classList.add(claseCSS);
    } else if (opcion == 3) {
        menu = `
        <h1>Menu Categorias</h1>
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion3';
        menuPrincipalDIV.innerHTML = menu;
        menuPrincipalDIV.classList.remove('opcion1', 'opcion2', 'opcion4', 'opcion5', 'error');
        menuPrincipalDIV.classList.add(claseCSS);
    } else if (opcion == 4) {
        menu = `
        <h1>Menu Chefs</h1>
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion4';
        menuPrincipalDIV.innerHTML = menu;
        menuPrincipalDIV.classList.remove('opcion1', 'opcion2', 'opcion3', 'opcion5', 'error');
        menuPrincipalDIV.classList.add(claseCSS);
    } else if (opcion == 5) {
        menu = `
        <h1>Menu Hamburguesas</h1>
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;
        claseCSS = 'opcion5';
        menuPrincipalDIV.innerHTML = menu;
        menuPrincipalDIV.classList.remove('opcion1', 'opcion2', 'opcion3', 'opcion4', 'error');
        menuPrincipalDIV.classList.add(claseCSS);
    } else if (opcion == 6) {
        resultadoDIV.innerHTML = '<h2>Regresando al menú principal...</h2>';
        resultadoDIV.style.display = 'flex';
        setTimeout(() => {
            menuPrincipalDIV.innerHTML = menuPrincipal;
            menuPrincipalDIV.classList.remove('opcion1', 'opcion2', 'opcion3', 'opcion4', 'opcion5', 'error');
            resultadoDIV.style.display = 'none';
        }, 3000);
    } else {
        menu = `<h2>Opción no válida</h2>
        <p>Por favor, seleccione una opción entre 1 y 6.</p>`;
        claseCSS = 'error';
        resultadoDIV.innerHTML = menu;
        resultadoDIV.classList.add(claseCSS);
        resultadoDIV.style.display = 'flex';
    }
}

document.getElementById('opcion').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        Opciones();
    }
});