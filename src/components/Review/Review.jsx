import React from 'react';
import "./Review.css"

function Review (props) {
const {review} = props;

return (

        <li className="review" >
            <img src={review.photoAuthor} alt={review.alt} className="review__photo" />
            <div className="review__content">
                <h4 className="review__name">{review.name}</h4>
                <div className="review-rating">
                <div className="review-rating__items">
                <input id={`Rating_${review.id}5`} type="radio" className="review-rating__item" name={`Rating_${review.id}`} value="5" defaultChecked={review.rating === '5' ? "defaultCheked" : ""} disabled/>
                <label htmlFor={`Rating_${review.id}5`} className="review-rating__label"></label>
                <input id={`Rating_${review.id}4`} type="radio" className="review-rating__item" name={`Rating_${review.id}`} value="4" defaultChecked={review.rating === '4' ? "defaultCheked" : ""} disabled/>
                <label htmlFor={`Rating_${review.id}4`} className="review-rating__label"></label>
                <input id={`Rating_${review.id}3`} type="radio" className="review-rating__item" name={`Rating_${review.id}`} value="3" defaultChecked={review.rating === '3' ? "defaultCheked" : ""} disabled/>
                <label htmlFor={`Rating_${review.id}3`} className="review-rating__label"></label>
                <input id={`Rating_${review.id}2`} type="radio" className="review-rating__item" name={`Rating_${review.id}`} value="2" defaultChecked={review.rating === '2' ? "defaultCheked" : ""} disabled/>
                <label htmlFor={`Rating_${review.id}2`} className="review-rating__label"></label>
                <input id={`Rating_${review.id}1`} type="radio" className="review-rating__item" name={`Rating_${review.id}`} value="1" defaultChecked={review.rating === '1' ? "defaultCheked" : ""} disabled/>
                <label htmlFor={`Rating_${review.id}1`} className="review-rating__label"></label>
            </div>
        </div>
        <div className="review__parameters">
            <p className="review__parameter"><strong>{`Опыт использования:`}</strong> {review.text.usageExperience}</p>
            <p className="review__parameter"><span className="review__word">{`Достоинства:`}</span> {review.text.pluses}</p>
            <p className="review__parameter"><span className="review__word">{`Недостатки:`}</span> {review.text.minuses}</p>
        </div>
    </div>
</li>

    )
}

export default Review;


