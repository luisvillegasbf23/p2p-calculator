/// ENTIDADES ///
class Cripto {
	constructor({ nombre, precio, cantidad }) {
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.totalPesos = precio * cantidad;
	}
}

/// VARIABLES ///
let listaCriptos = [];

/// FUNCIONES ///

// Crear Cripto
const crearCripto = () => {
	const cripto = new Cripto({
		nombre: document.getElementById("nombre").value,
		precio: document.getElementById("precio").value,
		cantidad: document.getElementById("cantidad").value,
	});

	let lista;
	if (localStorage.getItem("listaCriptos") != null) {
		lista = JSON.parse(localStorage.getItem("listaCriptos"));
		lista.push(cripto);
		localStorage.setItem("listaCriptos", JSON.stringify(lista));
	}
	listaCriptos.push(cripto);

	return cripto;
};

// Guardar datos
const guardarEnBaseDeDatos = () => {
	crearCripto();

	if (verificarStorage() != undefined) {
		localStorage.setItem("listaCriptos", JSON.stringify(verificarStorage()));
	} else {
		localStorage.setItem("listaCriptos", JSON.stringify(listaCriptos));
	}
};

// Verificar Storage
const verificarStorage = () => {
	let dato = [];
	if (localStorage.getItem("listaCriptos") != null) {
		dato = JSON.parse(localStorage.getItem("listaCriptos"));
		return dato;
	}
};

// Imprimir datos

const imprimirDatos = () => {
	verificarStorage().forEach((obj) => {
		document.getElementById("table").innerHTML += `
        <tr>
	
					<td>${obj.nombre}</td>
					<td>${obj.precio}</td>
					<td>${obj.cantidad}</td>
					<td>${obj.totalPesos}</td>
					<td><button onclick=elimiarDeLaLista(${obj.totalPesos})>X</button></td>
		</tr>
		
        `;
	});
};

const elimiarDeLaLista = (totalPesos) => {
	let listaVieja = JSON.parse(localStorage.getItem("listaCriptos"));
	let listaNueva = listaVieja.filter((e) => e.totalPesos != totalPesos);

	localStorage.setItem("listaCriptos", JSON.stringify(listaNueva));
	location.reload();
};
/// EVENTOS //

$("form").submit(() => {
	guardarEnBaseDeDatos();
});

if (localStorage.getItem("listaCriptos") != null) {
	imprimirDatos();
}

$("#show-app").on("click", () => {
	$("#beta-app").show();
});

const url = `https://api.coincap.io/v2/assets`;

setInterval(() => {
	$.get(url, (respuesta, estado) => {
		document.getElementById("btc").innerHTML = "";

		if (estado == "success") {
			console.log(respuesta.data[0]);

			document.getElementById("btc").innerHTML += `
				<p> ${respuesta.data[0].id} price : ${respuesta.data[0].priceUsd} </p>`;
		}
	});
}, 1000);
