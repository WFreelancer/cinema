import {useRef, useState, memo} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PreloaderIcon} from '../Preloader';
import {Container} from '../Container';
import {MButton} from '../Button';
import {MoviesList} from '../MoviesList';
import {Parallax} from '../../hooks/Parallax';
import {HeightEl} from '../../hooks/HeightEl';
import {useSelector, useDispatch} from "react-redux";
import {writeMoviesFiltered, changeCountLoadMore} from '../../store/movies/actions-movies';
import {getMovie} from '../../config';

const MovieWrapper = styled.section``
const MovieContent = styled.div`
	text-align:center;
	padding-bottom: 10vh;
`
const MovieContentFooter = styled.div`
	height: clamp(9em, 12vw, 11em);
`

const RoundedWrap = styled.div`
	width: 100%;
	position: relative;
	height: 0;
	display: block;
	z-index: 2;
`

const RoundedParent = styled(motion.div)`
	transform: translateY(-1px);
	will-change: height;
	width: 100%;
	top: 0;
	position: relative;
	overflow: hidden;
	height: 70px;

	@media (max-width: 768px){
		height: 50px;
	}
`
const RoundedChild = styled.div`
	width: 150%;
	display: block;
	position: absolute;
	background: #fff;
	height: 750%;
	left: 50%;
	border-radius: 50%;
	transform: translate(-50%, -86.666%);
	z-index: 1;
`


const MoreMovie = () => {
	const [loading, setLoading] = useState(false);
	const {moviesFiltered, loadMoreCount, genreId} = useSelector((state) => state.movies);
	const dispatch = useDispatch();
	const ref = useRef(null);
	const round = useRef(null);
	const payload = {moviesFiltered, loading};
	const x = Parallax(ref, payload);
	const height = HeightEl(round, payload);


	const loadMore = (genre) => {
		setLoading(true);
		fetch(getMovie(loadMoreCount, genre))
		.then(response => response.json())
		.then(data => {
			setTimeout(() => {
				dispatch(writeMoviesFiltered([...moviesFiltered, ...data.results]));
				dispatch(changeCountLoadMore(loadMoreCount + 1));
				setLoading(false);
			}, 1000);
		})
	}


	return(
		<MovieWrapper>
			<Container>
				<MovieContent>
					{moviesFiltered.length > 0 &&<MoviesList movies={moviesFiltered}/>}
					<MovieContentFooter>
						{loading ? <PreloaderIcon/> :
							<MButton
								ref={ref}
								button
								pink
								magnetic
								circle="true"
								onClick={() => loadMore(genreId)}
								style={{ x }}
							>
								Load More
							</MButton>
						}
					</MovieContentFooter>
				</MovieContent>
			</Container>
			<RoundedWrap>
				<RoundedParent
					ref={round}
					style={{ height }}
				>
					<RoundedChild></RoundedChild>
				</RoundedParent>
			</RoundedWrap>
		</MovieWrapper>
	)
}

export default memo(MoreMovie);

