import React, {Fragment} from 'react'
import './Styles/Services.css'

const Services = () => {
 return (
  <Fragment>             
    <section id="services" className="services">
        <div className="container" data-aos="fade-up">
            <header className="section-header">
                <h2>Services</h2>
            </header>
            <div className="row gy-3 p-b-5">
                <div className="col-sm-7 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="service-box boxwhite">
                        <h3 id="title-white"><i className="fas fa-users me-3"></i>Equipos dedicados</h3>
                        <p>Construye tu producto con un equipo dedicado de desarrolladores que estarán disponibles para ti a lo largo de todo el ciclo de vida del proyecto.</p>
                    </div>
                </div>
                <div className="col-sm-7 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-box">
                        <h3><i className="fas fa-tools me-3"></i>Desarrollo de MVPs</h3>
                        <p>¿Tienes alguna idea y te gustaría evaluar su víabilidad? Podemos desarrollar un producto minimo viable que podras usar para plasmar tus ideas en la realidad.</p>
                    </div>
                </div>
                <div className="col-sm-7 col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-box">
                        <h3><i className="fas fa-globe me-3"></i>Desarrollo de Apps</h3>
                        <p>¿Quieres darle una imágen a tu proyecto? Tenemos todo un equipo preparado para entender tu negocio y crear un sitio web atractivo y amigable para tus clientes.</p>
                    </div>
                </div>
                <div className="col-sm-7 col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-box boxwhite">
                        <h3 id="title-white"><i className="fas fa-cogs me-3"></i>Desarrollo de servicios</h3>
                        <p>Nuestros desarrolladores cuentan con conocimeintos de desarrollo Backend, con lo que podemos crear sistemas vanguardistas que alimenten y ayuden a optimizar tu negocio.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 </Fragment>
)
}

export default Services
