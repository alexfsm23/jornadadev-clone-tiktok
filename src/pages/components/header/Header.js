import React from 'react'
import './Header.css'
import logo from '../../../images/tiktok_logo.png'
import search from '../../../images/search.png'

function Header () {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt='Tiktok Logo'/>
            <form>
                <input type='text' placeholder='Procurar' />
                <button>
                    <img className='search' src={search} alt='Buscar'/>
                </button>
            </form>
            <button class='login'>
                    Entrar
            </button>
        </header>
    )
}

export default Header