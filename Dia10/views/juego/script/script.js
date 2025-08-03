let deckId = null;
let cartaJugador = null;
let cartaCrupier = null;
let cartasOcultas = null;
let prediccion = null;
let victorias = 0;
let derrotas = 0;

const alta = document.getElementById('alta');
const baja = document.getElementById('baja');
const seleccion = document.getElementById('seleccion');
const cartaCrupierImg = document.getElementById('cartaCrupier');
const cartaJugadorImg = document.getElementById('cartaJugador');
const modalResultado = document.getElementById('modalResultado');
const mensajeResultado = document.getElementById('mensajeResultado');
const cerrarModal = document.querySelector('.cerrar');
const reinicio = document.getElementById('reinicio');
const volverMenu = document.getElementById('volverMenu');

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
        llamar(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`, function (data) {
            cartaCrupier = data.cards[0];
            cartaJugador = data.cards[1];
            cartasOcultas = data.cards.slice(2, 6);
            cartaJugadorImg.src = cartaJugador.image;
            cartaCrupierImg.src = './media/prueba.png';
            for (let i = 0; i < cartasOcultas.length; i++) {
                document.getElementById(`carta${i + 1}`).src = './media/prueba.png';
            }
        });
    });
}

function elegir(tipo) {
    prediccion = tipo;
    seleccion.style.display = 'none';
    alta.disabled = true;
    baja.disabled = true;
    inicio();
}

function jugar(carta, indice) {
    let valorJugador = defValores(carta.value);
    let valorCrupier = defValores(cartaCrupier.value);
    if (indice >= 0) {
        document.getElementById(`carta${indice + 1}`).src = carta.image;
    }
    cartaCrupierImg.src = cartaCrupier.image;
    let resultado = "";
    if (prediccion === "alta" && valorJugador > valorCrupier) {
        resultado = `¡Ganaste! Tu carta (${valorJugador}) es mayor que la del crupier (${valorCrupier})`;
        victorias++;
    } else if (prediccion === "baja" && valorJugador < valorCrupier) {
        resultado = `¡Ganaste! Tu carta (${valorJugador}) es menor que la del crupier (${valorCrupier})`;
        victorias++;
    } else {
        resultado = `Perdiste. Tu carta (${valorJugador}) no cumple con tu predicción contra la del crupier (${valorCrupier})`;
        derrotas++;
    }
    mensajeResultado.innerText = resultado;
    modalResultado.style.display = "block";
}

alta.addEventListener('click', () => elegir('alta'));
baja.addEventListener('click', () => elegir('baja'));

cartaJugadorImg.addEventListener('click', () => jugar(cartaJugador, -1));
for (let i = 0; i < 4; i++) {
    document.getElementById(`carta${i + 1}`).addEventListener('click', () => {
        jugar(cartasOcultas[i], i);
    });
}


reinicio.addEventListener('click', () => {
    modalResultado.style.display = 'none';
    seleccion.style.display = 'flex';
    alta.disabled = false;
    baja.disabled = false;
    cartaCrupierImg.src = './media/prueba.png';
    cartaJugadorImg.src = './media/prueba.png';
    for (let i = 0; i < 4; i++) {
        document.getElementById(`carta${i + 1}`).src = './media/prueba.png';
    }
    deckId = null;
    cartaJugador = null;
    cartaCrupier = null;
    cartasOcultas = null;
    prediccion = null;
});

volverMenu.addEventListener('click', () => {
    window.location.href = './../../index.html';
});