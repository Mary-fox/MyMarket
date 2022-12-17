import React from 'react';
import "./Breadcrumbs.css"
import items from '../../data/breadcrumbs';
import {Link} from"react-router-dom";

function Breadcrumbs () {

return (
    <nav className="breadcrumbs">
    {items.map((item) => (
       <div className='breadcrumbs__item' key={item.name}>
            <Link className="breadcrumbs__link" to={item.url}>{item.name}</Link> <span>{`>`}</span>
        </div>
        )
    )}     
    </nav>
)
}

export default Breadcrumbs;
