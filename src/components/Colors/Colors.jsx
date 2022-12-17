import React, {useState} from 'react';
import "./Colors.css"
import "../ColorButton/ColorButton"
import ColorButton from '../ColorButton/ColorButton';
import colors from '../../data/colors';
 
function Colors() {
    
    const [currentColorId, setCurrentColorId] = useState(colors[3].id);
    const currentColor = colors.find(c => c.id === currentColorId);


   return (
        <div className="characteristic">
            <h3 className="characteristic__name">Цвет товара: {currentColor.value}</h3>
            <ul className='characteristic__list'>
            {colors.map((color) => (
                <ColorButton key={color.image} color={color} setCurrentColorId={setCurrentColorId} currentColorId={currentColorId} />
                    )
                )}
            </ul>
        </div>
   ) 
 }

 export default Colors;