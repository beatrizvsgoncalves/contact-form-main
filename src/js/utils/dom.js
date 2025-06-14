export const userInputs = {
	firstName: document.querySelector('#firstName'),
	lastName: document.querySelector('#lastName'),
	email: document.querySelector('#email'),
	queryType: document.querySelectorAll("input[type='radio']"),
	message: document.querySelector('#message'),
	consent: document.querySelector("input[type='checkbox']"),
};

export function showError(inputElement, message) {
  const container = inputElement.closest('.container-inputs')

  const oldError = container.querySelector('.error-message')
  if (oldError) oldError.remove()

  const error = document.createElement('span')
  error.className = 'error-message'
  error.textContent = message
  container.appendChild(error)
  
  if (inputElement.type !== 'radio' && inputElement.type !== 'checkbox') inputElement.classList.add('error');
}

export function removeError(inputElement) {
  const container = inputElement.closest('.container-inputs')
  const error = container.querySelector('.error-message')
  if (error) error.remove()
  if (inputElement.type !== 'radio' || inputElement.type !== 'checkbox') {
		inputElement.classList.remove('error');
	}
}

export function resetFormInputs(form) {
	if (document.querySelector('.success-message')) {
		form.reset();
		resetRadioStyles();
    document.activeElement.blur()
	}
}

export function handleRadioEventListeners() {
  const inputs = document.querySelectorAll('input[type="radio"]');
  
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
  const inputs = document.querySelectorAll('input[type="radio"]');
	inputs.forEach((input) => {
		input.parentElement.classList.remove('selected');
		input.parentElement.style.border = '1px solid var(--grey-medium)';
	});
}