class Cripto {
	constructor({ cantidad, precio, nombre }) {
		(this.nombre = nombre),
			(this.precio = precio),
			(this.cantidad = cantidad),
			(this.cantidadEnDolares = precio * cantidad);
	}
}

const listaDeCriptos = [];

const archivarCripto = () => {
	const nombre = prompt("Ingrese el nombre del token");
	const precio = Number(prompt("Ingrese el precio"));
	const cantidad = Number(prompt("Ingrese cantidad"));

	const cripto = new Cripto({
		nombre: nombre,
		precio: precio,
		cantidad: cantidad,
	});

	listaDeCriptos.push(cripto);
	console.log(listaDeCriptos);
	console.log(`su total en dolares es, ${totalDolares()}`);
};

const totalDolares = () => {
	if (listaDeCriptos.length > 1) {
		return listaDeCriptos.reduce((valorAnterior, valorActual) => {
			console.log(valorAnterior, valorActual);
			return valorAnterior.cantidadEnDolares + valorActual.cantidadEnDolares;
		});
	} else {
		return listaDeCriptos[0].cantidadEnDolares;
	}
};

//// SIGN UP /////
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let warnings = "";
	let entrar = false;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	parrafo.innerHTML = "";
	if (nombre.value.length < 6) {
		warnings += ` El nombre es muy corto <br>`;
		entrar = true;
	}
	if (!regexEmail.test(email.value)) {
		warnings += `El email no es valido <br>`;
		entrar = true;
	}
	if (pass.value.length < 8) {
		warnings += `La contraseña es muy corta <br>`;
		entrar = true;
	}

	if (entrar) {
		parrafo.innerHTML = warnings;
	} else {
		parrafo.innerHTML = "Enviado";
	}
});
