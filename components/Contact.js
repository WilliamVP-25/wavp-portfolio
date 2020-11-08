import React, {Fragment, useState} from 'react';
import axios from 'axios'

const axiosClient = axios.create({
    baseURL: "https://wavp-portfolio.herokuapp.com",
});


const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [alert, setAlert] = useState('');

    const handleChange = event => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value
        });
    }
    const {email, name, message, subject} = state

    const handlePress = async () => {
        setAlert('')
        let mail = await axiosClient.post('/api/form', state);
        if (mail.data.success) {
            setAlert(mail.data.msg)
            setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        } else {
            setAlert(mail.data.msg)
        }
    }

    return (
        <Fragment>
            <div id="contact">
                <div className="contact-header">Contacta<span className="color">me</span>
                    <div className="contact-header-caption">Ponte en <span className="color"> Contacto.</span></div>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <div className="form-header">
                            Enviame un mensaje
                        </div>
                        <form id="myForm" action="#">
                            <div className="input-line">
                                <input
                                    value={name}
                                    id="name" name="name"
                                    onChange={handleChange}
                                    type="text" placeholder="Nombre"
                                    className="input-name"/>
                                <input
                                    value={email}
                                    id="email" name="email"
                                    onChange={handleChange}
                                    type="email" placeholder="Email"
                                    className="input-name"/>
                            </div>
                            <input
                                value={subject}
                                type="text" name="subject"
                                onChange={handleChange} id="subject" placeholder="Asunto"
                                className="input-subject"/>

                            <textarea
                                value={message}
                                id="body" name="message"
                                onChange={handleChange} className="input-textarea"
                                placeholder="Mensaje"/>

                            {alert && <span className="color">{alert}</span>}

                            <button onClick={handlePress} type="button" id="submit" value="send">Enviar</button>
                        </form>

                    </div>

                    <div className="contact-info">
                        <div className="contact-info-header">
                            Información de Contacto
                        </div>
                        <div className="contact-info-content">
                            <div className="contect-info-content-line">
                                <img src="./images/icon-name.png" className="icon" alt="name-icon"/>
                                <div className="contact-info-icon-text">
                                    <h6>Nombre</h6>
                                    <p>William Alfonso Viteri Pinchao</p>
                                </div>
                            </div>
                            <div className="contect-info-content-line">
                                <img src="./images/icon-location.png" className="icon" alt="location-icon"/>
                                <div className="contact-info-icon-text">
                                    <h6>Ubicación</h6>
                                    <p>Ipiales, Colombia</p>
                                </div>
                            </div>
                            <div className="contect-info-content-line">
                                <img src="./images/icon-phone.png" className="icon" alt="phone-icon"/>
                                <div className="contact-info-icon-text">
                                    <h6>Teléfono</h6>
                                    <p>+57 318 5539170</p>
                                </div>
                            </div>

                            <div className="contect-info-content-line">
                                <img src="./images/icon-email.png" className="icon" alt="email-icon"/>
                                <div className="contact-info-icon-text">
                                    <h6>Email</h6>
                                    <p>wavp25@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Contact;
