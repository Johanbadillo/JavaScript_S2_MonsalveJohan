const alta = document.getElementById('alta');
const baja = document.getElementById('baja');
const btn = document.getElementById('seleccion')

function empezar(){
    btn.style.display = 'none';
}

function empezar(){
    btn.style.display = 'none';
}

alta.addEventListener('click',empezar);
baja.addEventListener('click',empezar);


let deckId= null;
let cartaJugador = null;
let cartaCrupier = null;

function defValores(valores){
    if(valores === "ACE") return 1;
    if(valores === "JACK") return 11;
    if(valores === "QUEEN") return 12;
    if(valores === "KING") return 13;
    return parseInt(valores)
}
