import styled from 'styled-components'
import {useData} from '../../store/Context'
import {motion } from 'framer-motion';
import {PreloaderIcon} from '../Preloader';
import {Container} from '../Container';
import {MButton} from '../Button';
import {MoviesList} from '../MoviesList';

import { useSelector } from "react-redux";
import {animationContent} from '../../helpers/Animations';

const MovieWrapper = styled.section``
const MovieContent = styled.div`
	text-align:center;
	padding-bottom: 10vh;
	@media (max-width: 1024px){
		padding: 6vh 0;
	}
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
	// const movies = useSelector((state) => state.movies);
	// const moviesFiltered = useSelector((state) => state.filters);
	// const { animationContent, showMore} = useData();
	const {moviesFiltered = [], showMore} = useData();

	
	return(
		<MovieWrapper>
			<Container>
				<MovieContent>
					{!moviesFiltered.length ?
						<PreloaderIcon/> :
						<>
							<MoviesList movies={moviesFiltered}/>
							<MButton
								button
								pink
								magnetic
								circle
								onClick={() => showMore()}
							>
								LOAD MORE
							</MButton>
						</>
					}
				</MovieContent>
			</Container>
			<RoundedWrap>
				<RoundedParent
					initial={{height: 70}}
					// animate={{height: 0}}
					// transition={{duration: 0.8}}
				>
					<RoundedChild></RoundedChild>
				</RoundedParent>
			</RoundedWrap>
		</MovieWrapper>
	)
}

export {MoreMovie};

