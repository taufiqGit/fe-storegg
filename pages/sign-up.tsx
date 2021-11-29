import Image from "next/image"
import Link from "next/link"
import SignUpForm from "../components/organisms/SignUpForm"

export default function SignUp() {
    return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
            <form action="">
                <div className="pb-50">
                    <Link href="/">
                    <a className="navbar-brand">
                        <Image src="/icon/logo.svg" height={60} width={60} alt="LOGO"/>
                    </a>
                    </Link>
                </div>
                <SignUpForm/>
            </form>
        </div>
    </section>
    )
}