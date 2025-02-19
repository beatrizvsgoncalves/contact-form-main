export function formValidation() {
  const form = document.querySelector('form')
  form.addEventListener('submit', ev => {
    ev.preventDefault()

    const firstName = document.querySelector('#first-name')
    const lastName = document.querySelector('#last-name')
    const email = document.querySelector('#email')
    const textareaMessage = document.querySelector('#message')
    const inputsWithBorder = [firstName, lastName, email, textareaMessage]
    const radio = document.querySelector('input.selected')
    const consent = document.querySelector('input[type=checkbox]:checked')

    inputsWithBorder.forEach(element => {
      if (element.value === '') {
        const p = document.querySelector(`#${element.id} + .error-message`)
        p.style.display = 'block'
        element.style.borderColor = 'var(--red)'
      }
    })
    
    if (!radio) {
      const p = document.querySelector('p.p1')
      p.style.display = 'block'
      p.style.marginTop = '-.5rem'
    }
    
    if (!consent) {
      const p = document.querySelector('p.p2')
      p.style.display = 'block'
      p.style.margin = '-1.5rem auto 2rem auto'
    }
  })
}