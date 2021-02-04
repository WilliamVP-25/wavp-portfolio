import React, {Fragment} from 'react';

const Portfolio = () => {
    return (
        <Fragment>
            <div id="portfolio">
                <div className="portfolio-header"><span className="color"> Mi </span> Portafolio
                    <span className="header-caption"> Algunos de mis <span className="color"> Proyectos</span></span>
                </div>
                <div id="portfolio-content">
                    <div className="portfolio portfolio-first">
                        <div className="portfolio-image">
                            <img src="images/mern.png" alt="portfolio-first"/>
                        </div>
                        <div className="portfolio-text">
                            <h2>MERN Tasks</h2>
                            <p>Sencilla aplicación de tareas hecha con MERN Stack con diseño amigable.</p>
                            <p>
                                <strong>Username: </strong> prueba2@mail.com <br/>
                                <strong>Contraseña: </strong> Prueba2<b/>
                            </p>
                            <div className="button">
                                <a rel="noopener noreferrer" target="_blank"
                                   href="https://mern-tasks-wavp25.netlify.app/">
                                    <button>
                                    <span className="index">
                                        Ver Proyecto <i className="gg-arrow-right"/>
                                    </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio portfolio-second">
                        <div className="portfolio-image">
                            <img src="images/cryptoapp.png" alt="portfolio-second"/>
                        </div>
                        <div className="portfolio-text">
                            <h2>Crypto React App</h2>
                            <p>Aplicación React que consume API de conversión de cryptomonedas para varias divisas</p>
                            <div className="button">
                                <a rel="noopener noreferrer" target="_blank"
                                   href="https://crypt-api-react-app-wavp25.netlify.app/">
                                    <button><span className="index"> Ver Proyecto
                                    <i className="gg-arrow-right"/></span>
                                    </button>
                                </a></div>
                        </div>
                    </div>

                    <div className="portfolio portfolio-third">
                        <div className="portfolio-image">
                            <img src="images/lms.png" alt="portfolio-third"/>
                        </div>
                        <div className="portfolio-text">
                            <h2>Learning Management System Laravel</h2>
                            <p>Aplicación hecha con Framework PHP Laravel y algunos componentes con React.js para admininstrar y tomar cursos online.</p>
                            <div className="button">
                            {/*<a rel="noopener noreferrer" target="_blank" href="https://learning.encantapp.com/">
                                    <button><span className="index"> Ver Proyecto
                                    <i className="gg-arrow-right"/></span>
                                    </button>
                                </a>*/}
                            </div>
                        </div>
                    </div>
        
                    <div className="portfolio portfolio-third">
                        <div className="portfolio-image">
                            <img src="images/hotel.png" alt="portfolio-third"/>
                        </div>
                        <div className="portfolio-text">
                            <h2>Learning Management System Laravel</h2>
                            <p>Página web sencilla hecha con Next.js haciendo uso de Dato CMS para guardar los datos.</p>
                            <div className="button">
                            <a rel="noopener noreferrer" target="_blank" href="https://landing-hotel-gatsby.netlify.app">
                                    <button><span className="index"> Ver Proyecto
                                    <i className="gg-arrow-right"/></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
        

                    <div className="portfolio portfolio-fourth">
                        <div className="portfolio-text">
                            <h2>Trabajando en más...</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Portfolio;
