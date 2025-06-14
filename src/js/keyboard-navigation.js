let currentIndex = -1;

export default function keyboardNavigation() {
	const elements = document.querySelectorAll('.keyboard-navigation');

	document.addEventListener('keydown', (event) => {
		if (
			event.key === 'Tab' ||
			event.key === 'ArrowDown' ||
			event.key === 'ArrowRight'
		) {
			event.preventDefault();
			focusOn('Next', elements);
		} else if (
			(event.key === 'Tab' && event.shiftKey) ||
			event.key === 'ArrowUp' ||
			event.key === 'ArrowLeft'
		) {
			event.preventDefault();
			focusOn('Prev', elements);
		} else if (event.key === 'Enter') {
			event.preventDefault();
			focusInNextElement(elements);
		}
	});
}

function focusOn(direction, array) {
	if (direction === 'Next') {
		currentIndex = (currentIndex + 1) % array.length;
	} else {
		currentIndex = (currentIndex - 1 + array.length) % array.length;
	}

	array[currentIndex].focus();
	resetStyles();
	focusRadioAndCheckbox(array[currentIndex]);
}

function focusInNextElement(elements) {
	const elementOnFocus = document.activeElement;

	if (
		elementOnFocus.type !== 'submit' 	&&
		elementOnFocus.value !== ''
	) {
		focusOn('Next', elements);
	} else if (elementOnFocus.type === 'submit') {
		handleSubmitEnter();
	}

	if (elementOnFocus.type === 'checkbox') {
		handleCheckboxEnter(elementOnFocus);
	}

	if (elementOnFocus.id === 'type-general') {
		focusOn('Next', elements);
	}
}

function focusRadioAndCheckbox(input) {
	if (input.type === 'radio') {
		input.parentElement.style.border = '1px solid var(--green-medium)';
	} else if (input.type === 'checkbox') {
		input.parentElement.style.textDecoration = 'underline';
	}
}

function handleCheckboxEnter(checkbox) {
	checkbox.parentElement.style.textDecoration = 'none';

	if (checkbox.checked === false) {
		checkbox.click();
	} else {
		checkbox.checked = false;
	}
}

function handleSubmitEnter() {
	const submitButton = document.querySelector('[type="submit"]');
	submitButton.click();
	resetStyles();
}

function resetStyles() {
	const inputs = document.querySelectorAll('input[type="radio"]');
	inputs.forEach((input) => {
		input.parentElement.style.border = '1px solid var(--grey-medium)';
	});

	const checkbox = document.querySelector('input[type="checkbox"]');
	checkbox.parentElement.style.textDecoration = 'none';
}
