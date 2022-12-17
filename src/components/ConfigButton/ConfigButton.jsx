import React from 'react';

import "./ConfigButton.css"

function ConfigButton (props) {
const {config, currentMemoryId , setCurrentMemoryId} = props;   

return (
        <li className="config__btn">
            <input  id={config.id} type="radio"  name={config.name} value={config.value} checked={currentMemoryId === config.id} 
            onChange = {(evt) => {
                if(evt.target.checked) {
                    setCurrentMemoryId(config.id)
                }
            }}/>
            <label htmlFor={config.id}><span className="config__label btn_selected">{config.item}</span></label>
        </li> 
        )
}

export default ConfigButton;
