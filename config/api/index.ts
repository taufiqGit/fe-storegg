import axios from "axios"

export default async function CallApi({ method, url, data }) {
    try {
        const response = await axios({
            method,
            url,
            data
        })
        console.log('success response', response.data)
        const res = {
            error: false,
            message: 'success',
            data: response.data.data
        }
        return res
    } catch (error: any) {
        if (error.response.status > 300) {
           const res = {
               error: true,
               message: error.response.data.message,
               data: null
           }
           return res
        }
        return error.response  
    }  
}