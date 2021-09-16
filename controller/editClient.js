import { clientService } from "../service/clientService.js"

const getURL = new URL(window.location)
const id = getURL.searchParams.get("id")

const nameInput = document.querySelector("[data-nome]")
const emailInput = document.querySelector("[data-email]")

clientService.clientDetails(id)
.then(data => {
    nameInput.value = data.name
    emailInput.value = data.email

})