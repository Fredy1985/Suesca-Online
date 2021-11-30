import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../../assets/SuescaOnline.jpg'
import { useLocation } from 'react-router-dom'

export default function SideBar() {
  const { pathname } = useLocation()

  return (
    <div id="sidebar" class="active">
      <div class="sidebar-wrapper active">
        <div class="sidebar-header">
          <div class="d-flex justify-content-between">
            <div class="">
              <a href="index.html">
                <img src={logo} alt="Logo" style={{ height: 70 }} />
              </a>
            </div>
            <div class="toggler">
              <a href="#" class="sidebar-hide d-xl-none d-block">
                <i class="bi bi-x bi-middle"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul class="menu">
            <li class="sidebar-title">Menu</li>

            <li class={`sidebar-item ${pathname === '/' ? 'active' : ''}`}>
              <NavLink className="sidebar-link" to="/">
                <i class="bi bi-grid-fill"></i>
                <span>Inicio</span>
              </NavLink>
            </li>
            <li
              class={`sidebar-item ${
                pathname === '/publicidad' ? 'active' : ''
              }`}
            >
              <NavLink className="sidebar-link" to="/publicidad">
                <i class="fas fa-ad"></i>
                <span>Publicidad</span>
              </NavLink>
            </li>

            <li
              class={`sidebar-item ${pathname === '/turismo' ? 'active' : ''}`}
            >
              <NavLink className="sidebar-link" to="/turismo">
                <i class="fas fa-route"></i>
                <span>Turismo</span>
              </NavLink>
            </li>
            <li
              class={`sidebar-item ${pathname === '/sucesos' ? 'active' : ''}`}
            >
              <NavLink className="sidebar-link" to="/sucesos">
                <i class="fas fa-mountain"></i>
                <span>Sucesos</span>
              </NavLink>
            </li>
            <li
              class={`sidebar-item ${pathname === '/pautas' ? 'active' : ''}`}
            >
              <NavLink className="sidebar-link" to="/pautas">
                <i class="fas fa-address-book"></i>
                <span>Pautas</span>
              </NavLink>
            </li>
            <li
              class="sidebar-item "
              style={{ backgroundColor: 'pink', borderRadius: 8 }}
            >
              <a
                href="/"
                class="sidebar-link"
                onClick={() => localStorage.removeItem('token')}
              >
                <i class="fas fa-sign-out-alt"></i>
                <span>Salir</span>
              </a>
            </li>
          </ul>
        </div>
        <button class="sidebar-toggler btn x">
          <i data-feather="x"></i>
        </button>
      </div>
    </div>
  )
}
