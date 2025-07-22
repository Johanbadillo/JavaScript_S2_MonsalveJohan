// #################################
//            Trabajo
// #################################

let gastos = [
    {
        "montoGasto": 10000,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "compras de supermercado",
        "fecha": "1025-12-01"
    },
    {
        "montoGasto": 5000,
        "cantidad": 5,
        "categoria": "entretenimiento",
        "descripcion": "entradas a parque de diversiones",
        "fecha": "1300-12-31"
    },
    {
        "montoGasto": 100,
        "cantidad": 5,
        "categoria": "comida",
        "descripcion": "medicina b\u00e1sica",
        "fecha": "1500-05-18"
    },
    {
        "montoGasto": 2000,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "mantenimiento de autos",
        "fecha": "1600-05-18"
    },
    {
        "montoGasto": 999,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "productos de despensa",
        "fecha": "1700-12-01"
    },
    {
        "montoGasto": 555,
        "cantidad": 1,
        "categoria": "transporte",
        "descripcion": "gasolina",
        "fecha": "1800-12-31"
    },
    {
        "montoGasto": 8500,
        "cantidad": 2,
        "categoria": "salud",
        "descripcion": "consulta odontol\u00f3gica",
        "fecha": "1900-05-15"
    },
    {
        "montoGasto": 2300,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "almuerzo en restaurante",
        "fecha": "2000-05-17"
    },
    {
        "montoGasto": 12500,
        "cantidad": 1,
        "categoria": "hogar",
        "descripcion": "compra de muebles",
        "fecha": "2025-04-29"
    },
    {
        "montoGasto": 800,
        "cantidad": 1,
        "categoria": "entretenimiento",
        "descripcion": "cine",
        "fecha": "2025-05-10"
    },
    {
        "montoGasto": 120,
        "cantidad": 6,
        "categoria": "comida",
        "descripcion": "pan y otros productos b\u00e1sicos",
        "fecha": "2025-05-12"
    },
    {
        "montoGasto": 4000,
        "cantidad": 2,
        "categoria": "ropa",
        "descripcion": "camisas",
        "fecha": "2025-05-13"
    },
    {
        "montoGasto": 760,
        "cantidad": 1,
        "categoria": "transporte",
        "descripcion": "taxi",
        "fecha": "2025-05-16"
    },
    {
        "montoGasto": 670,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "regalo para cumplea\u00f1os",
        "fecha": "2025-05-14"
    },
    {
        "montoGasto": 250,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "snacks",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 9999,
        "cantidad": 1,
        "categoria": "tecnologia",
        "descripcion": "teclado mec\u00e1nico",
        "fecha": "2025-05-01"
    },
    {
        "montoGasto": 3000,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "cena",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 450,
        "cantidad": 1,
        "categoria": "transporte",
        "descripcion": "viaje en bus",
        "fecha": "2025-05-05"
    },
    {
        "montoGasto": 600,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "desayuno",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 1050,
        "cantidad": 2,
        "categoria": "hogar",
        "descripcion": "decoraci\u00f3n",
        "fecha": "2025-05-04"
    },
    {
        "montoGasto": 100,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "llaves",
        "fecha": "2025-03-21"
    },
    {
        "montoGasto": 1900,
        "cantidad": 3,
        "categoria": "salud",
        "descripcion": "medicinas",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 300,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "jugos",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 2500,
        "cantidad": 1,
        "categoria": "hogar",
        "descripcion": "platos y utensilios",
        "fecha": "2025-05-03"
    },
    {
        "montoGasto": 980,
        "cantidad": 2,
        "categoria": "ropa",
        "descripcion": "zapatos",
        "fecha": "2025-05-18"
    },
    {
        "montoGasto": 710,
        "cantidad": 1,
        "categoria": "transporte",
        "descripcion": "moto",
        "fecha": "2025-05-02"
    },
    {
        "montoGasto": 1100,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "libros de estudio",
        "fecha": "2025-04-28"
    },
    {
        "montoGasto": 100,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "almuerzo r\u00e1pido",
        "fecha": "2025-05-19"
    },
    {
        "montoGasto": 2666,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "compras varias",
        "fecha": "2025-05-19"
    },
    {
        "montoGasto": 50,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "otros art\u00edculos",
        "fecha": "2025-05-20"
    },
    {
        "montoGasto": 1000,
        "cantidad": 1,
        "categoria": "hogar",
        "descripcion": "electrodom\u00e9sticos",
        "fecha": "2025-05-20"
    },
    {
        "montoGasto": 999,
        "cantidad": 1,
        "categoria": "otros",
        "descripcion": "casino",
        "fecha": "2025-05-21"
    },
    {
        "montoGasto": 1000,
        "cantidad": 999,
        "categoria": "salud",
        "descripcion": "medicinas",
        "fecha": "2025-05-21"
    },
    {
        "montoGasto": 12,
        "cantidad": 1,
        "categoria": "comida",
        "descripcion": "sad",
        "fecha": "2025-07-19"
    }
]

