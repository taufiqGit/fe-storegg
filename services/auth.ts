import axios from "axios"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const setSignUp = async (data)=>{
    const URL = 'auth/signup'

    const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch(err => err)
    const axiosResponse = response.data
    if (axiosResponse?.error === 1) {
        return axiosResponse
    }
    return axiosResponse.data
}