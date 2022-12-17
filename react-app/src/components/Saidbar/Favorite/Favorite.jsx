import React from 'react';
import {useSelector, useDispatch } from "react-redux";
import { addLike,removeLike} from '../../../reducers/favorit-reducer';
import "./Favorite.css";


function Favorite () {

    const iphone = {id: 555, name:"iphone" };
    const likes =  useSelector((store)=>store.favorite.likes)
    const hasInFavorite = likes.some((prevLike) => {return prevLike.id === iphone.id});
    const dispatch = useDispatch();

    const handleAddLike = (e, iphone) => {
      const action = addLike(iphone);
      localStorage.setItem('Favorites', JSON.stringify(iphone))
      dispatch(action);
  }
    const handleRemoveLike = (e, iphone) => {
    const action = removeLike(iphone);
      localStorage.removeItem('Favorites')
      dispatch(action);
  }
  
return (
        <div className="important__wish">
        <input onClick={(e) => { hasInFavorite ? handleRemoveLike(e, iphone) : handleAddLike(e, iphone) }}className="important__wish-list" type="checkbox" id="favorite" name="add-like" value="wish" />
        <label htmlFor="favorite">
          {hasInFavorite? <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.30841 10.9545C10.2979 7.12455 16.7444 7.12455 20.7339 10.9545L25.0002 15.0503L29.2667 10.9545C33.2563 7.12455 39.7027 7.12455 43.6923 10.9545C47.6817 14.7844 47.6817 20.973 43.6923 24.803L25.0002 42.7472L6.30841 24.803C2.31891 20.973 2.31891 14.7844 6.30841 10.9545ZM17.7876 13.7829C15.4253 11.5151 11.617 11.5151 9.25468 13.7829C6.89237 16.0507 6.89237 19.7067 9.25468 21.9746L25.0002 37.0904L40.7461 21.9746C43.1084 19.7067 43.1084 16.0507 40.7461 13.7829C38.3838 11.5151 34.5755 11.5151 32.2132 13.7829L25.0002 20.7072L17.7876 13.7829Z" fill="#F36223" />
                            <path d="M9 13.5L25 29L41 13.5" stroke="#F36223" strokeWidth="13" />
                        </svg>:
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 22">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                          fill="#888888"/>
                          </svg>}
          </label>
  </div>
)

}

export default Favorite;
