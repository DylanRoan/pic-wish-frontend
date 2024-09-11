'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'
import { faAngleUp, faBars, faCaretUp, faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Header() {
    const [navbarState, setNavbar] = useState(false)
    const [loggedin, setLoggedin] = useState(false)

    useEffect(() => {
        const jwt_token = localStorage.getItem('jwt_token')
        if (jwt_token !== null)
            setLoggedin(true)
    }, [])

    const logout = () => {
        localStorage.removeItem('jwt_token')
        setLoggedin(false)
    }

    return (
        <header className='fixed w-screen bg-white z-50'>
        {/* Header content on Large (1024px) breakpoints */}
        <aside className="content-btns">
            <h1 className='text-2xl font-bold'>Image Enhancer</h1>
            {/* Hide on smaller breakpoints (1024 >) */}
            <ul>
                <DropDownComponent name={'AI Tools'}>
                    <DropDownImages></DropDownImages>
                </DropDownComponent>
                <li>
                    <span>
                        <p>Photo Editor</p>
                        <FontAwesomeIcon icon={faAngleUp} className='caret-up'></FontAwesomeIcon>
                    </span>
                </li>
                <DropDownComponent name={'For Developers(APIs)'}>
                    <DropDownImages></DropDownImages>
                </DropDownComponent>
                <li>
                    <a>Pricing</a>
                </li>
            </ul>
        </aside>
        {
            !loggedin && (
                <aside className="login-btns">
                    <a href='/login' className="login cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in-out">Login</a>
                    <a href='/register' className="signup cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-in-out">Sign up</a>
                </aside>
            )
        }
        {
            loggedin && (
                <aside className="login-btns">
                    <button onClick={logout} className="login cursor-pointer hover:text-blue-600 transition-all duration-200 ease-in-out">Logout</button>
                </aside>
            )
        }

        {/* Header content on smaller (1024px >) breakpoints */}
        <aside className="lg:hidden flex">
            <FontAwesomeIcon icon={navbarState ? faX : faBars} onClick={() => navbarState ? setNavbar(false) : setNavbar(true)}></FontAwesomeIcon>
        </aside>

        {/* The navbar itself for smaller devices */}
        { navbarState && (<NavBar></NavBar>)}
      </header>
    )
}

function NavBar() {
    return (
        <nav className='flex flex-col fixed bg-white left-0 top-[50px] border-t-2 border-blue-600 w-full gap-2 p-6'>
            <p className='text-xl'>Login</p>
            <p className='text-xl'>Signup</p>
            <NavBarDropDown name={'AI Tools'}>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
            </NavBarDropDown>

            <NavBarDropDown name={'Photo Editor'}>
                <h2 className='font-bold text-xl'>Online Photo Editor</h2>
                <div className='flex gap-4'><img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img><p>Sample Tool</p></div>
                <div className='flex gap-4'><img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img><p>Sample Tool</p></div>
                <div className='flex gap-4'><img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img><p>Sample Tool</p></div>
            </NavBarDropDown>

            <NavBarDropDown name={'For Developers(APIs)'}>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
                <div className='flex gap-4'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div className='flex flex-col'><h3 className='font-bold'>Sample Option</h3><p>Sample Description</p></div>
                </div>
            </NavBarDropDown>
            <p className='text-xl'>Pricing</p>
        </nav>
    )
}

function NavBarDropDown({ children, name }) {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className='flex flex-col gap-2'>
            <p className='text-xl' onClick={() => dropdown ? setDropdown(false) : setDropdown(true)}>{name}<FontAwesomeIcon icon={faAngleUp} className={`ml-2 duration-200 transition-all ease-in-out ${dropdown ? 'rotate-180' : ''}`}></FontAwesomeIcon></p>
            {dropdown && children}
        </div>
    )
}

function DropDownComponent({ name, children }) {
    const [hover, setHover] = useState(false)

    return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <span>
            <p>{name}</p>
            <FontAwesomeIcon icon={faAngleUp} className='caret-up'></FontAwesomeIcon>
        </span>
        { hover && children}
    </li>)
}


function DropDownImages() {

    const sample = [{}, {} ,{} ,{}, {}]
    return (
        <section className='dropdown-container ai-tools'>
            
            {
                sample.map((o, i) => 
                <div key={i} className='dropdown-btn'>
                    <img src='https://cfcdn.apowersoft.info/astro/picwish/_astro/header-api-list.56bded24.svg'></img>
                    <div>
                        <h3>Sample Option</h3>
                        <p>Sample Description</p>
                    </div>
                </div>
                )
            }
        </section>
    )
}