import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function EditProfile() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        avatar: ''
    })
    const [imagePreview, setImagePreview] = useState('')

    useEffect(()=>{
        const token = Cookies.get('token')
        if (token) {
            const jwtToken = atob(token)
            const payload: JWTPayloadTypes = jwtDecode(jwtToken)
            const userFromPayload: UserTypes = payload.player
            setUser(userFromPayload)
            console.log("payload: .", userFromPayload)
        }
    }, [])

    const onSubmit = ()=>{
        console.log('user: ', user)
    }
    return(
    <section className="edit-profile overflow-auto">
        <SideBar activeMenu="edit-profile"/>
        <main className="main-wrapper wajib">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mt-20 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            {/* <div className="position-relative me-20">
                                <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" />
                                <div
                                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                                    <img src="/img/upload.svg" alt=";ll"/>
                                </div>
                            </div> */}
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    {
                                        imagePreview ? (
                                            <img src={imagePreview} alt="sssss" style={{borderRadius: '50%'}} height="90" width="90"/>
                                        ) : (
                                            <img src="/img/upload.svg" alt="sssss" height="90" width="90"/>
                                        )
                                    }
                                </label>
                                <input 
                                    id="avatar" type="file" name="avatar" 
                                    accept="image/png, image/jpeg" 
                                    onChange={(e: any)=> {
                                        const img: any = e.target.files[0]
                                        setImagePreview(URL.createObjectURL(img))
                                        return setUser({
                                            ...user,
                                            avatar: img
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="pt-30">
                            <Input 
                                label="Full Name" 
                                value={user.name}
                                onChange={(e: any)=> setUser({
                                    ...user,
                                    name: e.target.value
                                })}
                            />
                        </div>
                        <div className="pt-30">
                            <Input label="Email Address" disabled value={user.email}/>
                        </div>
                        {/* <div className="pt-30">
                            <Input label="Phone"/>
                        </div> */}
                        <div className="button-group d-flex flex-column pt-50">
                            <button 
                                type="button"
                                onClick={onSubmit} 
                                className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                >
                                    Save My Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
    )
}