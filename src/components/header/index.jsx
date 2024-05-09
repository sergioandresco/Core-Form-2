import { useTranslation } from "react-i18next";

import './header.css';

function Header(){

    const [t, i18n] = useTranslation("global");

    return(
        <header className='header'>

            <div className='header--c'>

                <div className='c--c-logo'>
                    <a href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html' className='c-logo--link-img'>
                        <img className='link-img--img' src='https://www.tuboleta.com/img/ic_logotuboleta.svg' />
                    </a>
                </div>

                <div className='c--c-opt'>
                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Tuboleta Pass</h2>
                    </a>

                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Tuboleta Te Lleva</h2>
                    </a>

                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Pásala</h2>
                    </a>

                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Inicia sesión</h2>
                    </a>

                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Ingresar</h2>
                    </a>

                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>

                </div>

            </div>


        </header>
    );
}

export { Header };