import React, {Fragment} from 'react';

const About = () => {
    return (
        <Fragment>
            <div id="about">
                <div id="about-content">
                    <div className="about-header">
                        Sobre <span className="color">Mí</span>
                        <span className="header-caption">Conoceme <span className="color">.</span></span>
                    </div>
                    <div className="about-main">
                        <div className="about-first-paragraph wow">
                            <span className="about-first-line">
                                Soy un dedicado
                                <span className="color"> Desarrollador Web</span> de Ipiales, Nariño, Colombia.
                            </span>
                            <br/>
                            <span className="about-second-line">
                                Desarrollador web innovador, proactivo y con capacidad para desarrollar páginas y/o aplicaciones web elegantes y diseños de aplicaciones para clientes exigentes. Resolución de problemas de forma independiente. Organizado y con capacidad multitarea, con experiencia en programación de proyectos, mejora de diseños y verificación de código. Habilidades de HTML, CSS, Framework Laravel (PHP), Frontend y Backend en Javascript (MERN). Con voluntad de aprender y aportar mis habilidades a empresas de desarrollo web.
                            </span>
                            <div className="cv">
                                <a href="#">
                                    <button>Descargar <span className="colors">CV</span></button>
                                </a>
                            </div>
                        </div>
                        <div className="about-img">
                            <img src="images/me.jpg" alt="Photo"/>
                        </div>
                    </div>
                </div>

                <div id="services">
                    <div className="services-heading wow">
                        <span className="color">Mis</span> Servicios
                    </div>

                    <div className="services-content">
                        <div className="service-one service wow">
                            <div className="service-img">
                                <img src="images/coding.png" alt="service-one"/>
                            </div>
                            <div className="service-description">
                                <h2>Diseño Web</h2>
                                <p>Desarrollo aplicaciones web a la vanguardia con las mejores prácticas.</p>
                            </div>
                        </div>
                        <div className="service-two service wow">
                            <div className="service-img">
                                <img src="images/instagram.png" alt="service-two"/>
                            </div>
                            <div className="service-description">
                                <h2>Social Media</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam
                                    possimus</p>
                            </div>
                        </div>
                        <div className="service-three service wow">
                            <div className="service-img">
                                <img src="images/bulb.png" alt="service-three"/>
                            </div>
                            <div className="service-description">
                                <h2>Diseño Creativo</h2>
                                <p>Me apasiono diseñando webs creativas que satisfagan a mis clientes y encanten a los
                                    usuarios</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="skills">
                    <div className="skills-header">
                        Mis <span className="color"> Habilidades</span>
                    </div>
                    <div className="skills-content" style={{textAlign: 'center'}}>
                        <div className="skill-html skill">
                            <div className="skill-text">
                                <div className="html">
                                    HTML/CSS
                                </div>
                            </div>
                            <div className="html-prog wow prog">
                                <div className="html-progress wow">90%</div>
                            </div>
                        </div>
                        <div className="skill-html skill">
                            <div className="skill-text">
                                <div className="html">
                                    Javascript
                                </div>
                            </div>
                            <div className="html-prog wow prog">
                                <div className="js-progress wow">90%</div>
                            </div>
                        </div>
                        <div className="skill-html skill">
                            <div className="skill-text">
                                <div className="html">
                                    ReactJs
                                </div>
                            </div>
                            <div className="html-prog wow prog">
                                <div className="adobe-progress wow">90%</div>
                            </div>
                        </div>
                        <div className="skill-html skill">
                            <div className="skill-text">
                                <div className="html">
                                    PHP
                                </div>
                            </div>
                            <div className="html-prog wow prog">
                                <div className="php-progress wow">85%</div>
                            </div>
                        </div>
                        <div className="skill-html skill">
                            <div className="skill-text">
                                <div className="html">
                                    NodeJs
                                </div>
                            </div>
                            <div className="html-prog wow prog">
                                <div className="jquery-progress wow">75%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default About;