import React from 'react';
import { useSelector} from "react-redux";
import {Link} from"react-router-dom";
import "./Header.css";
import logo from "./favicon.svg";

function Header (props) {
    const products =  useSelector((store)=>store.cart.products)
    const count = products.length;
    const favoriteCount = useSelector((state) => state.favorite.likes);

    return ( 
    <header className="header">
        <div className="header__content">
            <div className="header__logo">
            <Link className="logo__image" to="/">
                <h1 className="logo"><img src={logo} alt="logo" />
                <span className="logo__name">Мой</span>Маркет</h1></Link>
            </div>   
            <div className="header__icon">
                <a href="#!" className="header__icon-link">
                <svg width="100%" height="100%" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.23828 2.95447C7.22778 -0.875449 13.6743 -0.875449 17.6638 2.95447L21.9301 7.05027L26.1966 2.95447C30.1862 -0.875449 36.6326 -0.875449 40.6222 2.95447C44.6116 6.78439 44.6116 12.973 40.6222 16.803L21.9301 34.7472L3.23828 16.803C-0.75122 12.973 -0.75122 6.78439 3.23828 2.95447ZM14.7175 5.78289C12.3552 3.51507 8.54688 3.51507 6.18455 5.78289C3.82224 8.05071 3.82224 11.7067 6.18455 13.9746L21.9301 29.0904L37.6759 13.9746C40.0382 11.7067 40.0382 8.05071 37.6759 5.78289C35.3137 3.51507 31.5053 3.51507 29.143 5.78289L21.9301 12.7072L14.7175 5.78289Z" fill="#888888"/>
                </svg>  
                <span className={favoriteCount.length > 0 ?"header__icon-link-counter": ""}>{favoriteCount.length > 0 && favoriteCount.length}</span>
                </a>
                <a href="#!" className="header__icon_cart"> 
                <svg width="100%" height="100%" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.720947 0.915039H8.01813H9.72605L10.061 2.5228L11.0138 7.09618H39.3531H41.8122L41.4081 9.42498L39.2618 21.7872L38.9716 23.4584H37.2068H14.4226L15.3062 27.7H37.2068V31.7H13.5983H11.8904L11.5554 30.0922L7.26297 9.4884L9.30586 9.09618L7.26297 9.4884L6.3102 4.91504H0.720947V0.915039ZM11.8471 11.0962L13.5893 19.4584H35.442L36.8937 11.0962H11.8471ZM19.2129 36.6778C19.2129 38.5186 17.6624 40.007 15.7449 40.007C13.8273 40.007 12.2769 38.5186 12.2769 36.6778C12.2769 34.837 13.8273 33.3876 15.7449 33.3876C17.6624 33.3876 19.2129 34.837 19.2129 36.6778ZM32.9162 40.007C34.8337 40.007 36.3841 38.5186 36.3841 36.6778C36.3841 34.837 34.8337 33.3876 32.9162 33.3876C30.9985 33.3876 29.4481 34.837 29.4481 36.6778C29.4481 38.5186 30.9985 40.007 32.9162 40.007Z" fill="#888888"/>
                 </svg>
                <span className={count > 0 ? "header__icon-cart-counter": " "} id="cart">{count > 0 && count}</span>
                </a>
            </div>
        </div>
    </header> 
    )
}
export default Header;