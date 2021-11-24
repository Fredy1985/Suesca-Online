import Tarjetas from '../Tarjetas/Tarjetas';
import Publicidad from '../../data/publicidad.json';

const obtenerItemTarjeta = (item) => {
    console.log(item);
};

const confTarjetas = {
    img: true, //Si contienes imagenes  img=true
    col: "sm-4", //Columna boostrap
    hx: 4, //tamaño del títitulo (1 - 6) Ej si es (h1) hx= 1
    titulo: "titulo", // nombre del campo con la iformación que se depliega en el título de la tarjeta
    descripcion: "descripcion", //nombre del campo de la descripción
};

export default function Main(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Tarjetas array={Publicidad} obtenerItem={obtenerItemTarjeta} conf={confTarjetas} />;
                </div>
            </div>
        </div>
    )
}