import React from 'react'
import ChildProfile from './childProfile';
function Profile({ passFuntion }) {

	// const users = ["Amit", "Kannan", "Sudheer", "Kannan"]
	const users = [
		{
			name: "Amit", age: 30, address:"N/A"
		},
		{ name: "Kannan", age: 28, address: "2xyx@gmail.com" },
		{ name: "Kannan", age: 26, address: "3xyx@gmail.com" },
	];
	return (
		<div>
			<h1>Profile</h1>
			<ul>
				{
					users.map((user, index) => <ChildProfile key={index} userDate={user} index={index} />)
				}
			</ul>

			{/* <button onClick={passFuntion}>Get Funtion</button> */}
		</div>
	)
}
export default Profile;