import React, { Fragment } from 'react'
import './Styles/SectionHero.css'
import  phone_showcase  from '../img/phone showcase.png';

const SectionHero = () => {
    return (
        <Fragment>
            <div className="container home__hero-section">
                <div className="row home__hero-row">
                     <div className="col">
                        <div className="home__hero-text-wrapper">
                            <h1 className="heading">Confíanos tus ideas y nosotros desarrollamos la solución</h1>
                            <p className="home__hero-subtitle">Black & White Solutions tiene todas las herramientas que necesitarás para realizar tus ideas y darle una nueva dimensión a tu emprendimiento</p> 
                            <button className="btn btn-danger">Contactanos</button>   
                        </div>
                     </div>
                     <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={ phone_showcase } alt="Phone" />
                        </div>
                     </div>     
                </div>
            </div>
        </Fragment>
    )
}

export default SectionHero
