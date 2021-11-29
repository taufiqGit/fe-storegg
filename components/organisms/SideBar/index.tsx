import Footer from "./footer"
import Profile from "./profile"
import MenuItem from "./menuItem"

interface SidebarProps {
    activeMenu: string
}
export default function SideBar(props: SidebarProps) {
    const { activeMenu } = props

    return(
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile/>
                <div className="menus">
                    <MenuItem title="Overview" icon="icon-overview" active={activeMenu === "overview"} href="/member"/>
                    <MenuItem title="Transactions" icon="icon-transactions" active={activeMenu === "transactions"} href="/member/transactions"/>
                    <MenuItem title="Messages" icon="icon-messages" href="/member"/>
                    <MenuItem title="Card" icon="icon-card" href="/member"/>
                    <MenuItem title="Rewards" icon="icon-reward" href="/member"/>
                    <MenuItem title="Settings" icon="icon-settings" active={activeMenu === "edit-profile"} href="/member/edit-profile"/>
                    <MenuItem title="Log Out" icon="icon-logout" href="/sign-in"/>
                </div>
                <Footer/>
            </div>
        </section>        
    )
}