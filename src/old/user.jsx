import React from 'react'
import { useState } from 'react'
function User({ name, age }) {

	const [input, setInput] = useState(null)
	const [print, setPrint] = useState(false)

	function getUserData(val) {
		setInput(val.target.value)
		setPrint(false)
	}

	function printValue(params) {
		setPrint(true)
	}

	return (
		<div>
			<h1>User {name} {age}</h1>
			<input type="text" onChange={getUserData} />
			<button onClick={printValue}>Get Value</button>
			{
				print ? <div>{input}</div> : null
			}

		</div>
	)
}
export default User;
