import React, {Fragment} from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"/>
                <script src="/js/jquery.min.js"/>
                <script src="/js/index.js"/>
                <div className="footer">
                    <div className="footer-text">
                        <img src="./images/copyright.png" alt="copyright-img" className="images"
                             height="14px"/> William Viteri Pinchao
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};
export default Footer;