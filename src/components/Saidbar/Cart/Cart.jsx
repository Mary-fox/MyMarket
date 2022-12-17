import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from '../../../reducers/cart-reducer';
import "./Cart.css";
import Cartbtn from './Cartbtn';


function Cart (props) {
    const iphone = {id: 555, name:"iphone" };
    const products =  useSelector((store)=>store.cart.products)
    const dispatch = useDispatch();
    const hasInCart = products.some((prevProduct) => {return prevProduct.id === iphone.id});


    const handleAddProduct = (e, product) => {
        const action = addProduct(product);
        localStorage.setItem("Cart", JSON.stringify(product));
        dispatch(action);
    }
    const handleRemoveProduct = (e, product) => {
        const action = removeProduct(product);
        localStorage.removeItem("Cart");
        dispatch(action);
    }
    return(
    <Cartbtn  handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} hasInCart={hasInCart} iphone={iphone}/>
 )
}
export default Cart;