import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
	isLoading: true,
	query: "HTML",
	nbPages: 0,
	page: 0,
	hits: [],
}

const AppContext = React.createContext();
const AppProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const fetchApiData = async (url) => {

		dispatch({
			type: "SET_LOADING"
		})

		console.log(url);
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			// isLoading = false;
			dispatch({
				type: "GET_DATA",
				payload: {
					hits: data.hits,
					nbPages: data.nbPages
				}
			})
		} catch (error) {
			console.log(error)
		}
	}


	const removePost = (post_ID) => {
		dispatch(
			{ type: "REMOVE_POST", payload: post_ID }
		);
	}

	const searchPost = (searchQuery) => {
		dispatch(
			{ type: "SEARCH_QUERY", payload: searchQuery }
		);
	}

	const getPrevPage = () => {
		dispatch(
			{ type: "PREV_PAGE" }
		);

	}
	const getNextPage = () => {
		dispatch(
			{ type: "NEXT_PAGE" }
		);
	}


	useEffect(() => {
		fetchApiData(`${API}query=${state.query}page=${state.page}}`);
		// fetchApiData(`${API}query=${state.query}&page=${state.page }}`);
	}, [state.query, state.page])

	return (
		<AppContext.Provider value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}>
			{children}
		</AppContext.Provider>
	)
}

const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }