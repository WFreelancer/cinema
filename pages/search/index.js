import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {withLayout} from "../../layout/Layout";
import {Container} from '../../components/Container';
import {SearchInput} from '../../components/Form';
import {MoviesList} from '../../components/MoviesList';
import {PreloaderIcon} from '../../components/Preloader';
import {MTitle} from '../../components/Title';

import {useSelector, useDispatch} from 'react-redux';
import {writeMoviesSearch, writeMovies} from '../../store/movies/actions-movies';
import {getMovieByName, getMovie} from '../../config';
import axios from 'axios';

const SearchWrapper = styled(motion.div)`
	padding: 70px 0;

	@media (min-width: 1800px){
		font-size: 1.3rem;
	}
`

const Search = () => {
	const [loading, setLoading] = useState(true);
	const [titleRequest, setTitleRequest] = useState('');
	const {searchState} = useSelector(state => state.search);
	const {moviesSearch} = useSelector(state => state.movies);
	const dispatch = useDispatch();


	const searchMovies = async () => {
		setLoading(true);
		const {data} = await axios.get(getMovieByName(searchState));
		dispatch(writeMoviesSearch(data.results));
		setTitleRequest(searchState);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}


	useEffect(() => {
		if(searchState !== ''){
			searchMovies();
		}
	}, [searchState]);


	return(
		<SearchWrapper
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			<Container>
				<SearchInput searchMovies={searchMovies}/>
				{moviesSearch.length > 0 && titleRequest ?
					<MTitle initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} type="h3">
						Result on request: {titleRequest}
					</MTitle> : <MTitle initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} type="h3">Empty request</MTitle>
				}
				{loading && <PreloaderIcon/>}
				{moviesSearch.length > 0 && <MoviesList movies={moviesSearch}/>}
			</Container>
		</SearchWrapper>
	)
}

export default withLayout(Search);