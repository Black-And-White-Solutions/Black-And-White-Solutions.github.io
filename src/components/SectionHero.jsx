import React, { useState, Fragment } from 'react'
import './Styles/SectionHero.css'
import  phone_showcase  from '../img/phone showcase.png';


const SectionHero = () => {
    const [colorChange, setColorchange] = useState(false);  
    const changeSectionColor = () =>{
       if(window.scrollY >= 30){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    }
    window.addEventListener('scroll', changeSectionColor);

    return (
        <Fragment>
           <div className = {colorChange ? 'section colorChange' : 'section'}>
             <div className="container-fluid " >
                <div className="row mt-2" >
                    <div className="col-md-7 col-sm-12">
                        <h1>Confíanos tus ideas y nosotros desarrollamos la solución</h1>
                        <p>Black & White Solutions tiene todas las herramientas que necesitarás para realizar tus ideas y darle una nueva dimensión a tu emprendimiento</p>
                        <button type="button" className ="btn btn-primary ">Contactanos</button>
                    </div> 
                    

                    <div className="col-md-5 col-sm-12 h-2">
                        <img src={ phone_showcase } alt=""/>
                    </div>
                </div>
              </div>
            </div> 
        </Fragment>
    )
}

export default SectionHero
