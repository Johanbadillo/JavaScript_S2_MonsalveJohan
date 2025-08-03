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
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const daticos = JSON.parse(xhr.responseText);
            cartas(daticos);
        }
    };
    xhr.send();
}

function inicio() {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    console.log(url)
    llamar(url, function (daticos) {
        deckId = daticos.deck_Id;
        console.log(daticos);
        console.log(deckId);

        llamar("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=6", function (data) {
            cartaCrupier = data.cards[0];
            cartaJugador = data.cards[1];
            cartasOcultas = data.cards.slice(2, 6);
        })
    })
}

function elegir(tipo) {
    apuesta = tipo;
    document.getElementById("cartaJugador").scr = cartaJugador.image;
    document.getElementById("alta"), disabled = true;
    document.getElementById("baja"), disabled = true;
}

function jugar(carta, indice) {
    let valorJugador = defValores(carta.value);
    let valorCrupier = defValores(cartaCrupier.value);
    document.getElementById("cartaCrupier").scr = cartaCrupier.image;
    if (indice >= 0) {
        document.getElementById("cartaMesa" + (indice + 1)).src = carta.image;
    }
    let resultado = "";
    if (prediccion === "alta" && valorJugador > valorCrupier) {
        resultado = "¡Ganaste! Tu carta (" + valorJugador + ") es mayor que la del crupier (" + valorCrupier + ")";
    } else if (prediccion === "baja" && valorJugador < valorCrupier) {
        resultado = "¡Ganaste! Tu carta (" + valorJugador + ") es menor que la del crupier (" + valorCrupier + ")";
    } else {
        resultado = "Perdiste. Tu carta (" + valorJugador + ") no cumple con tu predicción contra la del crupier (" + valorCrupier + ")";
    }
    document.getElementById("resultado").innerText = resultado;
}

document.getElementById("jugarAlta").addEventListener("click", function () {
    elegirPrediccion("alta");
});
document.getElementById("jugarBaja").addEventListener("click", function () {
    elegirPrediccion("baja");
});
document.getElementById("cartaJugador").addEventListener("click", function () {
    jugarCarta(cartaJugador, -1);
});
document.getElementById("cartaMesa1").addEventListener("click", function () {
    jugarCarta(cartasMesa[0], 0);
});
document.getElementById("cartaMesa2").addEventListener("click", function () {
    jugarCarta(cartasMesa[1], 1);
});
document.getElementById("cartaMesa3").addEventListener("click", function () {
    jugarCarta(cartasMesa[2], 2);
});
document.getElementById("cartaMesa4").addEventListener("click", function () {
    jugarCarta(cartasMesa[3], 3);
});