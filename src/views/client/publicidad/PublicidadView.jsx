import React from 'react'
import { Link } from 'react-router-dom'
import { URL_IMAGE } from '../../../api'
import './styles.css'

export default function PublicidadView({ publicidades }) {
  return (
    <div class="page-heading">
      <section id="content-types" style={{ backgroundColor: '#F2F7FF' }}>
        <div class="row" style={{ padding: 50 }}>
          {publicidades.map((item) => (
            <div class="col-xl-4 col-md-6 col-sm-12">
              <Link
                to="/publicidad/id_de_publicidad"
                class="card card__publish"
              >
                <div class="card-content">
                  <img
                    src={URL_IMAGE + item.imagen}
                    class="card-img-top"
                    alt="singleminded"
                    height="400"
                  />
                  <hr />
                  <div class="card-body">
                    <h5 class="card-title">{item.titulo}</h5>
                    <p class="card-text">{item.descripcion}</p>
                  </div>
                </div>
                {/* <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul> */}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
