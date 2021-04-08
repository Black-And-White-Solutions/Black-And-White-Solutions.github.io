import React, { Fragment } from 'react'
import './Styles/SectionHero.css'
import  phone_showcase  from '../img/phone showcase.png';


const SectionHero = () => {

    return (
        <Fragment>
            <div className="container-fluid text-center " id="seccion">
                <div className="row mt-3" >
                    <div className="col-md-7 col-sm-12" id="testuno">
                        <h1 id="titulo">Confíanos tus ideas y nosotros desarrollamos la solución</h1>
                        <p id="parrafo">Black & White Solutions tiene todas las herramientas que necesitarás para realizar tus ideas y darle una nueva dimensión a tu emprendimiento</p>
                        <button type="button" id="boton" className="btn btn-dark">Contactanos</button> </div> 
                    

                    <div className="col-md-5 col-sm-12 h-2">
                        <img src={ phone_showcase } alt=""/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SectionHero
