import axios from "axios"
import CallApi from "../config/api"
import { CheckoutTypes } from "./data-types"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const getFeaturedGame = async ()=>{
    const url = `${ROOT_API}/${API_VERSION}/players/landingpage`
    return CallApi({
        url,
        method: 'GET',
        token: false
    })
}

export const getDetailVoucher = async (id: any)=>{
    const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`
    return CallApi({
        url,
        method: "GET",
        token: false
    })
}

export const getGameCategory = async ()=>{
    const url = `${ROOT_API}/${API_VERSION}/players/category`
    return CallApi({
        url,
        method: "GET",
        token: false
    })
}

export const setCheckout = async (data: CheckoutTypes)=>{
    const url = `${ROOT_API}/${API_VERSION}/players/checkout`
    return CallApi({
        url,
        method: 'POST',
        data,
        token: true
    }) 
}
