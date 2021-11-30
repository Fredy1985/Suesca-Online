import React from 'react'

import PublicidadAdminForm from './components/PublicidadAdminForm'
import PublicidadAdminList from './components/PublicidadAdminList'

export default function PautasAdminView({
  publicidades,
  eliminiar,
  handleChangeText,
  isEdit,
  registrar,
  form,
  resetForm,
  setEditForm,
  actualizar,
}) {
  return (
    <div>
      <div class="page-heading">
        <h3>Administración de pautas</h3>
      </div>
      <div class="card">
        <div class="card-header">
          {isEdit && (
            <>
              {' '}
              <div
                className="bg-info p-1"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
              >
                <h4 class="card-title ">Información de la pauta</h4>
              </div>
              <br />
            </>
          )}

          <div className="row">
            {isEdit && (
              <div className="col-md-12">
                <PublicidadAdminForm
                  handleChangeText={handleChangeText}
                  form={form}
                  resetForm={resetForm}
                  isEdit={isEdit}
                  actualizar={actualizar}
                  registrar={registrar}
                />

                <hr />
              </div>
            )}

            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
              />
            </div>
          </div>
        </div>
        {
          <PublicidadAdminList
            publicidades={publicidades}
            setEditForm={setEditForm}
            eliminiar={eliminiar}
          />
        }
      </div>
    </div>
  )
}
