const menuPrincipal=`
        <h1>Opciones Disponibles</h1>
        <ul>
            <li><strong>1.</strong> Registrar dato nuevo</li>
            <li><strong>2.</strong> Leer datos registrado</li>
            <li><strong>3.</strong> Leer un dato en especifico</li>
            <li><strong>4.</strong> Actualizar dato </li>
            <li><strong>5.</strong> Eliminar dato registrad</li>
            <li><strong>6.</strong> Regresar al menu principal</li>
        </ul>
        `;

function opciones() {
    let opcion = document.getElementById("opcion").value;
    let resultadoDIV = document.getElementById("resultado");
    let menuPrincipal = document.querySelector(".menuPrincipal");

    opcion = Number(opcion);

    let menu = '';
    let claseCSS = '';

    resultadoDIV.innerHTML='';
    resultadoDIV.className='';
    resultadoDIV.style.display='none';

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
        menuPrincipal.innerHTML = menu;
        menuPrincipal.classList.remove('opcion2', 'opcion3', 'opcion4', 'opcion5', 'opcion6', 'error');
        menuPrincipal.classList.add(claseCSS);
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
        claseCSS = 'opcion2'
        menuPrincipal.innerHTML = menu;
        menuPrincipal.classList.remove('opcion1', 'opcion3', 'opcion4', 'opcion5', 'opcion6', 'error');
        menuPrincipal.classList.add(claseCSS);
    }
    else if (opcion == 3) {
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
        claseCSS = 'opcion3'
        menuPrincipal.innerHTML = menu;
        menuPrincipal.classList.remove('opcion2', 'opcion1', 'opcion4', 'opcion5', 'opcion6', 'error');
        menuPrincipal.classList.add(claseCSS);
    }
    else if (opcion == 4) {
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
        claseCSS = 'opcion4'
        menuPrincipal.innerHTML = menu;
        menuPrincipal.classList.remove('opcion2', 'opcion3', 'opcion1', 'opcion5', 'opcion6', 'error');
        menuPrincipal.classList.add(claseCSS);
    }
    else if (opcion == 5) {
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
        claseCSS = 'opcion5'
        menuPrincipal.innerHTML = menu;
        menuPrincipal.classList.remove('opcion2', 'opcion3', 'opcion4', 'opcion1', 'opcion6', 'error');
        menuPrincipal.classList.add(claseCSS);
    } else if (opcion == 6) {
        menuPrincipal.innerHTML = menuPrincipal;
        claseCSS = 'menuPrincipal'
        menuPrincipal.classList.remove('opcion2', 'opcion3', 'opcion4', 'opcion5', 'opcion1','opcion6', 'error');
        resultadoDIV.innerHTML=menuPrincipal
    }else {
        menu = `<h2>Opción no válida</h2>
        <p>Por favor, seleccione una opción entre 1 y 6.</p>`;
        claseCSS = 'error';
        resultadoDIV.innerHTML = menu;
        resultadoDIV.classList.add(claseCSS);
        resultadoDIV.style.display = 'flex';;
        claseCSS = 'error'
    }

}

document.getElementById('opcion').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        opciones();
    }
});
