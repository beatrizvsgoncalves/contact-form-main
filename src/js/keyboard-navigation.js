import { handleRadio } from "./handle-radio.js";
let currentIndex = -1;

export default function keyboardNavigation() {
	const elements = document.querySelectorAll(".keyboard-navigation");
	
	document.addEventListener("keydown", (event) => {
		if (event.key === "Tab") {
			event.preventDefault();

			if (event.shiftKey) {
				currentIndex = (currentIndex - 1 + elements.length) % elements.length;
			} else {
				currentIndex = (currentIndex + 1) % elements.length;
			}
			
			elements[currentIndex].focus();
			resetStyles();
			focusRadioAndCheckbox(elements[currentIndex]);
		} else if (event.key === "Enter") {
			event.preventDefault();
			
			handleRadio();
			handleCheckboxEnter();
			focusInNextElement();
		}
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

	if (elementOnFocus.type === "submit") {
		handleSubmitEnter();
		resetStyles();
	}
}

function focusRadioAndCheckbox(input) {
	if (input.type === "radio") {
		input.parentElement.style.border = "2px solid var(--green-medium)";
	} else if (input.type === "checkbox") {
		input.parentElement.style.textDecoration = "underline";
	}
}

function handleCheckboxEnter() {
	const checkbox = document.querySelector('input[type="checkbox"]');
	checkbox.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			checkbox.checked = true;
		}
	});
}

function handleSubmitEnter() {
	const submitButton = document.querySelector('[type="submit"]');
	submitButton.click();
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