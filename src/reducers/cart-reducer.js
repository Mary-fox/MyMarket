import { createSlice } from "@reduxjs/toolkit"; 

const inCart =  JSON.parse(localStorage.getItem("Cart"));



export const cartSlice = createSlice({
name:"cart",
// Начальное состояние хранилища, товаров нет
initialState: {
    products: inCart? [inCart] : [], 
}, 



// Все доступные методы
reducers:{
// Добавить товар, первый параметр это текущее состояние
// А второй параметр имеет данные для действия
addProduct: (prevState, action) => {
    const product = action.payload;
    // const hasInCart = prevState.products.some((prevProduct) => prevProduct.id === product.id);
    // if(hasInCart) return prevState;


    return {
        ...prevState,
        // Внутри action.payload информация о добавленном товаре
        // Возвращаем новый массив товаров вместе с добавленным
        products: [...prevState.products, product]
        };
    },
removeProduct: (prevState, action) => {
    const product = action.payload;
    
    return { ...prevState, 
        products:prevState.products.filter((prevProduct) =>{
        return prevProduct.id !== product.id;
    })};
    },
},
});


// Экспортируем наружу все действия и сам редуктор
export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
