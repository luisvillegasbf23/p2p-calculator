let help = $(`#help`);
let iconMessage = $(`#icon-help`);

$(document).ready(() => {
	help.hide(); // ocultar elemento

	iconMessage.click(function () {
		help.show(); // mostrar mensaje
	});
});

let signOut = $(`#sign-out`);

$(document).ready(() => {
	signOut.click(function () {
		alert(`¿Desea cerrar sesion?`);
	});
});
