import React from 'react'
import Child from './childToParent'

function Parent(params) {
    function parentClick(name){
        alert('alert on parent'+ name)
    }
    return(<div>
        <Child click={parentClick} />
    </div>)
}
export default Parent;