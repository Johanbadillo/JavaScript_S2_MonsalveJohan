let ingredientes = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];

let categorias = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

let hamgur = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": "pan",
        "precio": 10,
        "chef": "ChefA"
    }
];

let chefs = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];


let booleanito = true
while (booleanito == true) {
    let opciones = prompt(
        "===========================================\
    \n                               Hamburguesería\
    \n===========================================\
    \nSeleccione una opción:\
    \n\
    \n1. Ingresar al menu de Ingredientes\
    \n2. Ingresar al menu de Categorias\
    \n3. Ingresar al menu de Hamburguesas\
    \n4. Ingresar al menu de Chefs\
    \n5. Salir\
    \n==========================================="
    );
    if (opciones == "1") {
        let Popciones = prompt(
            "===========================================\
        \n                               Menu Ingredientes\
        \n===========================================\
        \nSeleccione una opción:\
        \n\
        \n1. Añadir nuevo Ingrediente\
        \n2. Eliminar Ingrediente\
        \n3. Actualizar Ingrediente\
        \n4. Ver ingredientes\
        \n5. Salir\
        \n==========================================="
        )
        if (Popciones == "1") {
            let nombre = prompt("Ingrese el nombre del nuevo Ingrediente");
            let descripcion = prompt("Ingrese la Descripcion del Ingrediente(Opcional,Dale enter para continuar");
            let precio = prompt("Ingrese el Precio del Ingrediente");
            let stock = prompt("Ingrese la cantidad de stock que cuenta el Ingrediente");
            let confirmacion = prompt("Seguro que quieres agregar este Ingrediente? \n1. Si \n2. No\n");
            if (confirmacion == "1") {
                ingredientes.push({
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "precio": precio,
                    "stock": stock,
                });
                alert("El ingrediente fue guardado con exito")
            } else if (confirmacion == "2") {
                alert("Ingrediente no agregado")
            } else {
                alert("Opcion incorrecta,Ingrediente no agregado \nRegresando al menu principal")
            }
        } else if (Popciones == "2") {
            let elimi = prompt("Ingrese el numero del Ingrediente que deseas eliminar");
            ingredientes.splice(elimi - 1);
            alert("Ingrediente Eliminado")
        } else if (Popciones == "3") {
            let cambio = prompt("Ingrese el numero del ingrediente que quieres actualizar")
            let Nnombre = prompt("Ingrese el nombre del Ingrediente");
            let Ndescripcion = prompt("Ingrese la Descripcion del Ingrediente(Opcional,Dale enter para continuar");
            let Nprecio = prompt("Ingrese el Precio del Ingrediente");
            let Nstock = prompt("Ingrese la cantidad de stock que cuenta el Ingrediente");
            ingredientes[cambio - 1]["nombre"] = Nnombre;
            ingredientes[cambio - 1]["descripcion"] = Ndescripcion;
            ingredientes[cambio - 1]["precio"] = Nprecio;
            ingredientes[cambio - 1]["stock"] = Nstock;
            alert("Ingrediente Actualizado")
        } else if (Popciones == "4") {
            let enu = ingredientes.length;
            for (i = 0; i < enu; i++) {
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )
            }
        } else {
            alert("Regresando al menu principal(Dar Enter para continuar):")
        }
    } else if (opciones == "2") {
        let Popciones = prompt(
            "===========================================\
        \n                               Menu Categorias\
        \n===========================================\
        \nSeleccione una opción:\
        \n\
        \n1. Añadir nueva Categoria\
        \n2. Eliminar Categoria\
        \n3. Actualizar Categoria\
        \n4. Ver Categoria\
        \n5. Salir\
        \n==========================================="
        );
        if (Popciones == "1") {
            let nombre = prompt("Ingrese el nombre de la nueva categoria");
            let descripcion = prompt("Ingrese la Descripcion de la categoria");
            let confirmacion = prompt("Seguro que quieres agregar esta Categoria? \n1. Si \n2. No\n");
            if (confirmacion == "1") {
                categorias.push({
                    "nombre": nombre,
                    "descripcion": descripcion,
                });
                alert("La Categoria fue guardado con exito")
            } else if (confirmacion == "2") {
                alert("Categoria no agregado")
            } else {
                alert("Opcion incorrecta,Categoria no agregado \nRegresando al menu principal")
            }
        } else if (Popciones == "2") {
            let elimi = prompt("Ingrese el numero de la Categoria que deseas eliminar");
            categorias.splice(elimi - 1);
            alert("Categoria Eliminada\nSi no deseas eliminar nada darle Enter")
        } else if (Popciones == "3") {
            let cambio = prompt("Ingrese el numero de la categoria que quieres actualizar")
            let Nnombre = prompt("Ingrese el nombre de la categoria");
            let Ndescripcion = prompt("Ingrese la Descripcion del Ingrediente(Opcional,Dale enter para continuar");
            categorias[cambio - 1]["nombre"] = Nnombre;
            categorias[cambio - 1]["descripcion"] = Ndescripcion;
            alert("Categoria Actualizado")
        } else if (Popciones == "4") {
            let enu = categorias.length;
            for (i = 0; i < enu; i++) {
                alert(
                    "Categoria N. " + (i + 1) + "\n" +
                    "Nombre: " + categorias[i]["nombre"] + "\n" +
                    "Descripcion: " + categorias[i]["descripcion"]
                )
            }
        } else {
            alert("Regresando al menu principal(Dar Enter para continuar):")
        }
    } else if (opciones == "3") {
        let Popciones = prompt(
            "===========================================\
        \n                               Menu Hamburguesas\
        \n===========================================\
        \nSeleccione una opción:\
        \n\
        \n1. Añadir nueva Hamburguesa\
        \n2. Eliminar Hamburguesa\
        \n3. Actualizar Hamburguesa\
        \n4. Ver Hamburguesas\
        \n5. Salir\
        \n==========================================="
        );
        if (Popciones == "1") {
            let nombre = prompt("Ingrese el nombre de la nueva Hamburguesa");
            let categoria = prompt("Ingrese la categoria de la hamburguesa");
            let ingredientes = prompt("Ingrese los ingredientes  de la hamburguesa(todos)");
            let precio = prompt("Ingrese el precio de la hamburguesa");
            let chef = prompt("Ingrese el chef de la hamburguesa")
            let confirmacion = prompt("Seguro que quieres agregar esta Hamburguesa? \n1. Si \n2. No\n");
            if (confirmacion == "1") {
                hamgur.push({
                    "nombre": nombre,
                    "categoria": categoria,
                    "ingredientes": ingredientes,
                    "precio": precio,
                    "chef": chef,
                });
                alert("La hamburguesa fue guardado con exito")
            } else if (confirmacion == "2") {
                alert("Hamburguesa no agregado")
            } else {
                alert("Opcion incorrecta,Hamburguesa no agregada\nRegresando al menu principal")
            }
        } else if (Popciones == "2") {
            let elimi = prompt("Ingrese el numero de la hamburguesa que deseas eliminar");
            hamgur.splice(elimi - 1);
            alert("Hamburguesa Eliminada")
        } else if (Popciones == "3") {
            let cambio = prompt("Ingrese el numero de la hamburguesa que quieres actualizar")
            let Nnombre = prompt("Ingrese el nombre de la Hamburguesa");
            let Ncategoria = prompt("Ingrese la categoria de la hamburguesa");
            let Ningredientes = prompt("Ingrese los ingredientes  de la hamburguesa(todos)");
            let Nprecio = prompt("Ingrese el precio de la hamburguesa");
            let Nchef = prompt("Ingrese el chef de la hamburguesa")
            hamgur[cambio - 1]["nombre"] = Nnombre;
            hamgur[cambio - 1]["descripcion"] = Ncategoria
            hamgur[cambio - 1]["ingredientes"] = Ningredientes
            hamgur[cambio - 1]["precio"] = Nprecio
            hamgur[cambio - 1]["chef"] = Nchef
            alert("Hamburguesa Actualizado")
        } else if (Popciones == "4") {
            let enu = hamgur.length;
            for (i = 0; i < enu; i++) {
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + hamgur[i]["nombre"] + "\n" +
                    "Categorias: " + hamgur[i]["categorias"] + "\n" +
                    "Ingredientes: " + hamgur[i]["ingredientes"] + "\n" +
                    "Precio: " + hamgur[i]["precio"] + "\n" +
                    "chef: " + hamgur[i]["chef"]
                )
            }
        } else {
            alert("Regresando al menu principal(Dar Enter para continuar):")
        }
    } else if (opciones == "4") {
        let Popciones = prompt(
            "===========================================\
        \n                               Menu Chefs\
        \n===========================================\
        \nSeleccione una opción:\
        \n\
        \n1. Añadir nuevo Chef\
        \n2. Eliminar Chef\
        \n3. Actualizar Chef\
        \n4. Ver Chefs\
        \n5. Salir\
        \n==========================================="
        );
        if (Popciones == "1") {
            let nombre = prompt("Ingrese el nombre del nuevo Chef");
            let especialidad = prompt("Ingrese la especialidad del chef");
            let confirmacion = prompt("Seguro que quieres agregar este Chef? \n1. Si \n2. No\n");
            if (confirmacion == "1") {
                chefs.push({
                    "nombre": nombre,
                    "especialidad": especialidad,
                });
                alert("El Chef fue guardado con exito")
            } else if (confirmacion == "2") {
                alert("Chef no agregado")
            } else {
                alert("Opcion incorrecta,Chef no agregado \nRegresando al menu principal")
            }
        } else if (Popciones == "2") {
            let elimi = prompt("Ingrese el numero del chef que deseas eliminar");
            chefs.splice(elimi - 1);
            alert("Chef Eliminado")
        } else if (Popciones == "3") {
            let cambio = prompt("Ingrese el numero del chef que quieres actualizar")
            let Nnombre = prompt("Ingrese el nombre del chef");
            let Nespecialidad = prompt("Ingrese la especialidad del chef");
            chefs[cambio - 1]["nombre"] = Nnombre;
            chefs[cambio - 1]["descripcion"] = Nespecialidad;
            alert("Chef Actualizado")
        } else if (Popciones == "4") {
            let enu = chefs.length;
            for (i = 0; i < enu; i++) {
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + chefs[i]["nombre"] + "\n" +
                    "Especialidad: " + chefs[i]["especialidad"]
                )
            }
        } else {
            alert("Regresando al menu principal(Dar Enter para continuar):")
        }
    } else if (opciones == "5") {
        alert("Saliendo del Programa,Aqui estaremos para cualquier solicitud :)");
        booleanito = false;
    } else {
        alert("Opcion invalida\nIngrese una opcion numerica correcta")
    }
}

