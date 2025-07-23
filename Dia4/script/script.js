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
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
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
            if (confirmacion == "1"){
                ingredientes.push({
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "precio":precio,
                    "stock":stock,
                });
                alert("El ingrediente fue guardado con exito")
            }else if(confirmacion == "2"){
                alert("Ingrediente no agregado")
            }else{
                alert("Opcion incorrecta,Ingrediente no agregado \nRegresando al menu principal")
            }
        }else if(Popciones == "2"){
            let elimi = prompt("Ingrese el numero del Ingrediente que deseas eliminar");
            ingredientes.splice(elimi-1);
            alert("Ingrediente Eliminado")
        }else if(Popciones == "3"){
            
        }else if(Popciones =="4"){
            let enu = ingredientes.length;
            for(i = 0; i < enu; i ++){
                alert(
                    "Ingrediente N. " + (i + 1) + "\n" +
                    "Nombre: " + ingredientes[i]["nombre"] + "\n" +
                    "Descripcion: " + ingredientes[i]["descripcion"] + "\n" +
                    "Precio: " + ingredientes[i]["precio"] + "\n" +
                    "Stock: " + ingredientes[i]["stock"]
                )}
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

        }
    } else if (opciones == "5"){
        alert("Saliendo del Programa,Aqui estaremos para cualquier solicitud :)");
        booleanito = false;
    }
}

