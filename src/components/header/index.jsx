import { useTranslation } from "react-i18next";

import './header.css';

function Header(){

    const [t, i18n] = useTranslation("global");

    return(
        <header className='header'>

            <div className='header--c'>

                <div className='c--c-logo'>
                    <a href='https://www.tuboleta.com/' className='c-logo--link-img'>
                        <img className='link-img--img' src='https://www.tuboleta.com/img/ic_logotuboleta.svg' />
                    </a>
                </div>

                <div className='c--c-opt'>
                    <a className='c-opt--link' href='https://www.tuboleta.com/images/Tuboleta_Pass/home.html'>
                        <h2 className='link--opt'>Tuboleta Pass</h2>
                    </a>

                    <a className='c-opt--link' href='https://portal.tuboleta.com/vmove/?utm_source=vmovehome&utm_medium=vmovehometb&utm_campaign=bannervmovetb&utm_id=vmovebanner&_gl=1*1hq7ztg*_ga*MTUxOTQxNDg5LjE3MTE1NjQyNjc.*_ga_0TVTJ30NVQ*MTcxNTM1ODgwNi4xMTcuMS4xNzE1MzU4ODA2LjYwLjAuMTY2ODIwNDkwNQ..'>
                        <h2 className='link--opt'>Tuboleta Te Lleva</h2>
                    </a>

                    <a className='c-opt--link' href='https://web.tuboleta.com/images/SITIOS2020/Pasala/index.html?_gl=1*1hq7ztg*_ga*MTUxOTQxNDg5LjE3MTE1NjQyNjc.*_ga_0TVTJ30NVQ*MTcxNTM1ODgwNi4xMTcuMS4xNzE1MzU4ODA2LjYwLjAuMTY2ODIwNDkwNQ..'>
                        <h2 className='link--opt'>Pásala</h2>
                    </a>

                    <a className='c-opt--link' href='https://all.checkout.tuboleta.com/account/login?_gl=1*1cgxgcr*_ga*MTUxOTQxNDg5LjE3MTE1NjQyNjc.*_ga_0TVTJ30NVQ*MTcxNTM1ODgwNi4xMTcuMS4xNzE1MzU4OTIwLjUyLjAuMTY2ODIwNDkwNQ..'>
                        <h2 className='link--opt'>{t("form.login")}</h2>
                    </a>

                    <button className="c-opt--link c-opt--lenguages" onClick={() => i18n.changeLanguage("es")}>ES</button>
                    <button className="c-opt--link c-opt--lenguages" onClick={() => i18n.changeLanguage("en")}>EN</button>

                </div>

            </div>


        </header>
    );
}

export { Header };