let amigos = [];

function listarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        input.value = '';
        listarAmigos();
    }
}

function sorteioAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    const resultado = document.getElementById('resultado');
    limparLista();
    resultado.innerHTML = `<li>O amigo sorteado foi:</li> <br> <li>${sorteado.toUpperCase()}</li>`;
}

function limparLista(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}