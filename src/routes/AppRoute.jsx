import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../components/Inicio/Main'
import LayoutAdmin from '../components/layouts/admin/LayoutAdmin'
import LayoutClient from '../components/layouts/client/LayoutClient'
import HomeContainer from '../views/admin/home/HomeContainer'
import PautasAdminContainer from '../views/admin/pautas/PautasAdminContainer'
import PublicidadAdminContainer from '../views/admin/publicidad/PublicidadAdminContainer'
import SucesosAdminContainer from '../views/admin/sucesos/SucesosAdminContainer'
import TurismoAdminContainer from '../views/admin/turismo/TurismoAdminContainer'
import LoginContainer from '../views/auth/LoginContainer'
import PautasContainer from '../views/client/pautas/PautasContainer'
import PublicidadDetalle from '../views/client/publicidad/components/PublicidadDetalle'
import PublicidadContainer from '../views/client/publicidad/PublicidadContainer'
import SucesosContainer from '../views/client/sucesos/SucesosContainer'
import TurismoContainer from '../views/client/turismo/TurismoContainer'
import NoFound from '../views/NoFound'

export const AppRoute = () => {
  const token = localStorage.getItem('token')

  return (
    <Router>
      {/* <div className="principal"> */}
      {/* <Header /> */}
      <Routes>
        {!token ? (
          <>
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/" element={<LayoutClient />}>
              <Route index element={<PublicidadContainer />} />
              {/* <Route path="/registro" element={<Formulario />} /> */}
              <Route path="/publicidad" element={<PublicidadContainer />} />
              <Route path="/publicidad/:id" element={<PublicidadDetalle />} />
              <Route path="/turismo" element={<TurismoContainer />} />
              <Route path="/sucesos" element={<SucesosContainer />} />
              <Route path="/pautas" element={<></>} />
              <Route path="/*" element={<NoFound />} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<LayoutAdmin />}>
            <Route index element={<HomeContainer />} />
            <Route path="/publicidad" element={<PublicidadAdminContainer />} />
            <Route path="/turismo" element={<TurismoAdminContainer />} />
            <Route path="/sucesos" element={<SucesosAdminContainer />} />
            <Route path="/pautas" element={<PautasAdminContainer />} />
            <Route path="/*" element={<NoFound />} />
          </Route>
        )}
      </Routes>
      {/* </div> */}
    </Router>
  )
}
