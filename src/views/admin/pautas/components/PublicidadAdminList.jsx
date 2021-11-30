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
                <th style={{ textAlign: 'center' }}>Nombre completo</th>
                <th style={{ textAlign: 'center' }}>Correo</th>
                <th style={{ textAlign: 'center' }}>Celular</th>
                <th style={{ textAlign: 'center' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {!publicidades.length && (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>No hay datos registrados</td>
                </tr>
              )}
              {publicidades.map((item) => (
                <tr key={item._id}>
                  <td class="text-bold-500">{item.nombreCompleto}</td>
                  <td class="text-bold-500" style={{ textAlign: 'center' }}>
                    {item.correo}
                  </td>
                  <td class="text-bold-500" style={{ textAlign: 'center' }}>
                    {item.celular}
                  </td>
                  <td>
                    <div className="row">
                      <div
                        className="col-md-6"
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <button
                          className={
                            item.estado
                              ? 'btn btn-success'
                              : 'btn btn-secondary'
                          }
                          // className="btn btn-secondary"
                          onClick={() => setEditForm(item)}
                          // onClick={() => eliminiar(item._id)}
                        >
                          {item.estado ? (
                            <i class="fas fa-envelope"></i>
                          ) : (
                            <i class="fas fa-envelope-open"></i>
                          )}

                          {/* */}
                        </button>
                      </div>
                      <div
                        className="col-md-6"
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <button
                          className="btn btn-danger"
                          onClick={() => eliminiar(item._id)}
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </div>
                      {/* <div
                        className="col-md-6"
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <button
                          className="btn btn-info"
                          onClick={() => setEditForm(item)}
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                      </div> */}
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
