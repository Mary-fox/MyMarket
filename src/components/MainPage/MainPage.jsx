import React from 'react';
import {Link} from"react-router-dom";
import "./MainPage.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function MainPage () {

    return (
<div className="page">
    <Header />   
    <div className='content main__wrapper'>
            <div className='main__content'>
                <p className='main__text'>Здесь должно быть содержимое главной&nbsp;страницы.
                Но&nbsp;в рамках курса главная страница используется&nbsp;лишь
                в&nbsp;демонстрационных целях</p>
                <Link className='main__link' to="/product">Перейти на страницу товара</Link>
            </div>
    </div>
    <Footer />
</div> 

    )
}

export default MainPage;