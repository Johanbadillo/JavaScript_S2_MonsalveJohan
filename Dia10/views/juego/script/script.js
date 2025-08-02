let deckId = null;
let cartaJugador = null;
let cartaCrupier = null;
let cartasOcultas = null;
let victorias = 0;
let derrotas = 0;

const alta = document.getElementById('alta');
const baja = document.getElementById('baja');
const btn = document.getElementById('seleccion')

function empezar() {
    btn.style.display = 'none';
}

function empezar() {
    btn.style.display = 'none';
}

alta.addEventListener('click', empezar);
baja.addEventListener('click', empezar);


function defValores(valores) {
    if (valores === "ACE") return 1;
    if (valores === "JACK") return 11;
    if (valores === "QUEEN") return 12;
    if (valores === "KING") return 13;
    return parseInt(valores)
}


function llamar() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const daticos = JSON.parse(xhr.responseText);
            data(daticos);
        }
    };
    xhr.send();
}
function inicio(){
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    console.log(url)
    llamar(url, function(daticos){
        deckId= daticos.deck_Id;
        console.log(daticos);
        console.log(deckId)
    })
}

