import React from 'react'
import { useGlobalContext } from '../context'

function Search() {
	// let consumerName = useGlobalContext();
	const { query, searchPost } = useGlobalContext();
	return (
		<div>
			{/* Search {consumerName} */}
			<form onSubmit={(e) => e.preventDefault()}>
				<input type="text" placeholder="Search here.."
					value={query}
					onChange={(e) => searchPost(e.target.value)}
				/>
			</form>
		</div>
	)
}

export default Search
