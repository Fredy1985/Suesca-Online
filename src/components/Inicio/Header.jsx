import React, { useState } from 'react';
import logo from '../../assets/SuescaOnline.jpg';
import Botones from '../Botones/Botones';
import Secciones from '../../data/secciones.json';

// estilos: twitter, round, grass
// orienta: linea, bloque
const confBotones = {
    orienta: "linea",
    estilo: "grass",
};

export default function Header(props) {

    const [compActual, setCompActual] = useState(null)

    const obtenerBtn = (item) => {
        //Obtiene el botón seleccionado:        
        console.log("Item:", item);
        cargarVistas(item.id)
    };

    const cargarVistas = (opcion) => {
        switch (opcion) {
            case 1:
                setCompActual(<h1>Publicidad</h1>)
                break;
            case 2:
                setCompActual(<h1>Turismo</h1>)
                break;
            case 3:
                setCompActual(<h1>Contacto</h1>)
                break;
            case 4:
                setCompActual(<h1>Buscador</h1>)
                break;
            default:
                console.log('Opcion fuera de rango')
                break;
        }
    }

    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img src={logo} height={45} />
                <h1>Suesca Online</h1>
                <audio
                    id="emisora"
                    src="http://stream.zeno.fm/azz71c1gka0uv"
                    controls
                    autoplay
                ></audio>
            </div>
            <div className={"botones"}>
                <Botones
                    conf={confBotones}
                    array={Secciones}
                    obtenerBtn={obtenerBtn}
                />
            </div>
            <div>{compActual}</div>
        </div>
    )
}