import { useState } from "react";
import { useMutation } from 'react-query';
import { fetchData } from "../../services/apiFormSubmit";
import ReCAPTCHA from "react-google-recaptcha";

import { Loader } from "../loader";
import { Congrats } from "../congrats";
import { Error } from "../congrats/error";

import './form.css';

function Form() {

    const [name, setName] = useState('');
    const [franchise, setFranchise] = useState('');
    const [digits, setDigits] = useState('');
    const [typeDocument, setTypeDocument] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');
    const [documentFile, setDocumentFile] = useState(null);
    const [ticket, setTicket] = useState('');
    const [otherPersons, setOtherPersons] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);
    const [showForm, setShowForm] = useState(true);

    const mutation = useMutation(fetchData, {
        onSuccess: (data) => {
            console.log(data);
            setShowForm(false);
        },
        onError: (error) => {
            console.error(error);
            setShowForm(false);
        },
    });

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };
    
    const handleNameChange = (e) => {
        const nombreSinEspeciales = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, '');
        setName(nombreSinEspeciales);
    }
    
    const handleFranchise = (e) => {
        setFranchise(e.target.value);
    };
    
    const handleDigitsChange = (e) => {
        const numerosSinE = e.target.value.replace(/\D/g, '');
        setDigits(numerosSinE);
    }

    const handleTypeDocument = (e) => {
        setTypeDocument(e.target.value);
    };
    
    const handleDocumentNumber = (e) => {
        setDocumentNumber(e.target.value);
    }

    const handleFile = (e) => {
        if (e.target.files.length > 0) {
            const archivo = e.target.files[0];
            setDocumentFile(archivo);
        }
    };

    const handleTicket = (e) => {
        setTicket(e.target.value);
    }

    const handleOtherPersons = (e) => {
        setOtherPersons(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Por favor, verifica que no eres un robot.");
            return;
        }

        const data = {
            name,
            franchise,
            digits: parseInt(digits, 10),
            typeDocument,
            documentNumber,
            ticket,
            otherPersons
        };

        const file = documentFile;

        mutation.mutate(data, file);
    }

    return (

        showForm ? (

            <div className="container-form-component">

                <div className="container-form-component--c-form">

                    <div className="c-form--container-titles">
                        <div className="c-form--heading">
                            <span>Core Medellin 2024</span>
                            <span>Solicitud de confirmación de pago</span>
                        </div>
                        <div className="c-form--subtitle">Te agradecemos por participar en la edición 2024 de CORE en Medellín, Colombia. Una de nuestras prioridades en Tuboleta es garantizar que exista una seguridad en las transacciones. Como parte de eso te solicitamos por favor que nos confirmes la siguiente información con el fin de validar la transacción.</div>
                    </div>

                    <p className="c-form--label-conditions">
                        La seguridad de su información es nuestra prioridad. Todos los datos recolectados a través de este formulario se manejan de manera confidencial y se almacenan de forma segura y tienen como única finalidad, realizar un proceso de validación de la transacción. Desde Tuboleta, el compromiso incluye no compartir, vender, transferir su información a terceros sin su consentimiento, a menos que sea requerido por ley. Para obtener más detalles sobre cómo protegemos su privacidad y seguridad, consulte nuestra <a className="c-form--label-conditions" href="https://www.tuboleta.com/images/CMS/POLITICADEPRIVACIAD.html" target="_blank"><strong>Política de Privacidad publicada en nuestra página web</strong></a>
                    </p>

                    <form className="form" onSubmit={handleSubmit}>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Nombre completo del comprador</label>
                            <input required className="form--input" type="text" placeholder="Escriba su respuesta" value={name} onChange={handleNameChange} />
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Seleccione la franquicia de la tarjeta con la que realizo la compra de las boletas para CORE Medellín 2024</label>
                            <select required className="form--input--select" value={franchise} onChange={handleFranchise}>
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="Visa">VISA</option>
                                <option value="Mastercard">MASTERCARD</option>
                                <option value="American Express">AMERICAN EXPRESS</option>
                                <option value="Diners">DINERS</option>
                                <option value="Otras">Otras</option>
                            </select>
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Introduzca UNICAMENTE los 4 ultimos números de la tarjeta con la que realizo la compra</label>
                            <input required maxLength='4' className="form--input" type="text" placeholder="Escriba su respuesta" value={digits} onChange={handleDigitsChange} />
                        </div>

                        <div className="form--container-questions">

                            <label className="container-questions--title">Tipo de documento del tarjeta habiente (propietario de la tarjeta)</label>

                            <select required className="form--input--select" placeholder="Selecciona la respuesta" value={typeDocument} onChange={handleTypeDocument} >
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="DNI - Nacional / ID">DNI - Nacional / ID</option>
                                <option value="Licencia de Conducción">Licencia de Conducción</option>
                            </select>
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Ingrese el número del documento del tarjeta habiente</label>
                            <input required className="form--input" type="text" placeholder="Escriba su respuesta" value={documentNumber} onChange={handleDocumentNumber} />
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Cargue un documento con la imagen de la identificación personal descrita en las anteriores preguntas</label>
                            <input required className="form--input" type="file" placeholder="Escriba su respuesta" value={documentFile} onChange={handleFile} />
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Indique cuantas boletas compro en esa transacción</label>
                            <select required className="form--input--select" value={ticket} onChange={handleTicket}>
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="1">1 - Una</option>
                                <option value="2">2 - Dos</option>
                                <option value="3">3 - Tres</option>
                                <option value="4">4 - Cuatro</option>
                                <option value="5">5 - Cinco</option>
                                <option value="6">6 - Seis</option>
                            </select>
                        </div>

                        <div className="form--container-questions">
                            <label className="container-questions--title">Ingrese los datos de las personas que van a ingresar con esas boletas. (Nombre / Nacionalidad / Tipo de Documento / Número de ID)</label>
                            <input required className="form--input" type="text" placeholder="Escriba su respuesta" value={otherPersons} onChange={handleOtherPersons} />
                        </div>
                        
                        <ReCAPTCHA
                            className="form--captcha"
                            sitekey="6LevGMUpAAAAAD1J7TcQxgQ5fRBatZ-lZ6vnQCNv"
                            onChange={handleCaptchaChange}
                        />

                        {mutation.isLoading ? (
                                <Loader />
                            ) : (
                                <button className="form--submit-button" type="submit" disabled={mutation.isLoading}>Enviar</button>
                        )}
        
                    </form>

                    <div className="social-account-container">
                        <span className="social-account-container--title">Siguenos en:</span>
                        <div className="social-account-container--social-accounts">

                            <a href="https://www.instagram.com/tuboleta/?hl=es">
                                <button className="social-accounts--social-button instagram">
                                    <svg className="social-button--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                                </button>
                            </a>

                            <a href="https://www.tiktok.com/@tuboletacol">
                                <button className="social-accounts--social-button tiktok">
                                    <svg className="social-button--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                                </button>
                            </a>

                            <a href="https://www.facebook.com/tuboleta/?locale=es_LA">
                                <button className="social-accounts--social-button facebook">
                                    <svg className="social-button--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                                </button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        ) : (
            mutation.isSuccess ? (
                mutation.data.Status ? <Congrats /> : <Error onRetry={() => setShowForm(true)} />
            ) : (
                <p>Error: {mutation.error.message}</p>
            )
        )
    );
}

export {Form};