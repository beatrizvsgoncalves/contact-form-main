import { valid } from "./form.js";

export default function successMessage() {
	if (!valid.includes(false)) {
		const successMsg = document.createElement("div");
		successMsg.classList.add("success-message");
		successMsg.ariaLive = "assertive"
		successMsg.role = "alert"

		const successTitle = document.createElement("p");
		successTitle.textContent = "Message Sent!";
		successTitle.classList.add("success-title");

		const successText = document.createElement("p");
		successText.textContent =
			"Thanks for completing the form. We'll be in touch soon!";

		successMsg.append(successTitle, successText);

		const main = document.querySelector("main")
		main.insertAdjacentElement("afterbegin", successMsg);

		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
}
