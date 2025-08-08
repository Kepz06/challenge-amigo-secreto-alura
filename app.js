let amigos = []


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    amigos.push(nombre);
    limpiarCaja();
    console.log(amigos);
    agregarNombreLista();
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


function agregarNombreLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let nombreSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nombreSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}

