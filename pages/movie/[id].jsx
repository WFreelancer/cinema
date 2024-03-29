import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { format, parse } from "date-fns";
import { useDispatch } from 'react-redux';
import { openPopupTrailer } from '../../store/popup/actions-popup';

import { withLayout } from "../../layout/Layout";
import { Container } from '../../components/Container';
import { MButton } from '../../components/Button';
import { MTitle } from '../../components/Title';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import error from '../../public/image-not-found.png';
import VideoPlayer from '../../components/Player/VideoPlayer';
import PopupVideo from '../../components/Popups/PopupVideo';
import { getMovie, currentMovie } from '../../config';
import { animationContent, animationImagePageMovie } from '../../helpers/Animations';


const Wrapper = styled(motion.section)`
	position: relative;
	padding: 10vh 0 15vh 0;
	overflow: hidden;

	@media (max-width: 767px){
		padding: 7vh 0 10vh 0;
	}
`

const ImageWrapper = styled(motion.div)`
	position: relative;
	margin-bottom: 20px;

	&:before{
		content: '';
		display: block;
		padding-bottom: 152%;
	}

	@media (min-width: 1800px){
		min-height: 350px;
	};

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left:0;
		object-fit: cover;
	}

	@media (max-width: 600px){
		margin-bottom: 30px;
		&:before{
			padding-bottom: 150%;
		}
	}

	@media (max-width: 480px){
		margin-left: -20px;
		margin-right: -20px;
	}
`
const ImageEl = styled(Image)``

const Rating = styled(motion.div)`
	margin-bottom: 20px;
	display: grid;
	align-items: flex-end;
	gap: 10px;
	grid-template-columns: 1fr auto;
	@media (min-width: 1800px){
		font-size: 1.3rem !important;
		font-size: 1.8rem;
	};

	@media (max-width: 600px){
		font-size: 1.2rem;
	};
`
const Stars = styled.div``

const StarsGroup = styled.fieldset`
	position: relative;
    width: 7em;
    height: 1.4em;
    background-image: url(/offStar.svg);
    background-size: 1.4em auto;
    background-repeat: repeat-x;
`
const Star = styled.input`
	position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    height: 1.4em;
    font-size: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-size: 1.4em auto;
    background-repeat: repeat-x;
	cursor: pointer;
	&:focus {
		outline: none;
	}

	@media (any-hover: hover){
		&:hover{
			background-image: url(/onStar.svg);
		}
	}

	&:checked {
		background-image: url(/onStar.svg);
	}


	&:nth-of-type(1) {
		z-index: 5;
		width: 1.4em;
	}
	&:nth-of-type(2) {
		z-index: 4;
		width: 2.8em;
	}
	&:nth-of-type(3) {
		z-index: 3;
		width: 4.2em;
	}
	&:nth-of-type(4) {
		z-index: 2;
		width: 5.6em;
	}
	&:nth-of-type(5) {
		z-index: 1;
		width: 7em;
	}
`
const RatingStarFocus = styled.div`
`

const Rezult = styled.div``

const MovieContent = styled.div`
	margin-bottom: 50px;
	display: flex;
	grid-column-gap: 40px;

	@media (max-width: 1024px){
		grid-column-gap: 20px;
	}

	@media (max-width: 600px){
		display: block;
		margin-bottom: 30px;
	}
`
const MovieAside = styled(motion.aside)`
	flex: 0 0 30%;
	margin-bottom: 30px;
`

const MovieInformation = styled(motion.div)`
	flex-grow: 1;
`
const Text = styled(motion.p)`
	@media (min-width: 1700px){
		font-size: 1.1rem !important;
		font-size: 1.5rem;
	};

	@media (max-width: 600px){
		font-size: 1.2rem;
	};
`

const Table = styled.div`
	display: grid;
	gap: 20px;
	margin-bottom: 30px;

	@media (min-width: 1700px){
		margin-bottom: 35px;
		gap: 25px;
	};
`

const TableRow = styled(motion.div)`
	width: 100%;
	display: grid;
	grid-template-columns: 200px 1fr;

	@media (max-width: 1024px){
		grid-template-columns: 150px 1fr;
	}

	span{
		@media (min-width: 1700px){
			font-size: 1.1rem;
		};

		@media (max-width: 600px){
			font-size: 1.1rem;
		};
	}

	span:first-child{
		color: var(--light-dark);
	}

	@media (max-width: 480px){
		grid-template-columns: 120px 1fr;
	}
`
const GenresList = styled.ul`
	display: flex;
    flex-wrap: wrap;
	gap: 18px;

	li{
		position: relative;
		&:after{
			content: '';
			position: absolute;
			right: -11px;
			top: 50%;
			transform: translateY(-50%);
			border-radius: 100%;
			background-color: var(--bg-dark);
			width: 4px;
			height: 4px;
		}
		&:last-child{
			&:after{
				display: none;
			}
		}
		@media (min-width: 1700px){
			font-size: 1.1rem !important;
			font-size: 1.5rem;
		};

		@media (max-width: 600px){
			font-size: 1.2rem;
		};
	}
`

