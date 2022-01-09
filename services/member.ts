import CallApi from "../config/api"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const getMemberOverview = async()=>{
    const url = `${ROOT_API}/${API_VERSION}/players/dashboard`
    return CallApi({
        url,
        method: 'GET',
        token: true
    })
}

export async function getMemberTransactions(valueParams: string) {
    let params = ''
    if (valueParams === 'all') {
        params = ''
    } else {
        params = `?status=${valueParams}`
    } 
    const url = `${ROOT_API}/${API_VERSION}/players/history${params}`
    return CallApi({
        url,
        method: 'GET',
        token: true
    })
}

export const getTransactionsDetail =(idTrx: string, token: any)=>{
    const url = `${ROOT_API}/${API_VERSION}/players/history/${idTrx}/detail`
    return CallApi({
        url,
        method: 'GET',
        serverToken: token,
        token: false
    })
}