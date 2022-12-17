import React, {useState}  from "react";
import "./Form.css";


function Form() {

    const [name, setName] = useState (localStorage.getItem('name') || "");
    const [rating, setRating] = useState (localStorage.getItem('rating')|| "");
    const [review, setReview] = useState (localStorage.getItem('review') || "");
    const [errorName, setErrorName] = useState ('');
    const [errorRating,setErrorRating] = useState ('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || name === null ) {
            setErrorName('Вы забыли указать имя и фамилию');
            return false;
        } 
        if (name.length < 2) {
            setErrorName('Имя не может быть короче 2-х символов');
            return false;
        } 
        if (rating === '' || rating > 5 || rating < 1 || !isFinite(rating)) {
            setErrorRating('Оценка должна быть от 1 до 5');
            return false;
        }; 
        localStorage.removeItem("name");
        localStorage.removeItem("rating");
        localStorage.removeItem("review");
        
        alert('Ваш отзыв был успешно отправлен и будет отображён после модерации');
    }


return (
    <section className="form" >
                <h3 className="form__title">Добавить свой отзыв</h3>
                <form method="post" action="#!" className="form__wrapper" onSubmit={handleSubmit}>
                    <div className="form__data">
                      <div className="form__input-name">
                            <input name="name" onInput={(evt) => {
                                setName(evt.target.value) 
                                setErrorName('')
                                setErrorRating('')
                                localStorage.setItem('name', evt.target.value)}}
                                className={`form__name ${errorName ? "error" : ""}`}  type="text" value={name} placeholder="Имя и фамилия" />
                            <div className={`error__name ${errorName ? "error__active" : ""}`}>{errorName}</div> 
                        </div>
                        <div className="forms__input-rating">
                            <input  onInput={(evt) => {
                                setRating(evt.target.value) 
                                setErrorRating('')
                                setErrorName('')
                                localStorage.setItem('rating', evt.target.value)}} 
                                className={`form__rating ${errorRating ? "error" : ""}`} name="rating" type="number" value={rating} placeholder="Оценка" />
                         <div className={`error__rating ${errorRating ? "error__active" : ""}`}>{errorRating}</div>    
                            
                        </div>
                    </div>
                    <textarea name="review" onInput={(evt) => {
                                setReview(evt.target.value)
                                localStorage.setItem('review', evt.target.value)}}
                                id="review" className="form__review" placeholder="Текст отзыва" value={review}></textarea>
                    <div className="form__button">
                        <button className="form__btn" type="submit">Отправить отзыв</button>
                    </div>
                </form>
        </section>
)
}
export default Form;
