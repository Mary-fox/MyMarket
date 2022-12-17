import React from "react";

function Characteristic() {

    return (
        <div className="functions">
        <h3 className="functions__title">Характеристики товара</h3>  
            <ul className="functions__list">
                <li className="functions__point">Экран: <span className="bold-text">6.1</span></li>
                <li className="functions__point">Встроенная память: <span className="bold-text">128 ГБ</span></li>
                <li className="functions__point">Операционная система: <span className="bold-text">iOS 15</span></li>
                <li className="functions__point">Беспроводные интерфейсы: <span className="bold-text">NFC, Bluetooth, Wi-Fi</span></li>
                <li className="functions__point">Процессор: <a href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank" rel="noopener noreferrer">Apple A15 Bionic</a></li>
                <li className="functions__point">Вес: <span className="bold-text">173 г</span></li>
            </ul>  
    </div>     
    )
}    

export default Characteristic;