import React, {useState} from 'react';
import "./Configs.css"
import configs from '../../data/configs';
import ConfigButton from '../ConfigButton/ConfigButton';

function Configs () {
const [currentMemoryId , setCurrentMemoryId] = useState(configs[0].id);
const currentMemory = configs.find(c => c.id === currentMemoryId);

return (
    <div className="config">
    <h3 className="config__title">Конфигурация памяти: {currentMemory.value} ГБ </h3>
        <ul className="config__list" >
            {configs.map((config) => (
                <ConfigButton  key={config.id} config={config} currentMemoryId={currentMemoryId} setCurrentMemoryId={setCurrentMemoryId}/>
                )
            )}     
        </ul>
    </div> 
)
}

export default Configs;
