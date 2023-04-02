import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Head from 'next/head';
import axios from 'axios';

import {withLayout} from "../layout/Layout";
import {getMovieByName, getMovie} from '../config';
import {writeMoviesFiltered} from '../store/movies/actions-movies';
import { Preloader } from "../components/Preloader";

const LazyHero = dynamic(() => import('../components/Hero'));
const LazyFilter = dynamic(() => import('../components/Filter'));
const LazyMoreMovies = dynamic(() => import('../components/MoreMovie'));
const LazySubscribe = dynamic(() => import('../components/Form'));


const Home = ({HeroSsrFetch, FiltersSsrFetch, MoviesSsrFetch}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(writeMoviesFiltered(MoviesSsrFetch));
	}, [MoviesSsrFetch]);

	return (
		<>
			<Head>
				<title>CinemaRoom</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{!LazySubscribe && !HeroSsrFetch && !FiltersSsrFetch && !LazySubscribe ? <Preloader/> :
				<>
					<LazyHero hero={HeroSsrFetch}/>
					<LazyFilter Filters={FiltersSsrFetch}/>
					<LazyMoreMovies/>
					<LazySubscribe/>
				</>
			}
			
		</>
	)
};


export const getServerSideProps = async () => {
	const {data: hero} = await axios.get(getMovieByName('Puss in Boots: The Last Wish'));
	const {data: Filters} = await axios.get('http://localhost:5000/filter');
	const {data: movies} = await axios.get(getMovie(1));

	if(!hero && !Filters && !movies){
		return{
			notFound: true
		}
	}

	return{
		props:{
			HeroSsrFetch: hero.results[0],
			FiltersSsrFetch: Filters,
			MoviesSsrFetch: movies.results
		}
	}
}

export default withLayout(Home);
