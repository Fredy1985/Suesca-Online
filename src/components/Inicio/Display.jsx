import React, { useState } from 'react'

export const Display = () => {

    const [state, setState] = useState(false);
    
    return (
        <div onClick={() => {setState(!state)}} className={`display ${state && 'fondo'}`}>
            <i 
             className={`icon fas fa-${!state ? 'play' : 'pause'}`}
            >
            </i>
            <span>Señal en Vivo</span>
        </div>
        
        
    )
}
