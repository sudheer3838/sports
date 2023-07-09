import React from 'react'
import { useGlobalContext } from '../context'
const Stories = () => {

	const { hits, nbPages, isLoading, removePost } = useGlobalContext()

	if (isLoading) {
		return <h1>Loading Data ...</h1>
	}

	return (
		<>
			<h1>Stories</h1>
			{
				hits.map((hit, index) => {
					const { title, author, objectID, url, num_comments, } = hit;
					return (
						<div className="card mb-3" key={index}>
							<h2>{title !== null ? title : "No Record Found"}</h2>
							<p>By - {author} | <span>{num_comments} Comments</span> </p>
							<p><a href="{url}" target="_blank">Read more...</a></p>
							<p><a onClick={() => removePost(objectID)}>Remove</a></p>
						</div>
					)
				})
			}

		</>
	)
}

export default Stories
