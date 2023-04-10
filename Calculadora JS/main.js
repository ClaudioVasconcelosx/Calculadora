let display = document.querySelector("#display");

function inserir(numero) {
	const valorAntigo = document.getElementById("display").innerHTML;

	let valorNovo = "";
	if (valorAntigo === "0" && numero !== "0") {
		valorNovo = numero;
	} else if (valorAntigo === "0" && numero === "0") {
		valorNovo = "0";
	} else {
		valorNovo = valorAntigo + numero;
	}

	document.getElementById("display").innerHTML = valorNovo;
	
}

function limpar() {
	document.getElementById("display").innerHTML = "0";
}

function apagar() {
	display = document.getElementById("display").textContent;

	let result = "";
	if (display.length === 1) {
		result = "0";
	} else {
		result = display.substring(0, display.length - 1);
	}

	//  let result = document.getElementById("display").textContent = display.substring(0, display.length - 1);

	document.getElementById("display").textContent = result;
}

function removeLastChar() {
	let str = document.getElementById("string").textContent;
	let newStr = str.substring(0, str.length - 1);
	document.getElementById("string").textContent = newStr;
}

function calcular() {
	let resultado = document.getElementById("display").innerHTML;

	if (resultado) {
		document.getElementById("display").innerHTML = eval(resultado);
	}
}
