let deckId = null;
let cartaJugador = null;
let cartaCrupier = null;
let prediccion = null;

const alta = document.getElementById('alta');
const baja = document.getElementById('baja');
const seleccion = document.querySelector('.seleccion');
const cartaCrupierImg = document.querySelector('.cartaCrupier img');
const cartaJugadorImg = document.querySelector('.cartaJugador img');
const modalResultado = document.querySelector('.resultado');
const mensajeResultado = document.getElementById('mensajeResultado');
const cerrarModal = document.querySelector('.resultado button');
const reinicio = document.getElementById('reinicar');

function defValores(valor) {
    if (valor === "ACE") return 1;
    if (valor === "JACK") return 11;
    if (valor === "QUEEN") return 12;
    if (valor === "KING") return 13;
    return parseInt(valor);
}

function llamar(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();
}

function inicio() {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    llamar(url, function (data) {
        deckId = data.deck_id;
        llamar(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`, function (data) {
            cartaCrupier = data.cards[0];
            cartaJugador = data.cards[1];
            cartaCrupierImg.src = './media/prueba.png';
            cartaJugadorImg.src = './media/prueba.png';
        });
    });
}

function elegir(tipo) {
    prediccion = tipo;
    seleccion.style.display = 'none';
    alta.disabled = true;
    baja.disabled = true;
    jugar();
}

function jugar() {
    let valorJugador = defValores(cartaJugador.value);
    let valorCrupier = defValores(cartaCrupier.value);
    cartaCrupierImg.src = cartaCrupier.image;
    cartaJugadorImg.src = cartaJugador.image;

    let resultado = "";
    if (prediccion === "alta" && valorJugador > valorCrupier) {
        resultado = `¡Ganaste! Tu carta (${valorJugador}) es mayor que la del crupier (${valorCrupier})`;
    } else if (prediccion === "baja" && valorJugador < valorCrupier) {
        resultado = `¡Ganaste! Tu carta (${valorJugador}) es menor que la del crupier (${valorCrupier})`;
    } else if (valorJugador === valorCrupier) {
        resultado = `¡Empate! Ambas cartas tienen el mismo valor (${valorJugador})`;
    } else {
        resultado = `Perdiste. Tu carta (${valorJugador}) no cumple con tu predicción contra la del crupier (${valorCrupier})`;
    }

    mensajeResultado.innerText = resultado;
    modalResultado.style.display = "flex";
}

alta.addEventListener('click', () => elegir('alta'));
baja.addEventListener('click', () => elegir('baja'));

cerrarModal.addEventListener('click', () => {
    modalResultado.style.display = 'none';
});

reinicio.addEventListener('click', () => {
    modalResultado.style.display = 'none';
    seleccion.style.display = 'flex';
    alta.disabled = false;
    baja.disabled = false;
    cartaCrupierImg.src = './media/prueba.png';
    cartaJugadorImg.src = './media/prueba.png';
    deckId = null;
    cartaJugador = null;
    cartaCrupier = null;
    prediccion = null;
    inicio();
});

window.addEventListener('load', () => {
    inicio();
});