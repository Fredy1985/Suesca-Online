import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
   
  } from "react-router-dom";
import { Header } from '../components/Inicio/Header';
import Main from '../components/Inicio/Main';
import { Formulario } from '../Formulario/Formulario';
import { Publicidad } from '../Publicidad/Publicidad';
import { Sucesos } from '../Sucesos/Sucesos';
import { Turismo } from '../Turismo/Turismo';

export const AppRoute = () => {
    return (
        <Router>
            <div className="principal">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/registro" element={<Formulario/>}/>
                    <Route path="/publicidad" element={<Publicidad/>}/>
                    <Route path="/turismo" element={<Turismo/>}/>
                    <Route path="/sucesos" element={<Sucesos/>}/>
                </Routes>
            </div>
        </Router>
    )
}
