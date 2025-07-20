let gastos = [];
let cat = ['comida', 'transporte', 'entretenimiento', 'salud', 'ropa', 'tecnologia', 'hogar', 'otros'];
let filtro = 'todos';

function mostrarmenu(id){
    document.getElementById('menu').classList.add('oculto');
    document.getElementById('Registrar').classList.add('oculto');
    document.getElementById('gastos').classList.add('oculto');
    document.getElementById('totales').classList.add('oculto');
    document.getElementById('reportes').classList.add('oculto');

    document.getElementById(id).classList.remove('oculto');
}

function volvermenu(){
    document.getElementById('Registrar').classList.add('oculto');
    document.getElementById('gastos').classList.add('oculto');
    document.getElementById('totales').classList.add('oculto');
    document.getElementById('reportes').classList.add('oculto');
    document.getElementById('menu').classList.remove('oculto');
}