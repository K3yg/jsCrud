import { clientService } from "../service/clientService.js"

(() => {
    const getURL = new URL(window.location)
    const id = getURL.searchParams.get("id")

    const nameInput = document.querySelector("[data-nome]")
    const emailInput = document.querySelector("[data-email]")

    clientService.detailClient(id)
    .then(data => {
        nameInput.value = data.name
        emailInput.value = data.email

    })

    const form = document.querySelector("[data-form]")

    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const name = nameInput.value
        const email = emailInput.value

        await clientService.updateClient(id, name, email)
            window.location.href = "edicao_concluida.html"
    })

})()

