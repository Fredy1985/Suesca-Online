import React, { useState } from 'react'
import { API } from '../../api'
import LoginView from './LoginView'
import Swal from 'sweetalert2'
export default function LoginContainer() {
  const [form, setForm] = useState({ correo: '', contrasela: '' })

  const handleChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const sendForm = async () => {
    // await  API.
    await API.POST('/administrador/login', form).then(({ data }) => {
      if (data.ok) {
        localStorage.setItem('token', data.token)
        window.location.href = '/'
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Datos incorrectos',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  return (
    <LoginView
      form={form}
      handleChangeText={handleChangeText}
      sendForm={sendForm}
    />
  )
}
