import NavItemFooter from "../../molecules/NavItemFooter"

interface NavFooterProps {
    title: string;
    listNav: string[];
}

export default function NavFooter(props: NavFooterProps) {
    const { title, listNav } = props
    
    return(
        <>                                    
        <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
        <ul className="list-unstyled">
            {
                listNav.map((val, idx)=>(
                    <NavItemFooter key={idx} navItem={val}/>
                ))
            }
        </ul>
        </>
    )
}