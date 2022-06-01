import OverviewContent from "../../components/organisms/OverviewContent"
import SideBar from "../../components/organisms/SideBar"
import jwtDecode from "jwt-decode"
import { JWTPayloadTypes, UserTypes } from "../../services/data-types"

export default function Member() {
    return (
        <section className="overview overflow-auto">
            <SideBar activeMenu="overview"/>
            <OverviewContent/>
        </section>        
    )
}

interface getServerSidePropsTypes {
    req: {
        cookies: {
            token: string
        }
    }
}

export async function getServerSideProps({req}: getServerSidePropsTypes) {
    const { token } = req.cookies
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
           
    //console.log('user ', userFromPayload)
    return {
        props: {
            user: userFromPayload
        }
    }
}