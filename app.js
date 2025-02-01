let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo");
  const nome = nomeAmigo.value.trim();

  if (nome !== "") {
    amigos.push(nome);
    nomeAmigo.value = "";  
    atualizarListaAmigos(); 
  } else {
    alert("Por favor insira uma nome válido.");
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length > 0) {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
  } else {
    alert("Por favor insira uma nome válido.");
  }
}

function mostrarResultado(nome) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${nome}</strong></li>`;
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      adicionarAmigo(); }
});