import Link from "next/link"

interface NavItemProps {
    navItem: string;
}

export default function NavItemFooter(props: NavItemProps) {
    const { navItem } = props

    return(
        <li className="mb-6">
            <Link href="/">
            <a className="text-lg color-palette-1 text-decoration-none">{navItem}</a>
            </Link>
        </li>
    )
}