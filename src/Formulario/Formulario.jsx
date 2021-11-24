import React, {useState,useEffect} from 'react'
import './style.css'
import axios from 'axios';


const URL='http://localhost:3000/registro';

export const Formulario = () => {

const [listaUsuario, setListaUsuario]=useState([])
const [nombresapellidos, setNombresApellidos]=useState('')
const [email, setEmail]=useState('')
const [celular, setCelular]=useState('')
const [mensaje, setMensaje]=useState('')

useEffect(()=>{getUsuarios()},[])

const getUsuarios=async()=>{
  const res=await axios.get(URL)
  setListaUsuario(res.data)
}

const addUsuarios=async ()=>{
  let obj={nombresapellidos,email,celular,mensaje}
  const res=await axios.post(URL, obj)
  getUsuarios()
  setNombresApellidos('')
  setEmail('')
  setCelular('')
  setMensaje('')
}

    return (
       <main> <form>
       <div className="form-group">
         <label for="exampleInputEmail1">Nombres y Apellidos</label>
         <input type="text" className="form-control" onChange={(e)=>setNombresApellidos(e.target.value)} value={nombresapellidos} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombres y Apellidos"/>
         
       </div>
       
       <div className="form-group">
         <label for="exampleInputPassword1">Email</label>
         <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} id="exampleInputPassword1" placeholder="Email"/>
       </div>
     
       <div className="form-group">
         <label for="exampleInputPassword1">Celular</label>
         <input type="text" className="form-control" onChange={(e)=>setCelular(e.target.value)} value={celular} id="exampleInputPassword1" placeholder="Celular"/>
       </div>
     
       <div className="form-group">
         <label for="exampleInputPassword1">Mensaje</label>
         <textarea type="text" className="form-control" onChange={(e)=>setMensaje(e.target.value)} value={mensaje} id="exampleInputPassword1" placeholder="Tu Mensaje" rows="4"></textarea>
       </div>
     
       <button type="submit" className="btn btn-primary" onClick={addUsuarios}>Enviar Mensaje</button>

        <div className="row p-2 mt-3">
          {listaUsuario.map(item=>(
        <div key={item._id} className="card border-primary p-3 col-md-4 m-2">
        <p>Nombre y Apellido: {item.nombresapellidos}</p>
        <p>Email: {item.email}</p>
        <p>Celular: {item.celular}</p>
        <p>Mensaje: {item.mensaje}</p>
        </div>
        ))}
        </div>
     </form>
     </main>
    )
}
