import React from 'react'
import { useState } from 'react';

function Form() {
	function getFormData(e) {
		e.preventDefault();
		// console.log(options, fname, marrital);
	}

	const [fname, setFname] = useState('')
	const [marrital, setMarrital] = useState('false')
	const [options, setOptions] = useState('')




	return (
		<div>
			<h1>Form Data</h1>
			<form onSubmit={getFormData}>
				<div><input type="text" placeholder="Enter Name" name="fullName" onChange={
					(e) => setFname(e.target.value)
				} /></div>
				<div>
					<span>Married status</span>
					<span><input type="checkbox" name="statusMarried" onChange={
						(e) => setMarrital(e.target.checked)
					} /></span>
				</div>
				<div>
					<select onChange={
						(e) => setOptions(e.target.value)
					}>
						<option>Yes</option>
						<option>No</option>
					</select>
				</div>
				<div><button type="submit" onClick={getFormData}>add </button></div>
			</form>
		</div>
	)
}
export default Form;