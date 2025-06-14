import successMessage from './utils/success-message.js';
import {
	removeError,
	resetFormInputs,
	showError,
	userInputs,
} from './utils/dom.js';
import {
	hasMinimunSize,
	hasNumber,
	isChecked,
	isEmail,
	isEmpty,
} from './utils/validation.js';

export let hasError = false;

export function validateForm() {
	const form = document.querySelector('form');

	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		hasError = false
		validateInputs() 
		
		if (!hasError) {
			successMessage();
			resetFormInputs(form);
		}
	});
}

function validateInputs() {
	validateFirstName(userInputs.firstName);
	validateLastName(userInputs.lastName);
	validateEmail(userInputs.email);
	validateQueryType(userInputs.queryType);
	validateMessage(userInputs.message);
	validateConsent(userInputs.consent)
}

function validateFirstName(firstName) {
	if (
		isEmpty(firstName.value) ||
		hasMinimunSize(firstName.value) ||
		hasNumber(firstName.value)
	) {
		showError(firstName, 'This field is required');
		hasError = true
	} else {
		removeError(firstName);
	}
}

function validateLastName(lastName) {
	if (
		isEmpty(lastName.value) ||
		hasMinimunSize(lastName.value) ||
		hasNumber(lastName.value)
	) {
		showError(lastName, 'This field is required');
		hasError = true
	} else {
		removeError(lastName);
	}
}

function validateEmail(email) {
	if (isEmpty(email.value) || isEmail(email.value)) {
		showError(email, 'Please enter a valid email address');
		hasError = true
	} else {
		removeError(email);
	}
}

function validateQueryType(queryType) {
	if (isChecked(queryType[0]) && isChecked(queryType[1])) {
		showError(queryType[0], 'Please select a query type');
		hasError = true
	} else {
		removeError(queryType[0]);
	}
}

function validateMessage(message) {
	if (isEmpty(message.value) || hasMinimunSize(message.value)) {
		showError(message, 'This field is required');
		hasError = true
	} else {
		removeError(message);
	}
}

function validateConsent(consent) {
	if (isChecked(consent)) {
		showError(
			consent,
			'To submit this form, please consent to being contacted'
		);
		hasError = true
	} else {
		removeError(consent);
	}
}