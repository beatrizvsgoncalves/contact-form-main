export default function radioSelected() {
  const inputs = document.querySelectorAll('input[type="radio"]')
  inputs.forEach(input => {
    input.addEventListener('click', () => {
      deselect()
      input.parentElement.classList.add('selected')
    })	
  })
}
function deselect() {
  const selected = document.querySelector('.selected')
  if (selected) {
    selected.classList.remove('selected')
  }
}