import { formatRadioSyle } from "./radio-selected.js";
import successMessage from "./success.js";

export let valid = []

export function validateForm() {
	function validateFirstName(firstName) {
		if (firstName.value === "" || firstName.value.length < 2) {
			const err = new Error("This field is required");
			err.input = "firstName";
			displayError(err.message, err.input);
			valid[0] = false;
		} else {
			valid[0] = true;
		}
	}

	function validateLastName(lastName) {
		if (lastName.value === "" || lastName.value.length < 2) {
			const err = new Error("This field is required");
			err.input = "lastName";
			displayError(err.message, err.input);
			valid[1] = false;
		} else {
			valid[1] = true;
		}
	}

	function validateEmail(email) {
		if (
			email.value === "" ||
			!email.value.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)
		) {
			const err = new Error("Please enter a valid email address");
			err.input = "email";
			displayError(err.message, err.input);
			valid[2] = false;
		} else {
			valid[2] = true;
		}
	}

	function validateQueryType(queryType) {
		if (queryType[0].checked === false && queryType[1].checked === false) {
			const err = new Error("Please select a query type");
			err.input = "queryType";
			displayError(err.message, err.input);
			valid[3] = false;
		} else {
			valid[3] = true;
		}
	}

	function validateMessage(message) {
		if (message.value === "" || message.value.length < 10) {
			const err = new Error("This field is required");
			err.input = "message";
			displayError(err.message, err.input);
			valid[4] = false;
		} else {
			valid[4] = true;
		}
	}

	function validateConsent(consent) {
		if (!consent.checked) {
			const err = new Error(
				"To submit this form, please consent to being contacted"
			);
			err.input = "consent";
			displayError(err.message, err.input);
			valid[5] = false;
		} else {
			valid[5] = true;
		}
	}
		
	function validateInputs() {
		validateFirstName(userInputs.firstName);
		validateLastName(userInputs.lastName);
		validateEmail(userInputs.email);
		validateQueryType(userInputs.queryType);
		validateMessage(userInputs.message);
		validateConsent(userInputs.consent);
	}

	const userInputs = {
		firstName: document.querySelector("#firstName"),
		lastName: document.querySelector("#lastName"),
		email: document.querySelector("#email"),
		queryType: document.querySelectorAll("input[type='radio']"),
		message: document.querySelector("#message"),
		consent: document.querySelector("input[type='checkbox']"),
	};

	function displayError(message, key) {
		const errorElement = document.querySelector(`#${key}-error`);
		errorElement.textContent = message;
		if (key !== "queryType" || key !== "consent") {
			userInputs[key]?.classList?.add("error");
		}
	}

	function resetFormStyles(inputs) {
		Object.entries(inputs).forEach(([key, value]) => {
			value?.classList?.remove("error");
			document.querySelector(`#${key}-error`).textContent = "";
		});
	}
	
	function resetFormInputs() {
		if (document.querySelector(".success-message")) {
			userInputs.firstName.value = "";
			userInputs.lastName.value = "";
			userInputs.email.value = "";
			userInputs.queryType[0].checked = false;
			userInputs.queryType[1].checked = false;
			formatRadioSyle();
			userInputs.message.value = "";
			userInputs.consent.checked = false;
		}
	}

	const form = document.querySelector("form");

	form.addEventListener("submit", (ev) => {
		ev.preventDefault();
		resetFormStyles(userInputs);
		validateInputs();
		successMessage();
		resetFormInputs();
	});
}
