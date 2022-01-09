import jwtDecode from "jwt-decode";
import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Transactions() {
    return (
    <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions"/>
        <TransactionContent/>
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
    return {
        props: { }
    }
}