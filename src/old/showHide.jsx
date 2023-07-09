import React from 'react'
import { useState } from 'react'


function ShowHide() {
    function handleClick() {
        setStates(!states)
        console.log('sss');
    }
    const [states, setStates] = useState(true)
    return(
        <div>
            {states ? <div>Show</div> : <div>Hide</div>}
            <button onClick={handleClick}>On click</button>
        </div>
        
    )
}
export default ShowHide