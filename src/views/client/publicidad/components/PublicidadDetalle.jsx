import React from 'react'
import bn1 from '../../../../assets/bannerLogin.jpg'
import bn2 from '../../../../assets/bgTurismo.jpeg'

export default function PublicidadDetalle() {
  return (
    <>
      <br />
      {/* <h2 style={{ textAlign: 'center' }}>Detalle de publicidad</h2> */}
      <br />
      <div className="row">
        <div className="col-md-6">
          <div
            id="carouselExampleCaptions"
            style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner" style={{ width: '60%' }}>
              <div class="carousel-item active">
                <img src={bn1} class="d-block w-100" alt="..." height={'600'} />
              </div>
              <div class="carousel-item">
                <iframe
                  width="600"
                  height="315"
                  src="https://www.youtube.com/embed/cWp3sgVUQV4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="carousel-item">
                <img src={bn2} class="d-block w-100" alt="..." height={'600'} />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Nombre de entidad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            nemo incidunt reiciendis distinctio exercitationem in. Distinctio
            obcaecati, quibusdam, ab, consectetur quas expedita corporis natus
            nemo incidunt impedit similique tempore eligendi? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Maxime nemo incidunt
            reiciendis distinctio exercitationem in. Distinctio obcaecati,
            quibusdam, ab, consectetur quas expedita corporis natus nemo
            incidunt impedit similique tempore eligendi? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Maxime nemo incidunt reiciendis
            distinctio exercitationem in. Distinctio obcaecati, quibusdam, ab,
            consectetur quas expedita corporis natus nemo incidunt impedit
            similique tempore eligendi? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Maxime nemo incidunt reiciendis distinctio
            exercitationem in. Distinctio obcaecati, quibusdam, ab, consectetur
            quas expedita corporis natus nemo incidunt impedit similique tempore
            eligendi? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Maxime nemo incidunt reiciendis distinctio exercitationem in.
            Distinctio obcaecati, quibusdam, ab, consectetur quas expedita
            corporis natus nemo incidunt impedit similique tempore eligendi?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            nemo incidunt reiciendis distinctio exercitationem in. Distinctio
            obcaecati, quibusdam, ab, consectetur quas expedita corporis natus
            nemo incidunt impedit similique tempore eligendi?
          </p>
        </div>
      </div>
    </>
  )
}
