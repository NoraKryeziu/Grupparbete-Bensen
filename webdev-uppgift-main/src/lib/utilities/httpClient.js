import { config } from "../../data/config.js"

export const get = async (endpoint) => {
    try {
        const response = await fetch(`${config.apiUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
                'x-apikey': config.apiKey,
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            return await response.json()
        } else {
            throw new Error(`Något gick fel: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error(error)
    }
}

export const post = async (endpoint, object) => {
    try {
        const response = await fetch(`${config.apiUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'x-apikey': config.apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        })

        if (response.ok) {
            return await response.json()
        } else {
            throw new Error(`Något gick fel: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error(error.message)
    }
}

export const remove = async (endpoint) => {
    try {
        const response = await fetch(`${config.apiUrl}/${endpoint}`, {
            method: 'DELETE',
            headers: {
                'x-apikey': config.apiKey,
                'Content-Type': 'application/json',
            }
        })

        if (response.ok) {
            return await response.json()
        } else {
            throw new Error(`Något gick fel: ${response.status} - ${response.statusText}`)
        }
    } catch (error) {
        console.error(error.message)
    }
}
