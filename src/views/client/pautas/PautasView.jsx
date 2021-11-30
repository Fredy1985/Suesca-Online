import React from 'react'

export default function PautasView({ registrar, handleChangeText, form }) {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop:'100px'
      }}
    >
      <div class="col-md-6 col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Solicita tu servicio de públicidad</h4>
          </div>
          <div class="card-content">
            <div class="card-body">
              <form class="form form-vertical">
                <div class="form-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="first-name-icon">Nombres y Apellidos</label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Nombre completo"
                            id="first-name-icon"
                            name="nombreCompleto"
                            value={form.nombreCompleto}
                            onChange={handleChangeText}
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="email-id-icon">Correo</label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Correo"
                            id="email-id-icon"
                            name="correo"
                            value={form.correo}
                            onChange={handleChangeText}
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-envelope"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="mobile-id-icon">Celular</label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Celular"
                            id="mobile-id-icon"
                            name="celular"
                            value={form.celular}
                            onChange={handleChangeText}
                          />
                          <div class="form-control-icon">
                            <i class="bi bi-phone"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group has-icon-left">
                        <label for="password-id-icon">Descripción</label>
                        <div class="position-relative">
                          <textarea
                            class="form-control"
                            placeholder="Descripción"
                            name="descripcion"
                            value={form.descripcion}
                            onChange={handleChangeText}
                          ></textarea>

                          <div class="form-control-icon">
                            <i class="far fa-comment-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-primary me-1 mb-1"
                        onClick={registrar}
                      >
                        Envíar
                      </button>
                      {/* <button
                        type="reset"
                        class="btn btn-light-secondary me-1 mb-1"
                      >
                        Reset
                      </button> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
