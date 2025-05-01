const inputs = document.querySelectorAll('input[type="radio"]')

export function handleRadio() {
	inputs.forEach(input => {
		input.addEventListener("click", () => {
			resetRadioStyles();
			input.parentElement.classList.add("selected");
		})
		input.addEventListener("keydown", (ev) => {
			if (ev.key === "Enter") {
				resetRadioStyles();
				input.checked = true;
				input.parentElement.classList.add("selected");
				const nextElement = document.querySelector(`[tabindex='${input.tabIndex + 2}']`);
				nextElement.focus();
			} else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
				ev.preventDefault();
			}
		});
	})
}

export function resetRadioStyles() {
	inputs.forEach((input) => {
		input.parentElement.classList.remove("selected");
	});
}
