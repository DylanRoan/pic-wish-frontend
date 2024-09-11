'use client'

import { useGoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
    const [passVis, setPassVis] = useState(false)
    const [authError, setAuthError] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()

        //State checking / setting
        setAuthError(false)
        if (loading) return
        setLoading(true)

        //collate information
        const formData = new FormData(e.currentTarget)
        const body = {
            email: formData.get('email'),
            password: formData.get('password'),
            method: 'OTP'
        }

        try {
            fetch('https://v1.test.socket.araby.ai/register', {
                cache: 'no-store',
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                if (("success" in data && data.success !== true) || ("status" in data && data.status === 'fail')) //on fail
                {
                    setAuthError(data.message)
                    return
                }

                //redirect to verification page
                router.push(`/verify?email=${body.email}`)
            

            }).catch(error => {
                setAuthError(error.message)
                setLoading(false)
            })
        } catch (e) { 
            setAuthError(e.message)
            setLoading(false)
        }
    }

    const GoogleLogin = useGoogleLogin({
        onSuccess: token => {
            const access_token = token.access_token
            try {
                fetch('https://v1.test.socket.araby.ai/google-with-token?is_mobile=false&id_token=' + access_token, {
                    cache: 'no-store',
                    method: 'GET', 
                    
                    headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                    if (("success" in data && data.success !== true) || ("status" in data && data.status === 'fail')) //on fail
                    {
                        setAuthError(data.message)
                        return
                    }
    
                    //set token
                    localStorage.setItem('jwt_token', data.token)
                    //redirect to main page
                    router.push(`/`)
                
    
                }).catch(error => {
                    setAuthError(error.message)
                })
            } catch (e) { 
                setAuthError(e.message)
            }
        },
        onError: error => {
            console.log(error)
        }
    })

    return (
        <main className="flex-1 flex items-center justify-center w-full">
            <div className="flex flex-col text-black bg-white shadow-xl rounded-xl py-8 px-5 w-full lg:max-w-[500px] max-w-[450px] ">
                <h1 className="text-xl text-center mb-8 sm:text-2xl">Create a new PicWish Account</h1>
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <div className="p-2">
                        <a className="cursor-pointer p-4 flex items-center justify-center bg-white hover:bg-gray-50 h-[55px] border rounded-lg" onClick={() => GoogleLogin()}>
                            <img className="h-full mr-2" src="https://cfcdn.apowersoft.info/astro/picwish/_astro/google.61020c54.svg"></img>
                            Continue with Google
                        </a>
                    </div>
                    <div className="relative sm:text-base text-xs my-4">
                        <div className="w-full border-t border border-gray-400"></div>
                        <div className="absolute px-2 bg-white text-gray-400 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">Or</div>
                    </div>
                    <div className="flex flex-col gap-8">   
                        <div className="relative">
                            <input placeholder="Email" name="email" type="text" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                            { authError !== '' && (<p className="absolute text-red-600 text-sm left-0">{authError}</p>)}
                        </div>

                        <div className="relative">
                            <input placeholder="Password" name="password" type="password" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                        </div>
                    </div>
                    
                    <div className="mt-4 flex">
                        <input type="checkbox" id="terms_agreement" name="terms_agreement" className="rounded-full border checked:bg-blue-600 bg-gray-50 mr-2" required={true}></input>
                        <label htmlFor="terms_agreement">I agree to the <a className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a className="text-blue-600 hover:text-blue-800">Privacy Policy</a>  </label>
                    </div>
                    <div className="mt-2">
                        <input type="checkbox" id="newsletter" name="newsletter" className="rounded-full border checked:bg-blue-600 bg-gray-50 mr-2"></input>
                        <label htmlFor="newsletter">Send me tips and news</label>
                    </div>

                    <div className="relative my-6">
                        <button className="w-full text-white rounded-lg bg-blue-600 hover:bg-blue-800 py-2">Sign up</button>
                        { loading && (<p className="absolute left-1/2 -translate-x-1/2 -bottom-[75%]">Loading...</p>)}
                    </div>
                </form>
                <p className="sm:text-base text-sm text-center mt-6">Already a member? <Link className="text-blue-600" href={'/login'}>Log in here!</Link></p>
            </div>
        </main>
    )
}