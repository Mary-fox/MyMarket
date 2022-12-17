"use strict";
   

    setTimeout( () => {
    //Промежуточная аттестация добавление/удаление товара из корзины
    let count = document.querySelector('.header__icon-cart-counter');
    let btnCart = document.querySelector('.important-btn__btn');
    let productId = document.querySelector('[name="product-id"]');
    let cart = [];
    if (localStorage.getItem('All carts')) {
        cart = (localStorage.getItem("All carts")).split(','); 
    };

    function changeBtnProductAdded () {
        btnCart.textContent = 'Товар уже в корзине';
        btnCart.classList.add('important-btn__add');  
        count.classList.remove('counter__empty');
    };
    function changeBtnProductNoAdded () {
        btnCart.innerHTML = 'Добавить в корзину';
        btnCart.classList.remove('important-btn__add');
    };

    function deleteCounter() {
        count.classList.add('counter__empty'); 
    };

    // функция добавления в корзину
    function addToCart(e) {  
        if (cart.indexOf(e) === -1) {
            cart.push(e);
            localStorage.setItem("All carts", cart);
            count.textContent = cart.length;
            changeBtnProductAdded();
        }
    };
     // функция удаления из корзины
    function removeFromCart(e) {
        let index = cart.indexOf(e);
        if (index > -1) {
        cart.splice(index, 1);
        localStorage.removeItem("All carts", cart);
        btnCart.innerHTML = 'Добавить в корзину';
        count.textContent = cart.length;
        changeBtnProductNoAdded();
        } 
        if (cart.length === 0) {
            deleteCounter();
        }
    };

    btnCart.addEventListener('click', (e) => {
       if (cart.length > 0) {
        removeFromCart(productId.value);
       } else {
        addToCart(productId.value);
        }
    });
    //   отрабатывает при перезагрузке страницы
    // document.addEventListener("DOMContentLoaded", () => { 
        count.textContent = cart.length;
        if (cart.length === 0) {
            deleteCounter();
        }
        if (localStorage.getItem("All carts")) {
            changeBtnProductAdded();
        };
    // });
},1000);



