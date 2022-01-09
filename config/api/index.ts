import axios, { AxiosRequestConfig } from "axios"
import Cookies from "js-cookie"

interface CallAPIProps extends AxiosRequestConfig {
    token: boolean;
    serverToken?: string;
}

export default async function CallApi({ method, url, data, token, serverToken }: CallAPIProps) {
    try {
        let headers = {}
        if (serverToken) {
            headers = {
                Authorization: `Bearer ${serverToken}`
            }   
        } else if (token) {
            const tokenCookies = Cookies.get('token')
            if (tokenCookies) {
                const jwtToken = atob(tokenCookies)  
                headers = {
                    Authorization: `Bearer ${jwtToken}`
                }             
            }
        }
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        //console.log('success response', response.data)
        const { length } = Object.keys(response.data)
        const res = {
            error: false,
            message: 'success',
            data: length > 1 ? response.data : response.data.data
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