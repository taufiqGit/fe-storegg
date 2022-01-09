import jwtDecode from "jwt-decode"
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent"
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from "../../../services/data-types"
import { getTransactionsDetail } from "../../../services/member"

interface DataTransactionDetailProps {
    dataTransactionDetail: HistoryTransactionTypes
}

export default function TransactionDetail(props: DataTransactionDetailProps) {
    const { dataTransactionDetail } = props
    console.log('data ', dataTransactionDetail)
    return(
    <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={dataTransactionDetail}/>
    </section>
    )
}

interface getServerSidePropsTypes {
    req: {
        cookies: {
            token: string
        }
    },
    params: {
       idTrx: string
    }
}

export async function getServerSideProps({req, params}: getServerSidePropsTypes) {
    const { token } = req.cookies
    const { idTrx } = params

    if (!token) {
        return {
            redirect: {
                destination: '/sign-in', 
                permanent: false
            }
        }
    }
    const jwtToken = Buffer.from(token, 'base64').toString('ascii')
    const payload: JWTPayloadTypes = jwtDecode(jwtToken)
    const userFromPayload: UserTypes = payload.player
    const IMG = process.env.NEXT_PUBLIC_IMG
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
    
    const response = await getTransactionsDetail(idTrx, jwtToken)
    //console.log('response ', response)
    return {
        props: {
            dataTransactionDetail: response.data
        }
    }
}