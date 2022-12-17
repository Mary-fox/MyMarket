import React from 'react';

function Cartbtn (props) {
 const {handleRemoveProduct, handleAddProduct, iphone, hasInCart} = props;


    return(
    <div className="important-btn" >
     {hasInCart?  
     <button className='important-btn__btn important-btn__add' onClick={(e) => handleRemoveProduct(e, iphone)}>Товар уже в корзине</button>: 
     <button className='important-btn__btn' onClick={(e) => handleAddProduct(e, iphone)}>Добавить в корзину</button>}

     </div>
 )
}
export default Cartbtn;