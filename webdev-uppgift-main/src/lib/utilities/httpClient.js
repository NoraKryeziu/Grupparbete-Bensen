import { config } from "../../data/config.js";

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
            throw new Error('Något gick fel')
        }
    } catch (error) {
        console.error(error);
    }
}