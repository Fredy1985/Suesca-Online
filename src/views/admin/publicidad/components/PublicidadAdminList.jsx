import React from 'react'
import { URL_IMAGE } from '../../../../api'

export default function PublicidadAdminList({
  publicidades,
  eliminiar,
  setEditForm,
}) {
  return (
    <div class="card-content">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-lg">
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Titulo</th>
                <th style={{ textAlign: 'center' }}>Imagen</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {publicidades.map((item) => (
                <tr key={item._id}>
                  <td class="text-bold-500">{item.titulo}</td>
                  <td class="text-bold-500" style={{ textAlign: 'center' }}>
                    <img src={URL_IMAGE + item.imagen} height="150" alt="" />
                  </td>
                  <td>
                    <div className="row">
                      <div
                        className="col-md-6"
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      >
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminiar(item._id)}
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      <div
                        className="col-md-6"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <button
                          className="btn btn-warning"
                          onClick={() => setEditForm(item)}
                        >
                          <i class="fas fa-pencil-alt"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
