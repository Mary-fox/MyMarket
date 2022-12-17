import React from 'react';
import "./PageProduct.css";

import Header from '../Header/Header';
import Colors from '../Colors/Colors';
import Configs from '../Configs/Configs';
import Reviews from '../Reviews/Reviews';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Form from '../Form/Form';
import Saidbar from '../Saidbar/Saidbar';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import Gallery from '../Gallery/Gallery';
import Description from '../Description/Description';
import Characteristic from '../Characteristic/Characteristic';

function PageProduct (props) {

    return (
<div>   
    <Header />        
    <div className="content">
    <div id={"top"}>
    <Breadcrumbs />
    </div>
    <main>
    <Gallery />
    <div className="container">          
        <div className="container__characterisric">    
            <Colors  />
            <Configs />
            <Characteristic />
            <Description />
            <Table />
            <Reviews />
            <Form />
        </div>     
        <Saidbar />   
    </div>
    </main>
    </div>
<Footer />
</div>
    )
}

export default PageProduct;