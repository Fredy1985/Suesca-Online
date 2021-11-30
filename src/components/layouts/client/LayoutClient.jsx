import React from 'react'
import './header.css'
import bn1 from '../../../assets/bannerLogin.jpg'
import bn2 from '../../../assets/bgTurismo.jpeg'
import { Link, Outlet, useLocation } from 'react-router-dom'
import PautasContainer from '../../../views/client/pautas/PautasContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function LayoutClient() {
  const { pathname } = useLocation()

  const loadView = () => {
    switch (pathname) {
      case '/':
        return (
          <div
            id="carouselExampleCaptions"
            style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              paddingTop: '109px'
            }}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" style={{ width: '60%',height:'100%' }}>
              <div class="carousel-item active">
                <img src={bn1} class="d-block w-100" alt="..." height={'500'} />
              </div>
              <div class="carousel-item">
                <img src={bn2} class="d-block w-100" alt="..." height={'500'} />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        )
      case '/turismo':
        return (
          <div className="contenido__header">
            <h1 className="title">Turismo</h1>
          </div>
        )
      case '/sucesos':
        return (
          <div className="contenido__header">
            <h1 className="title">Sucesos</h1>
          </div>
        )
      case '/pautas':
        return <PautasContainer />

      case '/publicidad/id_de_publicidad':
        return (
          <div className="contenido__header">
            <h1 className="title">Detalle de publicidad</h1>
          </div>
        )

      default:
        return <h2 style={{ textAlign: 'center' }}>Detalle de publicidad</h2>
    }
  }

  const fondo = () => {
    switch (pathname) {
      case '/pautas':
        return 'header_pauta'
      case '/turismo':
        return 'header_turismo'
      case '/sucesos':
        return 'header_suceso'
      default:
        return ''
    }
  }

  return (
    <>
      <header className={`header ${fondo()}`}>
        <NavBar />
        {loadView()}
      </header>
      <Outlet />
      {pathname !== '/pautas' && <Footer />}
    </>
  )
}
