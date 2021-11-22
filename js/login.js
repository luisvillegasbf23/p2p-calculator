//// LOGIN /////
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

// LOGIN USER
let uruario = [`luis`];
let emailUsuario = [`luisville.lv@gmail.com`];
let password = [`futbol`];

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let warnings = "";
	let entrar = false;
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	parrafo.innerHTML = "";
	if (nombre.value != uruario) {
		warnings += ` usuario incorrecto `;
		entrar = true;
	}
	if (!regexEmail.test(email.value) || email.value != emailUsuario) {
		warnings += `El email no es valido <br>`;
		entrar = true;
	}
	if (pass.value != password) {
		warnings += `La contraseña es incorrecta <br>`;
		entrar = true;
	}

	if (entrar) {
		parrafo.innerHTML = warnings;
	} else {
		window.location = "home.html";
	}
});
