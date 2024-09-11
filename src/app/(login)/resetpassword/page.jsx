'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
    const [authError, setAuthError] = useState("")
    const [loading, setLoading] = useState(false)

    const [sentOTP, setSentOTP] = useState(false)

    const router = useRouter()

    const requestOTP = async (e) => {
        const email = document.getElementById('email_input').value

        if (email === '')
            setAuthError("Missing Email")

        const body = { email: email }

        try {
            fetch('https://v1.test.socket.araby.ai/resetPassword/otp', {
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
                if ("success" in data && data.success !== true) //on fail
                {
                    setAuthError(data.message)
                    return
                }

                //OTP was sent successfully
                setSentOTP(true)

            }).catch(error => {setAuthError(error.message)})
        } catch (e) { setAuthError(e.message)}
        
    }

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
            confirmPassword: formData.get('confirmPassword'),
            otp: formData.get('otp'),
        }

        try {
            fetch('https://v1.test.socket.araby.ai/reset_password', {
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
                localStorage.removeItem('jwt_token')
                router.push(`/login`)
            

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
                <h1 className="text-xl text-center mb-8 sm:text-2xl">Reset Password</h1>
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-8">   
                        <div className="relative">
                            <input placeholder="Email" name="email" type="text" id="email_input" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                            { authError !== '' && (<p className="absolute text-red-600 text-sm left-0">{authError}</p>)}
                        </div>

                        <div className="relative">
                            <input placeholder="OTP" name="otp" type="otp" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                            <button className="absolute top-1/2 -translate-y-1/2 right-[20px] text-blue-600 hover:text-blue-800 border-l pl-4 border-gray-400" type="button" onClick={requestOTP}>{ !sentOTP && ('Request OTP')}{sentOTP && ('Sent OTP')}</button>
                        </div>

                        <div className="relative">
                            <input placeholder="Password" name="password" type="password" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                        </div>

                        <div className="relative">
                            <input placeholder="Confirm Password" name="confirmPassword" type="password" className="w-full p-3 rounded-lg focus:bg-white bg-gray-50 focus:outline-none focus:border-blue-600 border"></input>
                        </div>
                    </div>

                    <div className="relative mt-8 mb-4">
                        <button className="w-full text-white rounded-lg bg-blue-600 hover:bg-blue-800 py-2">Reset Password</button>
                        { loading && (<p className="absolute left-1/2 -translate-x-1/2 -bottom-[75%]">Loading...</p>)}
                    </div>
                </form>
                <p className="sm:text-base text-sm text-center mt-6">Not a member? <Link className="text-blue-600" href={'/register'}>Sign up now!</Link></p>
            </div>
        </main>
    )
}