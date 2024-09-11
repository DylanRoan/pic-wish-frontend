'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerifyPage({ searchParams }) {
    const [passVis, setPassVis] = useState(false)
    const [authError, setAuthError] = useState("")
    const [loading, setLoading] = useState(false)

    let email_prefill = "" 
    if ("email" in searchParams) 
        email_prefill = searchParams.email

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
            otp: formData.get('otp')
        }

        try {
            fetch('https://v1.test.socket.araby.ai/otp/verify', {
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

                //set token
                localStorage.setItem('jwt_token', data.token)
                //redirect to main page
                router.push(`/`)
            

            }).catch(error => {
                setAuthError(error.message)
                setLoading(false)
            })
        } catch (e) { 
            setAuthError(e.message)
            setLoading(false)
        }
    }

    return (
        <main className="flex-1 flex items-center justify-center w-full">
            <div className="flex flex-col text-black bg-white shadow-xl rounded-xl py-8 px-5 w-full lg:max-w-[500px] max-w-[450px] ">
                <h1 className="text-xl text-center mb-8 sm:text-2xl">Verify your email!</h1>
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-8">   
                        <div className="relative">
                            <input placeholder="Email" name="email" type="text" defaultValue={email_prefill} className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                            { authError !== '' && (<p className="absolute text-red-600 text-sm left-0">{authError}</p>)}
                        </div>

                        <div className="relative">
                            <input placeholder="OTP" name="otp" type="otp" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                        </div>
                    </div>

                    <div className="relative my-6">
                        <button className="w-full text-white rounded-lg bg-blue-600 hover:bg-blue-800 py-2">Verify</button>
                        { loading && (<p className="absolute left-1/2 -translate-x-1/2 -bottom-[75%]">Loading...</p>)}
                    </div>
                </form>
                <p className="sm:text-base text-sm text-center mt-6">Not a member? <Link className="text-blue-600" href={'/register'}>Sign up now!</Link></p>
            </div>
        </main>
    )
}