import React from 'react'
function ChildProfile(props) {
    console.log(props);
    return(
        <div key={props.index}>
            <span>{props.userDate.name} </span>
            <span> {props.userDate.age}</span>
        </div>
    )
}
export default ChildProfile;