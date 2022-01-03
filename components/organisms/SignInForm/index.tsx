import Link from "next/link"
import { toast } from 'react-toastify';
import { useState } from "react"
import { SetSignIn } from "../../../services/auth";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const onSubmit = async ()=>{
        const data = {
            email,
            password
        }
        if (!email || !password) {
            toast.error("email dan password harus diisi!!")
        } else{
            const result = await SetSignIn(data)
            if (result.error) {
                toast.error(result.message)
            } else {
                toast.success('Login Berhasil!!')
                const { token } = result.data
                console.log('token, ', token)
                const tokenBase64 = btoa(token)
                console.log(tokenBase64)
                Cookies.set('token', tokenBase64, { expires: 1 })
                // const user = jwt_decode(token)
                // console.log('user, ', user)
                router.push('/')
            }
        }
    }

    return(
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
            <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
            <div className="pt-50">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                    Address</label>
                <input 
                    type="email" 
                    className="form-control rounded-pill text-lg"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="pt-30">
                <label
                    className="form-label text-lg fw-medium color-palette-1 mb-10">
                        Password
                </label>
                <input type="password" 
                    className="form-control rounded-pill text-lg" 
                    aria-describedby="password" 
                    placeholder="Your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button 
                    type="button"
                    className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                    role="button"
                    onClick={onSubmit}
                    >
                        Continue to Sign In
                </button>
                <Link href="/sign-up">
                    <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                        role="button">
                            Sign Up
                    </a>
                </Link>
            </div>   
        </>
    )
}