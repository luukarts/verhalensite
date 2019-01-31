var filters = document.querySelectorAll("fieldset.genre input");
var submit = document.querySelector('fieldset.button button');
var opslaanKnop = document.getElementsByClassName("opslaanKnop");
var opslaanInteractie = document.getElementsByClassName("microinteractie");

for (var i = 0; i < filters.length; i++) {
	filters[i].addEventListener('click', function () {
		var selectedFields = document.querySelectorAll("fieldset.genre input:checked");
		var total = 0;

		for (var i = 0; i < selectedFields.length; i++) {
			total += parseInt(selectedFields[i].value);
		}

		if (total === 0) {
			submit.textContent = 'Laat 99 verhalen zien';

		} else {
			submit.textContent = 'Laat ' + total + ' verhalen zien';
		}
	});
}


for (var i = 0; i < opslaanKnop.length; i++) {
	opslaanKnop[i].addEventListener("click", Opslaan);
}

function Opslaan() {
	if (this.classList.contains('opgeslagen')) {
		for (var i = 0; i < opslaanInteractie.length; i++) {
			opslaanInteractie[i].classList.remove("beweging");
		}

	} else {
		this.classList.add('opgeslagen');
		for (var i = 0; i < opslaanInteractie.length; i++) {
			opslaanInteractie[i].classList.add("beweging");
		}


	}

}