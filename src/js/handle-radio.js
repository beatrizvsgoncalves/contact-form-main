const inputs = document.querySelectorAll('input[type="radio"]')

export function handleRadio() {
	inputs.forEach(input => {
		input.parentElement.addEventListener("click", () => {
			resetRadioStyles();
			input.parentElement.classList.add("selected");
			input.checked = true;
		})

		input.addEventListener("keydown", (ev) => {
			if (ev.key === "Enter") {
				resetRadioStyles();
				input.checked = true;
				input.parentElement.classList.add("selected");

				if (input.tabIndex === 3) {
					const nextElement = document.querySelector(`[tabindex='4']`);
					nextElement.focus();
				}
			} else if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
				ev.preventDefault();
			}
		});
	})
}

export function resetRadioStyles() {
	inputs.forEach((input) => {
		input.parentElement.classList.remove("selected");
		input.parentElement.style.border = "1px solid var(--grey-medium)";
	});
}