let booleanito = true;
while (booleanito == true) {
    let opciones = prompt(
        "===========================================\
    \n                               Simulador de Gasto Diario\
    \n===========================================\
    \nSeleccione una opción:\
    \n\
    \n1. Registrar nuevo gasto\
    \n2. Ver los gastos\
    \n3. Calcular total de gastos\
    \n4. Generar reporte de gastos\
    \n5. Salir\
    \n==========================================="
    );
    if (opciones == "1") {
        let montoGasto = prompt("Ingrese el monto del gasto");
        let cantidad = prompt("Ingrese la cantidad");
        let categoriaNumero = prompt("Ingrese el numero de la categoria\n1. Comida\n2. Transporte\n3. Entretenimiento\n4. Salud\n5. Ropa\n6. Tecnologia\n7. Hogar\n8. Otros");
        let descripcion = prompt("Ingrese una descripcion opcional");
        let fopcion = prompt(
            "Ingrese una opcion numerica\
        \n 1. Ingresar la fecha manualmente\
        \n 2. Ingresar la fecha actual")
        if (fopcion == "1") {
            let fechaopcion = prompt("Ingrese la fecha que deseas registrar el gasto en formato YYYY-MM-DD");
            fecha = fechaopcion
        } else if (fopcion == "2") {
            const fechaopcion = new Date().toISOString().split('T')[0];
            fecha = fechaopcion
        }
        let confirmacion = prompt("Seguro que quieres agregar este gasto? \n1. Si \n2. No\n");
        const categorias = {
            "1": "comida",
            "2": "transporte",
            "3": "entretenimiento",
            "4": "salud",
            "5": "ropa",
            "6": "tecnologia",
            "7": "hogar",
            "8": "otros"
        }
        let categoria = categorias[categoriaNumero];


        if (confirmacion == "1") {
            gastos.push({
                "montoGasto": Number(montoGasto),
                "cantidad": Number(cantidad),
                "categoria": categoria,
                "descripcion": descripcion,
                "fecha": fecha,
            });
            alert("El gasto fue guardado exitosamente")
        }
        else {
            alert("No se guardo el gasto");
        }
    }
    else if (opciones == "2") {
        let vopciones = prompt(
            "===========================================\
        \n                               Listar Gastos\
        \n===========================================\
        \nSeleccione una opción para filtrar los gastos:\
        \n\
        \n1. Ver todos los gastos\
        \n2. Filtrar por categoría\
        \n3. Filtrar por rango de fechas\
        \n4. Regresar al menú principal\
        \n==========================================="
        );
        if (vopciones == "1") {
            let enu = gastos.length;
            for (i = 0; i < enu; i++) {
                alert(
                    "Gasto N. " + (i + 1) + "\n" +
                    "Monto: " + gastos[i]["montoGasto"] + "\n" +
                    "Cantidad: " + gastos[i]["cantidad"] + "\n" +
                    "Categoria: " + gastos[i]["categoria"] + "\n" +
                    "Descripcion: " + gastos[i]["descripcion"] + "\n" +
                    "Fecha: " + gastos[i]["fecha"]
                )
            };
        } else if (vopciones == "2") {
            let fcategoria = prompt("Ingrese el numero de la categoria\n1. Comida\n2. Transporte\n3. Entretenimiento\n4. Salud\n5. Ropa\n6. Tecnologia\n7. Hogar\n8. Otros");
            const categorias = {
                "1": "comida",
                "2": "transporte",
                "3": "entretenimiento",
                "4": "salud",
                "5": "ropa",
                "6": "tecnologia",
                "7": "hogar",
                "8": "otros"
            }
            let categorianombre = categorias[fcategoria];
            let encontrados = gastos.filter(g => g.categoria === categorianombre);
            if (encontrados.length == 0) {
                alert("No hay gastos registrados en esa categoria.");
            } else {
                enu = encontrados.length
                for (i = 0; i < enu; i++) {
                    alert(
                        "Gasto N. " + (i + 1) + "\n" +
                        "Monto: " + encontrados[i]["montoGasto"] + "\n" +
                        "Cantidad: " + encontrados[i]["cantidad"] + "\n" +
                        "Categoria: " + encontrados[i]["categoria"] + "\n" +
                        "Descripcion: " + encontrados[i]["descripcion"] + "\n" +
                        "Fecha: " + encontrados[i]["fecha"]
                    )
                };
            }
        }else if (vopciones == "3"){
            let ffecha = prompt("Ingrese la fecha de la cual quieres ver los gastos (YYYY-MM-DD): ");
            let encontrados = gastos.filter(g => g.fecha == ffecha);
            if (encontrados.length == 0) {
                alert("No hay gastos registrados en este dia.");
            } else {
                enu = encontrados.length
                for (i = 0; i < enu; i++) {
                    alert(
                        "Gasto N. " + (i + 1) + "\n" +
                        "Monto: " + encontrados[i]["montoGasto"] + "\n" +
                        "Cantidad: " + encontrados[i]["cantidad"] + "\n" +
                        "Categoria: " + encontrados[i]["categoria"] + "\n" +
                        "Descripcion: " + encontrados[i]["descripcion"] + "\n" +
                        "Fecha: " + encontrados[i]["fecha"]
                    )
                };
            }
        }
    } else if (opciones == "3") {
        let totalGastos = 0;
        let categorias = {
            comida: 0,
            transporte: 0,
            entretenimiento: 0,
            salud: 0,
            ropa: 0,
            tecnologia: 0,
            hogar: 0,
            otros: 0
        };
        for (i = 0; i < gastos.length; i++) {
            totalGastos += Number(gastos[i].montoGasto);
            let cat = gastos[i].categoria;
            if (cat === "comida") categorias.comida += Number(gastos[i].montoGasto);
            else if (cat == "transporte") categorias.transporte += Number(gastos[i].montoGasto);
            else if (cat == "entretenimiento") categorias.entretenimiento += Number(gastos[i].montoGasto);
            else if (cat == "salud") categorias.salud += Number(gastos[i].montoGasto);
            else if (cat == "ropa") categorias.ropa += Number(gastos[i].montoGasto);
            else if (cat == "tecnologia") categorias.tecnologia += Number(gastos[i].montoGasto);
            else if (cat == "hogar") categorias.hogar += Number(gastos[i].montoGasto);
            else if (cat == "otros") categorias.otros += Number(gastos[i].montoGasto);
        }

        let mensaje = "Total de gastos: " + totalGastos + "\n\n";
        mensaje += "Gasto por categoria:\n";
        mensaje += "Comida: " + categorias.comida + "\n";
        mensaje += "Transporte: " + categorias.transporte + "\n";
        mensaje += "Entretenimiento: " + categorias.entretenimiento + "\n";
        mensaje += "Salud: " + categorias.salud + "\n";
        mensaje += "Ropa: " + categorias.ropa + "\n";
        mensaje += "Tecnologia: " + categorias.tecnologia + "\n";
        mensaje += "Hogar: " + categorias.hogar + "\n";
        mensaje += "Otros: " + categorias.otros + "\n";
        alert(mensaje);


    } else if (opciones == "4") {
        let totalGastos = 0;
        let categorias = {
            comida: 0,
            transporte: 0,
            entretenimiento: 0,
            salud: 0,
            ropa: 0,
            tecnologia: 0,
            hogar: 0,
            otros: 0
        };
        for (i = 0; i < gastos.length; i++) {
            totalGastos += Number(gastos[i].montoGasto);
            let cat = gastos[i].categoria;
            if (cat === "comida") categorias.comida += Number(gastos[i].montoGasto);
            else if (cat == "transporte") categorias.transporte += Number(gastos[i].montoGasto);
            else if (cat == "entretenimiento") categorias.entretenimiento += Number(gastos[i].montoGasto);
            else if (cat == "salud") categorias.salud += Number(gastos[i].montoGasto);
            else if (cat == "ropa") categorias.ropa += Number(gastos[i].montoGasto);
            else if (cat == "tecnologia") categorias.tecnologia += Number(gastos[i].montoGasto);
            else if (cat == "hogar") categorias.hogar += Number(gastos[i].montoGasto);
            else if (cat == "otros") categorias.otros += Number(gastos[i].montoGasto);
        };

        let mensaje = "Reporte de tus gastos en todas las categorias \n"
        mensaje += "Total de gastos: " + totalGastos + "\n\n";
        mensaje += "Gasto por categoria:\n";
        mensaje += "Comida: " + categorias.comida + "\n";
        mensaje += "Transporte: " + categorias.transporte + "\n";
        mensaje += "Entretenimiento: " + categorias.entretenimiento + "\n";
        mensaje += "Salud: " + categorias.salud + "\n";
        mensaje += "Ropa: " + categorias.ropa + "\n";
        mensaje += "Tecnologia: " + categorias.tecnologia + "\n";
        mensaje += "Hogar: " + categorias.hogar + "\n";
        mensaje += "Otros: " + categorias.otros + "\n";
        mensaje += "Es el reporte de tus gasto :)";
        alert(mensaje);
    }

    else if (opciones == "5") {
        alert(
            "Gracias por usar nuestro Programa"
        );
        booleanito = false;
    }

}


// Creado por Johan Styben Monsalve Badillo C.C - 1097911956