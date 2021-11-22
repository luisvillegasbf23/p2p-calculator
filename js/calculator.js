let help = $(`#help`);
let iconMessage = $(`#icon-help`);

$(document).ready(() => {
	help.hide(); // ocultar elemento

	iconMessage.click(function () {
		help.show(); // mostrar mensaje
	});
});
