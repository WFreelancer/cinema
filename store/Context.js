import {createContext, useContext, useEffect, useState} from 'react'
import {getMovie, getMovieByName, currentMovie} from '../config'

const CustomContext = createContext(null);

const storage = () => {
	const data = localStorage.getItem('cookies')

	return data ? false : true;
}

const DataProvider = ({children}) => {
	const [cookies, setCookies] = useState(false);
	const [movies, setMovies] = useState({});
	const [moviesFiltered, setMoviesFiltered] = useState([]);

	const [filterCount, setFilterCount] = useState(0);
	const [countPage, setCountPage] = useState(2);
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [trailerPopup, setTrailerPopup] = useState(false);


	useEffect(() =>{
		setTimeout(() => {
			setCookies(storage());
		}, 5000);
		// eslint-disable-next-line
	}, [])


	const handleCookies = () => {
		localStorage.setItem('cookies', true);
		setCookies(false);
	}

	const handleСheckbox = (id) => {
		setFilterCount(id);
		handleFilter(id);
	}

	const showMore = () => {
		fetch(getMovie(countPage))
		.then(response => response.json())
		.then(data => {
			if(filterCount === 0){
				setMoviesFiltered([...moviesFiltered, ...data.results]);
				setMovies([...movies, ...data.results]);
				setCountPage(prev => prev + 1);
				return;
			}else{
				setMoviesFiltered([...moviesFiltered, ...data.results.filter(movie => movie.genre_ids.includes(filterCount))]);
				setCountPage(prev => prev + 1);
			}
		})
	}

	// Filter Components
	const handleFilter = (id) => {
		if(id === 0){
			setMoviesFiltered(movies);
			return;
		}
		setMoviesFiltered(movies.filter(movie => movie.genre_ids.includes(id)))
	}


	const value = {
		cookies,
		setCookies,
		handleCookies,
		movies,
		moviesFiltered,
		setMovies,
		setMoviesFiltered,
		filterCount,
		showMore,
		handleFilter,
		messageSuccess,
		setMessageSuccess,
		trailerPopup,
		setTrailerPopup,
		handleСheckbox,
	}

	return(
		<CustomContext.Provider value={value}>
			{children}
		</CustomContext.Provider>
	)
}

const useData = () => useContext(CustomContext);

export {DataProvider, useData};

