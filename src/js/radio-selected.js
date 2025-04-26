export function radioSelected() {
	const inputs = document.querySelectorAll('input[type="radio"]');
	inputs.forEach((input) => {
		input.addEventListener("click", () => {
			formatRadioSyle();
			input.parentElement.classList.add("selected");
		});
	});
}
export function formatRadioSyle() {
	const selected = document.querySelector(".selected");
	if (selected) {
		selected.classList.remove("selected");
	}
}
