import { GoogleOAuthProvider } from '@react-oauth/google'
import './layout.scss'

export default function LoginLayout({ children }) {
    return (
        <GoogleOAuthProvider clientId="1000941165127-u15hmbpi46mu5nljpfeou08fjgsc3rr3.apps.googleusercontent.com">
            <main className="login-layout flex items-center justify-center w-screen min-h-screen">
                <aside className="flex-1 lg:flex hidden flex-col justify-center px-24">
                    <h1 className='text-6xl font-bold text-blue-500'>Image <span className='text-indigo-500'>Enhance</span></h1>
                    <p className='mt-6 text-blue-600 text-xl'>Simplifying image processing with AI</p>
                </aside>
                {children}
            </main>
        </GoogleOAuthProvider>
    )
}