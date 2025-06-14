const inputs = document.querySelectorAll('input[type="radio"]');

export function handleRadio() {
	inputs.forEach((input) => {
		input.parentElement.addEventListener('click', () => {
			addRadioStyles(input)
		});
		
		input.addEventListener('keydown', (ev) => {
			if (ev.key === 'Enter') {
				ev.preventDefault()
				addRadioStyles(input)
			}
		});
	});
}

function addRadioStyles(input) {
	resetRadioStyles();
	input.parentElement.classList.add('selected');
	input.checked = true;
}

export function resetRadioStyles() {
	inputs.forEach((input) => {
		input.parentElement.classList.remove('selected');
		input.parentElement.style.border = '1px solid var(--grey-medium)';
	});
}