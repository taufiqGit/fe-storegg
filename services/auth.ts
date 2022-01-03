import axios from "axios"
import CallApi from "../config/api"
import { LoginTypes } from "./data-types"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const SetSignUp = async (data: any)=>{
    const URL = `${ROOT_API}/${API_VERSION}/auth/signup`
  
    return CallApi({
        url: URL,
        method: 'POST',
        data
    })
}

export const SetSignIn = async(data: LoginTypes)=>{
    const URL = `${ROOT_API}/${API_VERSION}/auth/signin`
  
    return CallApi({
        url: URL,
        method: 'POST',
        data
    })
}