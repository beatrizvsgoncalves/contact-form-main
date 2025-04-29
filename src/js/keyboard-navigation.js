import { handleRadio } from "./handle-radio.js";

export default function keyboardNavigation() {
	const elements = document.querySelectorAll(".keyboard-navigation");
  let currentIndex = 0; 
  
	elements.forEach((element) => {
    element.addEventListener("keydown", (event) => {
      console.log(currentIndex);
      
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

				if (input.type === "radio") { 
					input.parentElement.style.border = "1px solid var(--green-medium)";
          input.checked === true;
				} else if (input.type === "checkbox") {
          input.parentElement.style.textDecoration = "underline";
				}
        
			} else if (event.key === "Enter") {
				event.preventDefault();

        handleRadio()
        // todo -- passar para o próximo elemento
			}
		});
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
