booleanito=true;

function mensaje(){
    let menuInicial="=======================================\
    \n1. Registro y Gestión de Ingredientes\
    \n2. Seguimiento del Historial de Ingredientes\
    \n3. Registro y Gestión de Categorías\
    \n4. Registro y Gestión de Chef\
    \n5. Registro y Gestión de Hamburguesas\
    \n6. Salir del programa\
    \n======================================="
    return menuInicial
}

console.log(mensaje());

opcion=prompt("ingrese el numero que quieras");
console.log(opcion);