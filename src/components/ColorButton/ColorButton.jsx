import React from 'react';
import "./ColorButton.css"



function ColorButton (props) {
const {color, currentColorId, setCurrentColorId} = props;

    return (
            <li  className="characteristic__btn">
                <input id={color.id} type="radio" name={color.name} value={color.value} checked={currentColorId === color.id} 
                onChange={(evt) => {
                    if (evt.target.checked) {
                        setCurrentColorId(color.id);
                    }
                }}/>
                <label htmlFor={color.id}><img src={color.image} alt={color.alt}  /></label>
            </li> 
    )
}    
export default ColorButton;