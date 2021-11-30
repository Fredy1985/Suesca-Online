import React from 'react'
import './style/header.css'
import logo from './images/SuescaOnline.png'
import { Display } from './Display'
import { Link, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="suesca-container margin">
            <a href="." className="flex-items">
              <Link to="/" className="logo-container margin">
                <img src={logo} alt="logo" />
              </Link>
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
            <li>
              <Link to="/publicidad">Publicidad</Link>
            </li>
            <li>
              <Link to="/turismo">Turismo</Link>
            </li>
            <li>
              <Link to="/pautas">Pauta con Nosotros</Link>
            </li>
            <li>
              <Link to="/sucesos">Sucesos</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="contenido__header">
          <h1 className="title">Hacemos realidad lo imposible</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            quod!
          </p>
        </div> */}
      </header>
      <Outlet />
    </>
  )
}
