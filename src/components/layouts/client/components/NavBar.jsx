import React from 'react'
import logo from '../../../../assets/SuescaOnline.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

export default function NavBar() {
  const { pathname } = useLocation()
  return (
    <nav className="header__nav">
      <div className="suesca-container margin">
        <a href="." className="flex-items">
          <NavLink to="/" className="logo-container margin">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="text-suesca margin">
            <p>Suesca Online</p>
          </div>
        </a>
        <audio
          id="emisora"
          src="http://stream.zeno.fm/azz71c1gka0uv"
          controls
          autoplay
        ></audio>
      </div>
      <ul className="header__nav-list">
        <li className={`${pathname === '/' ? 'nav_active' : ''}`}>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className={`${pathname === '/turismo' ? 'nav_active' : ''}`}>
          <NavLink to="/turismo">Turismo</NavLink>
        </li>
        <li className={`${pathname === '/pautas' ? 'nav_active' : ''}`}>
          <NavLink to="/pautas">Pauta con Nosotros</NavLink>
        </li>
        <li className={`${pathname === '/sucesos' ? 'nav_active' : ''}`}>
          <NavLink to="/sucesos">Sucesos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
