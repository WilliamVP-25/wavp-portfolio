import React from "react";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import About from "../components/About";

export default function App() {
    return (
        <Layout>
            <div id="header"
                 style={{backgroundImage: 'url(images/coding_2.jpg)', resizeMode: 'cover', backgroundSize: 'cover'}}>
                <div id="particles"/>
                <div className="social-media-links">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <img src="images/instagram logo.png" className="social-media" alt="instagram-logo"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <img src="images/facebook logo.png" className="social-media" alt="facebook-logo"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <img src="images/linkedin logo.png" className="social-media" alt="linkedin-logo"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <img src="images/twitter logo.png" className="social-media" alt="twitter-logo"/>
                    </a>
                </div>
                <div className="header-content">
                    <div className="header-content-box">
                        <div className="firstline"><span className="color">William <br/></span>Viteri Pinchao</div>
                        <div className="secondline">
                            I'm a
                            <span className="txt-rotate color" data-period="1000"
                                  data-rotate='[ " Web Developer." ]'/>
                            <span className="slash">|</span>
                        </div>
                        <div className="contact">
                            <a target="_blank" rel="noopener noreferrer" href="Mailto:wavp25@gmail.com">
                                <img src="images/mail.png" alt="email-pic" className="contactpic"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+573185539170">
                                <img src="images/call.png" alt="phone-pic" className="contactpic"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="header-image">
                    <img src="images/coding.jpg" alt="logo"/>
                </div>*/}
            </div>
            <About/>
            <Portfolio/>
            <Blogs/>
            <Contact/>
        </Layout>
    )
}
