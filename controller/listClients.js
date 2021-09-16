import { clientService } from "../service/clientService.js"

const createNewRow = (name, email, id) =>{
    const newClientRow = document.createElement("tr") 
    const content = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    newClientRow.innerHTML = content
    newClientRow.dataset.id = id
    return newClientRow
}
const table = document.querySelector("[data-table]")

table.addEventListener("click", (event) =>{
    let deleteButton = event.target.className === 'botao-simples botao-simples--excluir'
    if(deleteButton){
        const clientRow = event.target.closest('[data-id]')
        let id = clientRow.dataset.id
        clientService.deleteClient(id)
        .then(() =>{
            clientRow.remove()
        })
    }
}) 

const render = async () =>{
    const listClient = await clientService.listClient()
        listClient.forEach(element => {
            table.appendChild(createNewRow(element.name, element.email, element.id))
        })
}

render()