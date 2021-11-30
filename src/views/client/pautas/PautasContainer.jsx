import React, { useCallback, useState } from 'react'
import { API } from '../../../api'
import PautasView from './PautasView'
import Swal from 'sweetalert2'

const initialForm = {
  nombreCompleto: '',
  correo: '',
  celular: '',
  descripcion: '',
}

export default function PautasContainer() {
  const [form, setForm] = useState(initialForm)

  const handleChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const resetForm = () => {
    setForm(initialForm)
  }

  const registrar = () => {
    API.POST(`/pauta`, form).then(({ data }) => {
      if (data.ok) {
        resetForm()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Envio exito!',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al registrar la pauta',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  return (
    <PautasView
      registrar={registrar}
      handleChangeText={handleChangeText}
      form={form}
    />
  )
}
