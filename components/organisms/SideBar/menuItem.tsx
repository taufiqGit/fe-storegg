import cx from "classnames"
import Image from "next/image"
import Link from "next/link"

interface MenuItemProps {
    title: string;
    icon: 'icon-overview' | 'icon-transactions' | 'icon-reward' | 'icon-messages' | 'icon-card' | 'icon-settings' | 'icon-logout';
    active?: boolean;
    href?: string;
    onClick?: ()=> void
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href, onClick } = props

    const classItem = cx({
        'item': true,
        'mb-30': true,
        'active': active
    })
    
    return(
    <div className={classItem} onClick={onClick}>
        <div className="me-3">
            <Image src={`/icon/${icon}.svg`} height={25} width={25} alt="Icon Menu"/>
        </div>
        <p className="item-title m-0">
            {
                onClick ? (
                    <a className="text-lg text-decoration-none">{title}</a>
                ) : (
                    <Link href={`${href}`}>
                    <a className="text-lg text-decoration-none">{title}</a>
                    </Link>                    
                )
            }
        </p>
    </div>
    )
}