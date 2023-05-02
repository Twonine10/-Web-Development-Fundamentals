// Definindo a função para adicionar notas
function adicionarNota() {
	// Obtendo os valores do formulário
	var titulo = document.getElementById("titulo").value;
	var texto = document.getElementById("texto").value;
	
	// Criando o elemento de lista para a nova nota
	var novaNota = document.createElement("li");
	novaNota.classList.add("list-group-item");
	novaNota.innerHTML = "<h5>" + titulo + "</h5><p>" + texto + "</p>";
	
	// Adicionando a nova nota à lista
	var listaNotas = document.getElementById("lista-notas");
	listaNotas.appendChild(novaNota);
	
	// Limpando o formulário
	document.getElementById("titulo").value = "";
	document.getElementById("texto").value = "";
}

