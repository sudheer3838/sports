import React from 'react'
function Child(params) {
    const name = "Sudheer";
    return(<div>
        <h1>child</h1>
        <button onClick={()=>params.click(name)}>child click me</button>
    </div>)
}
export default Child;