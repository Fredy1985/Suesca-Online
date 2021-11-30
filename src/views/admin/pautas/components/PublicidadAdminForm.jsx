import React, { useState } from 'react'
import { URL_IMAGE } from '../../../../api'
import defaul from '../../../../assets/bannerLogin.jpg'

export default function PublicidadAdminForm({
  handleChangeText,
  form,
  resetForm,
  isEdit,
  actualizar,
  registrar,
}) {
  const [newImage, setNewImage] = useState(false)
  const handleFiles = () => {
    let files = document.querySelector(`#upload-images`)?.files

    if (files) {
      files = [files[0]]
      Object.keys(files).forEach((f, i) => {
        let reader = new FileReader()
        let preview = {}
        reader.onloadend = function () {
          if (files) {
            let base64 = typeof reader.result === 'string' ? reader.result : ''
            // filesAdd(base64);
            // console.log(base64);
            setNewImage(true)
            // formChange({ name: 'image', value: base64 })
            handleChangeText({ target: { name: 'imagen', value: base64 } })
          }
        }

        if (files) {
          reader.readAsDataURL(files[i])
        } else {
          if (preview) preview.src = ''
        }
      })
    }
  }

  return (
    <div className="row">
      <div className="form-group row">
        <div className="col-md-6">
          <label htmlFor="">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            onChange={handleChangeText}
            name="titulo"
            value={form.nombreCompleto}
            disabled
          />
        </div>
        <div className="col-md-6">
        <label htmlFor="">Correo</label>
          <input
            id="upload-images"
            name="imagen"
            type="text"
            className="form-control"
            placeholder="Seleccionar una imagen"
            value={form.correo}
            disabled
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-6">
        <label htmlFor="">Celular</label>
        <input
            id="upload-images"
            name="imagen"
            type="text"
            className="form-control"
            placeholder="Seleccionar una imagen"
            value={form.celular}
            disabled
          />
        </div>
        <div className="col-md-6">
        <label htmlFor="">Descripcón</label>
          <textarea
            name="descripcion"
            id=""
            cols="30"
            rows="3"
            className="form-control"
            placeholder="Descripón"
            onChange={handleChangeText}
            value={form.descripcion}
            disabled
          ></textarea>
        </div>
        <div className="col-md-12">
        <br/>
          <div className="row" style={{ height: '100%' }}>
            <div
              className="col-md-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button className="btn btn-danger" onClick={resetForm}>
                Cerrar
              </button>
            </div>
            {/* <div
              className="col-md-4"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <button
                className="btn btn-success"
                onClick={isEdit ? actualizar : registrar}
              >
                {isEdit ? 'Guardar cambios' : 'Registrar públicidad'}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
