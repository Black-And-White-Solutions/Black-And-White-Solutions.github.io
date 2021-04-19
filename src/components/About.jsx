import React from 'react'
import './Styles/About.css'

const About = () => {

    return (
        <>
            <div className="container">
                <header className="section-header pt-5">
                    <h2>Nosotros</h2>
                </header>
                <div className="timeline">
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                            <h3 className=" text-light text-center">Historia</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>
                        </div>
                        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                            <img src="img/img13.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                            <time>2021-04-19</time>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                            <h3 className="text-light text-center">Vision</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>
                        </div>
                        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                            <img src="img/img13.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                            <time>2021-04-19</time>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                            <h3 className=" text-light text-center">Valores</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>
                        </div>
                        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                            <img src="img/img13.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                            <time>2021-04-19</time>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                            <h3 className=" text-light text-center">Mision</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>
                        </div>
                        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                            <img src="img/img13.png" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                            <time>2021-04-19</time>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
