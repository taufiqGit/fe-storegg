import Footer from "./footer"
import Profile from "./profile"
import MenuItem from "./menuItem"
import Cookies from "js-cookie"
import cx from 'classnames'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface SidebarProps {
    activeMenu: string
}

export default function SideBar(props: SidebarProps) {
    const { activeMenu } = props
    const [showSidebar, setShowSidebar] = useState(false)

    const router = useRouter()
    
    const onLogout =()=>{
        Cookies.remove('token')
        router.push('/sign-in')
    }
    useEffect(()=>{
        
    }, [])

    const classSidebar = cx({
        "sidebar": true,
        "sidebar-show": showSidebar
    })

    const classBtnToggleSidebar = cx({
        "btn-toggle-sidebar": true,
        "btn-toggle-sidebar-no-active": !showSidebar
    })

    return(
        <section className={classSidebar}>
            <div className="content pt-50 pb-30 ps-30">
                <Profile/>
                <div className="menus">
                    <MenuItem title="Overview" icon="icon-overview" active={activeMenu === "overview"} href="/member"/>
                    <MenuItem title="Transactions" icon="icon-transactions" active={activeMenu === "transactions"} href="/member/transactions"/>
                    <MenuItem title="Messages" icon="icon-messages" href="/member"/>
                    <MenuItem title="Card" icon="icon-card" href="/member"/>
                    <MenuItem title="Rewards" icon="icon-reward" href="/member"/>
                    <MenuItem title="Settings" icon="icon-settings" active={activeMenu === "edit-profile"} href="/member/edit-profile"/>
                    <MenuItem title="Log Out" icon="icon-logout" onClick={onLogout}/>
                </div>
                <Footer/>
            </div>
                <button className={classBtnToggleSidebar} onClick={()=> setShowSidebar(!showSidebar)}>
                    {
                        !showSidebar ? (  
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>):(
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        )
                    }
                  
                </button>
        </section>        
    )
}