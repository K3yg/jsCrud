const listClient = () => {
    return fetch('http://localhost:3000/profile')
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Não foi possível listar os clientes')
        }
    })
}

const createClient = (name,email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (response.ok) {
            return response.body
        } else {
            throw new Error('Não foi possível criar o cliente')
        }
    })
}

const deleteClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok){
            throw new Error('Não foi possível deletar o cliente')
        }
    })
}

const updateClient = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Não foi possível atualizar o cliente')
        }
        
    })
}


const detailClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Não foi possível detalhar o cliente')
        }
    })
}

export const clientService = {
    listClient,
    createClient,
    deleteClient,
    detailClient,
    updateClient
}