const VideoWrapper = styled(motion.div)`
	background-color: var(--bg-dark);
	position: relative;
	overflow: hidden;
	border-radius: 15px;

	&:before{
		content: '';
		display: block;
		padding-bottom: 45%;
		max-height: 500px;
		min-height: 300px;
	}
`
const getReleaseDate = (date) => {
	const releaseDate = parse(date, 'yyyy-MM-d', new Date());

	return `${format(releaseDate, 'MMM d')}, ${format(releaseDate, 'yyyy')}`;
}

const Movie = ({ movie }) => {
	const popular = movie && parseInt(movie.popularity, 10);
	const dispatch = useDispatch();
	const hours = movie && Math.trunc(movie.runtime / 60);
	const minutes = movie && movie.runtime % 60;


	return (
		<>
			{movie &&
				<>
					<Head>
						<title>{movie.title}</title>
						<meta name="description" content={movie.title} />
					</Head>
					<Wrapper
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<Container>
							<BreadCrumbs>{movie.title}</BreadCrumbs>
							<MovieContent>
								<MovieAside >
									<ImageWrapper
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										custom={1}
										variants={animationImagePageMovie}
									>
										<ImageEl
											fill
											src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + (movie.poster_path) : error}
											alt={movie.title}
										/>
									</ImageWrapper>
									<Rating
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										variants={animationContent}
										custom={1}
									>
										<Stars>
											<StarsGroup className="rating">
												<Star type="radio" name="rating" value="1" aria-label="awfully" />
												<Star type="radio" name="rating" value="2" aria-label="Badly" />
												<Star type="radio" name="rating" value="3" aria-label="Normal" />
												<Star type="radio" name="rating" value="4" aria-label="Good" defaultChecked />
												<Star className="rating__star" type="radio" name="rating" value="5" aria-label="Great" />
												<RatingStarFocus className="rating__focus"></RatingStarFocus>
											</StarsGroup>
										</Stars>
										<Rezult>4</Rezult>
									</Rating>
									<MButton
										pink
										button
										magnetic
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										variants={animationContent}
										custom={2}
										onClick={() => dispatch(openPopupTrailer())}
										borderRadius={'0'}
										stretch="true"
									>
										Watch Trailer
									</MButton>
								</MovieAside>
								<MovieInformation initial="hidden" whileInView="visible" viewport={{ once: true }}>
									<MTitle textAlign="left" marginBottom="3vh" variants={animationContent} custom={3} type="h3">{movie.title}</MTitle>
									<Table>
										{movie.production_countries[0]?.name && <TableRow variants={animationContent} custom={4}><span>Country</span> <span>{movie.production_countries[0].name}</span></TableRow>}
										{movie.release_date !== NaN && <TableRow variants={animationContent} custom={5}><span>Release</span> <span>{getReleaseDate(movie.release_date)}</span></TableRow>}
										{movie.runtime !== 0 && <TableRow variants={animationContent} custom={6}><span>Duration</span> <span>{hours + ':' + minutes}</span></TableRow>}
										{popular !== NaN && <TableRow variants={animationContent} custom={7}>
											<span>Views</span>
											<span>{popular.toLocaleString()}</span>
										</TableRow>
										}
										{
											movie.genres !== NaN && movie.genres.length > 0 &&
											<TableRow variants={animationContent} custom={8}>
												<span>Genres</span>
												<GenresList>
													{
														movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
													}
												</GenresList>
											</TableRow>
										}

									</Table>
									<Text variants={animationContent} custom={9}>
										{movie.overview && movie.overview}
									</Text>
								</MovieInformation>
							</MovieContent>
							<VideoWrapper
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={animationImagePageMovie}
							>
								<VideoPlayer src="giXco2jaZ_4" />
							</VideoWrapper>
						</Container>
						<PopupVideo src="giXco2jaZ_4" />
					</Wrapper>
				</>
			}
		</>
	)
}

export const getStaticPaths = async () => {
	const { data: movies } = await axios.get(getMovie(1));

	return {
		paths: movies.results.flatMap(movie => '/movie/' + movie.id),
		fallback: true
	}
}

export const getStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true
		}
	}


	const { data: movie } = await axios.get(currentMovie(params.id));

	return {
		props: {
			movie: movie
		}
	}
}

export default withLayout(Movie);