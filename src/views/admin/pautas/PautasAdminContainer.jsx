import React, { useCallback, useEffect, useState } from 'react'
import PautasAdminView from './PautasAdminView'
import Swal from 'sweetalert2'
import { API } from '../../../api'

const initialForm = {
  nombreCompleto: '',
  correo: '',
  celular: '',
  descripcion: '',
}

export default function PautasAdminContainer() {
  const [publicidades, setPublicidades] = useState([])
  const [form, setForm] = useState(initialForm)
  const [isEdit, setIsEdit] = useState(false)

  const handleChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const setEditForm = async (item) => {
    item.estado = false
    setForm(item)
    actualizar(item)
    setIsEdit(true)
  }

  const resetForm = () => {
    setForm(initialForm)
    setIsEdit(false)
  }

  const optener = useCallback(async () => {
    API.GET('/pauta').then(({ data }) => {
      if (data.ok) {
        setPublicidades(data.list)
      }
    })
  }, [setPublicidades])

  const registrar = () => {
    API.POST(`/pauta`, form).then(({ data }) => {
      if (data.ok) {
        optener()
        resetForm()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Publicidad registrada',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        optener()
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al registrar la publicidad',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  const actualizar = (form) => {
    console.log(form)
    API.PUT(`/pauta/${form._id}`, form).then(({ data }) => {
      if (data.ok) {
        optener()
        // resetForm()
        // Swal.fire({
        //   position: 'center',
        //   icon: 'success',
        //   title: 'Publicidad actualizada',
        //   showConfirmButton: false,
        //   timer: 1500,
        // })
      }
      //   else {
      //     optener()
      //     Swal.fire({
      //       position: 'center',
      //       icon: 'error',
      //       title: 'Error al actualizar la publicidad',
      //       showConfirmButton: false,
      //       timer: 1500,
      //     })
      //   }
    })
  }

  const eliminiar = (id) => {
    API.DEL(`/pauta/${id}`).then(({ data }) => {
      if (data.ok) {
        optener()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Publicidad eliminada',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  useEffect(() => {
    optener()
  }, [optener])

  return (
    <PautasAdminView
      form={form}
      publicidades={publicidades}
      eliminiar={eliminiar}
      handleChangeText={handleChangeText}
      isEdit={isEdit}
      registrar={registrar}
      actualizar={actualizar}
      resetForm={resetForm}
      setEditForm={setEditForm}
    />
  )
}
