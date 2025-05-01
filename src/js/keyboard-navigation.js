import { handleRadio } from "./handle-radio.js";

let currentIndex = 0;

export default function keyboardNavigation() {
	const elements = document.querySelectorAll(".keyboard-navigation");

	elements.forEach((element) => {
		element.addEventListener("keydown", (event) => {
			handleSubmit();

			if (event.key === "Tab") {
				event.preventDefault();
				resetStyles();

				if (event.key === "Tab" && event.shiftKey) {
					event.preventDefault();
					currentIndex = (currentIndex - 1 + elements.length) % elements.length;
				} else {
					currentIndex = (currentIndex + 1) % elements.length;
				}

				const input = elements[currentIndex];
				input.focus();
				focusRadioAndCheckbox(input);
			} else if (event.key === "Enter") {
				event.preventDefault();

				handleRadio();
				handleCheckbox();
				focusInNextElement();
			}
		});
	});
}

function focusInNextElement() {
	const elements = document.querySelectorAll(".keyboard-navigation");
	const elementOnFocus = elements[document.activeElement.tabIndex];
	const nextElement =
		elements[elementOnFocus.tabIndex + 1] === undefined
			? undefined
			: elements[elementOnFocus.tabIndex + 1];
	if (nextElement) {
		currentIndex = nextElement.tabIndex % elements.length;
		nextElement.focus();
		focusRadioAndCheckbox(nextElement);
	}
}

function focusRadioAndCheckbox(input) {
	if (input.type === "radio") {
		input.parentElement.style.border = "1px solid var(--green-medium)";
	} else if (input.type === "checkbox") {
		input.parentElement.style.textDecoration = "underline";
	}
}

function handleCheckbox() {
	const checkbox = document.querySelector('input[type="checkbox"]');
	checkbox.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			checkbox.checked = true;
		}
	});
}

function handleSubmit() {
	const submitButton = document.querySelector('button[type="submit"]');
	submitButton.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			submitButton.click();
		}
	});
}

function resetStyles() {
	const inputs = document.querySelectorAll('input[type="radio"]');
	inputs.forEach((input) => {
		input.parentElement.style.border = "1px solid var(--grey-medium)";
	});
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	checkboxes.forEach((checkbox) => {
		checkbox.parentElement.style.textDecoration = "none";
	});
}
