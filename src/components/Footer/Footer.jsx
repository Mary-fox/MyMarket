import React from 'react';
import { useCurrentDate } from "@kundinos/react-hooks";
import "./Footer.css";
import Link from '../Link/Link';

function Footer (props) {
    const currentDate = useCurrentDate({every: "day"});
    const fullYear = currentDate.getFullYear();
    return ( 
    <footer className="footer">
        <div className="footer__wrapper content">
            <div className="footer__info">
                <p className="footer__logo"><b>&copy; ООО «<span className="footer__name">Мой</span>Маркет», {`2018-${fullYear}`}</b></p>
                <p>Для уточнения информации звоните по номеру<Link href="tel:79000000000" text='+7 900 000 0000'/>, </p>
                <p>а предложения по сотрудничеству отправляйте на почту <Link href="mailto:partner@mymarket.com" text='partner@mymarket.com'/></p>
            </div>
            <div className="footer__top">
                <Link href='#top' title="Вернуться к началу" text='Наверх'/>
            </div>
        </div> 
    </footer> 
    )
}
export default Footer;