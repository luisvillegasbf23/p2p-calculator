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
