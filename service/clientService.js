const listClient = () => {
    return fetch('http://localhost:3000/profile')
    .then(response => {
        return response.json()
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
        return response.json()
    })
}

const deleteClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
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
        return response.json()
    })
}


const clientDetails = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(response => {
        return response.json()
    })
}

export const clientService = {
    listClient,
    createClient,
    deleteClient,
    clientDetails,
    updateClient
}

