import PropTypes from 'prop-types';

function Error({ onRetry }){
    return(
        <>

            <div className="container-form-component">

                <div className="container-form-component--c-form">

                    <div className="c-form--heading">El correo que asignaste no se encuentra registrado. Verifícalo e intenta de nuevo</div>

                    <form className="form">

                        <button className="form--submit-button" onClick={onRetry}>Regresar</button>

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

        </>
    );
}

Error.propTypes = {
    onRetry: PropTypes.func.isRequired,
};

export { Error };