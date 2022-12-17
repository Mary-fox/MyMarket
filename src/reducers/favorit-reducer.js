import { createSlice } from "@reduxjs/toolkit"; 
//промежуточная аттестация

const favoritLocalStorage = JSON.parse(localStorage.getItem("Favorites"));


export const favoriteSlice = createSlice({
name:"favorit",
// Начальное состояние хранилища, товаров нет
initialState: {
    likes: favoritLocalStorage? [favoritLocalStorage] : [], 
}, 



// Все доступные методы
reducers:{
// Добавить товар, первый параметр это текущее состояние
// А второй параметр имеет данные для действия
addLike: (prevState, action) => {
    const like = action.payload;
    const hasInFavorite = prevState.likes.some((prevLike) => prevLike.id === like.id);
    if(hasInFavorite ) return prevState;



    return {
        ...prevState,
        // Внутри action.payload информация о добавленном товаре
        // Возвращаем новый массив товаров вместе с добавленным
        likes: [...prevState.likes, like]
        };
    },
removeLike: (prevState, action) => {
    const like = action.payload;
    
    return { ...prevState, 
        likes:prevState.likes.filter((prevLike) =>{
        return prevLike.id !== like.id;
    })};
    },
},
});


// Экспортируем наружу все действия и сам редуктор
export const { addLike, removeLike } = favoriteSlice.actions;
export default favoriteSlice.reducer;
