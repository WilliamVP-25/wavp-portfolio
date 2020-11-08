import React, {Fragment} from 'react';

const Header = () => {
    return (
        <Fragment>
            <div className="cursor"/>
            <div id="loader">
                <span className="color">William</span>Viteri Pinchao
            </div>
            <div id="breaker"/>
            <div id="breaker-two"/>
            <div id="navigation-content">
                <div className="logo">
                    <a href={"/"} rel="noopener noreferrer">
                        <img src="images/willy wonka logo.png" alt="logo"/>
                    </a>
                </div>
                <div className="navigation-close">
                    <span className="close-first"/>
                    <span className="close-second"/>
                </div>
                <div className="navigation-links">
                    <a href="#" data-text="HOME" id="home-link">INICIO</a>
                    <a href="#" data-text="ABOUT" id="about-link">ACERCA DE</a>
                    <a href="#" data-text="BLOG" id="blog-link">BLOG</a>
                    <a href="#" data-text="PORTFOLIO" id="portfolio-link">PORTAFOLIO</a>
                    <a href="#" data-text="CONTACT" id="contact-link">CONTACTO</a>
                </div>
            </div>
            <div id="navigation-bar">
                <img src="images/willy wonka logo.png" alt="logo"/>
                <div className="menubar">
                    <span className="first-span"/>
                    <span className="second-span"/>
                    <span className="third-span"/>
                </div>
            </div>
        </Fragment>
    );
};
export default Header;