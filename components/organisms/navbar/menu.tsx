import cx from 'classnames'
import Link from 'next/link'

interface MenuProps {
    title: string;
    active?: boolean;
    href: string;
}

// Partial berfungsi untuk bisa memberikan default props value
// sebagai contoh code akan error jika props href diberikan default value,
// maka itu diberikan Partial<InterfaceProps> agar href bisa diberi default value

export default function Menu(props: Partial<MenuProps>) {
    const { title, active, href = "/" } = props

    const classTitle = cx({
        'nav-link': true,
        'active': active
    })

    return(
        <li className="nav-item my-auto">
            <Link href={href}>
          <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}