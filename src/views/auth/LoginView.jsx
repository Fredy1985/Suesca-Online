import React from 'react'
import logo from '../../assets/SuescaOnline.jpg'
import bannerLogin from '../../assets/bannerLogin.jpg'
import { NavLink } from 'react-router-dom'

export default function LoginView({ form, handleChangeText, sendForm }) {
  return (
    <div id="auth">
      <div class="row h-100">
        <div class="col-lg-5 col-12">
          <div id="auth-left">
            <div class="">
              <NavLink
                to="/"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img src={logo} alt="Logo" height="150" />
              </NavLink>
            </div>
            <h1 class="auth-title" style={{ textAlign: 'center' }}>
              Iniciar sesión.
            </h1>
            <p class="auth-subtitle mb-5">
              Inicie sesión con los datos de Administrador.
            </p>

            <form>
              <div class="form-group position-relative has-icon-left mb-4">
                <input
                  name="correo"
                  type="text"
                  class="form-control"
                  placeholder="Correo"
                  value={form.correo}
                  onChange={handleChangeText}
                />
                <div class="form-control-icon">
                  <i class="bi bi-person"></i>
                </div>
              </div>
              <div class="form-group position-relative has-icon-left mb-4">
                <input
                  name="contraseña"
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  value={form.contraseña}
                  onChange={handleChangeText}
                />
                <div class="form-control-icon">
                  <i class="bi bi-shield-lock"></i>
                </div>
              </div>
              {/* <div class="form-check form-check-lg d-flex align-items-end">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label text-gray-600"
                  for="flexCheckDefault"
                >
                  Keep me logged in
                </label>
              </div> */}
              <button
                type="button"
                onClick={sendForm}
                class="btn btn-primary btn-block btn-lg shadow-lg mt-5"
              >
                Ingresar
              </button>
            </form>
            {/* <div class="text-center mt-5 text-lg fs-4">
              <p class="text-gray-600">
                Don't have an account?{' '}
                <a href="auth-register.html" class="font-bold">
                  Sign up
                </a>
                .
              </p>
              <p>
                <a class="font-bold" href="auth-forgot-password.html">
                  Forgot password?
                </a>
                .
              </p>
            </div> */}
          </div>
        </div>
        <div class="col-lg-7 d-none d-lg-block">
          <div id="auth-right">
            <img src={bannerLogin} alt="" style={{ height: '100vh' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
