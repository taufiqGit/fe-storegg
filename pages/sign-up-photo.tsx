import Image from "next/image"
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from "react"
import { SetSignUp } from "../services/auth"
import { getGameCategory } from "../services/player"
import { useRouter } from "next/router";

export default function SignUpPhoto() {
    const [categories, setCategories] = useState<any[]>([])
    const [favourite, setFavourite] = useState('')
    const [image, setImage] = useState<any>('')
    const [imagePreview, setImagePreview] = useState<any>(null)
    const [localForm, setLocalForm] = useState({
        name: '',
        email: ''
    })

    const router = useRouter()

    const getGameCategoryAPI = useCallback(async ()=>{
        const { data } = await getGameCategory()
        setCategories(data)
        setFavourite(data[0]._id)
    }, [getGameCategory])

    useEffect(()=>{
        getGameCategoryAPI()
    }, [])

    useEffect(()=>{
        const getLocalForm: any = localStorage.getItem('user-form')
        setLocalForm(JSON.parse(getLocalForm))
    }, [])

    async function onSubmit (){
        const getLocalForm: any = localStorage.getItem('user-form')
        const form = JSON.parse(getLocalForm)
        const data = new FormData()

        data.append('image', image)
        data.append('email', form.email)
        data.append('name', form.name)
        data.append('password', form.password)
        data.append('username', form.name)
        data.append('phoneNumber', '08934443333')
        data.append('role', 'user')
        data.append('status', 'Y')
        data.append('favorite', favourite)
        // for (let val of data.entries()){
        //     console.log('value data', val)
        // }
        
        const result = await SetSignUp(data)
        console.log('result', result)
        
        if (result.error) {
            toast.error(result.message)
        } else{
            toast.success("Register Berhasil !!")
            router.push('/sign-up-success')
            localStorage.removeItem('user-form')
        }
    }
    

    return(
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    {
                                        image ? <img src={`${imagePreview}`} className="img-upload" alt="preview"/> : <Image src="/img/upload.svg" height={120} width={120} alt="Upload"/>
                                    }
                                 </label>
                                <input 
                                id="avatar" type="file" 
                                name="avatar" accept="image/png, image/jpeg"
                                onChange={(e)=> {
                                    const img = e.target.files![0]
                                    setImagePreview(URL.createObjectURL(img))
                                    return setImage(img)
                                    }} />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                        <div className="pt-50 pb-50">
                            <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                Game</label>
                            <select id="category" name="category" 
                                className="form-select d-block w-100 rounded-pill text-lg"
                                aria-label="Favorite Game"
                                value={favourite}
                                onChange={(e)=> setFavourite(e.target.value)}>
                                {
                                    categories.map(category =>{
                                        return <option key={category._id} selected value={category._id}>{category.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        
                        <button
                        onClick={onSubmit}
                            type="button" 
                            className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button">
                                Create My Account
                        </button>
                        
                        <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                            role="button">Terms &
                            Conditions</a>
                    </div>
                </div>
            </form>
        </div>
    </section>
    )
}