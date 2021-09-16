import { clientService } from "../service/clientService.js"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    clientService.createClient(name, email)
    .then(() => {
        window.location.href = 'cadastro_concluido.html'
    })
})