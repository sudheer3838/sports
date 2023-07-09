import React, {useState}  from 'react'
import data from './data.json'

function Data() {
    return (
        <div>
            {data.map((item, index)=> 
                 <li key={index}>
                    <span>{index + 1} </span>
                    <span>  {item.name}</span>
                </li>

            )}
        </div>
    )
}

export default Data
