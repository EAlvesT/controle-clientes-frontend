import axios from "axios"

export const getApiClient = (token?: string) => {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:3333/api',
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        },
        timeout: 10000
    })
}