import React, { useCallback, useEffect, useState } from 'react'
import { API } from '../../../api'
import PublicidadAdminView from './PublicidadAdminView'
import Swal from 'sweetalert2'

const initialForm = {
  _id: '',
  titulo: '',
  imagen: '',
  descripcion: '',
}

export default function PublicidadAdminContainer() {
  const [publicidades, setPublicidades] = useState([])
  const [form, setForm] = useState(initialForm)
  const [isEdit, setIsEdit] = useState(false)

  const handleChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const setEditForm = (item) => {
    setForm(item)
    setIsEdit(true)
  }

  const resetForm = () => {
    setForm(initialForm)
    setIsEdit(false)
  }

  const optener = useCallback(async () => {
    API.GET('/publicidad').then(({ data }) => {
      if (data.ok) {
        setPublicidades(data.list)
      }
    })
  }, [setPublicidades])

  const registrar = () => {
    API.POST(`/publicidad`, form).then(({ data }) => {
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

  const actualizar = () => {
    API.PUT(`/publicidad/${form._id}`, form).then(({ data }) => {
      if (data.ok) {
        optener()
        resetForm()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Publicidad actualizada',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        optener()
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al actualizar la publicidad',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  const eliminiar = (id) => {
    API.DEL(`/publicidad/${id}`).then(({ data }) => {
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
    <PublicidadAdminView
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
