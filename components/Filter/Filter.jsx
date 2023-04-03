import styled from 'styled-components';
import {motion} from 'framer-motion';
import {animationWord} from '../../helpers/Animations';

import {Container} from '../Container';
import {MCheckbox} from '../Form';
import {MTitle} from '../Title';
import {useSelector, useDispatch} from "react-redux";
import {writeMoviesFiltered, changeGenre, changeCountLoadMore} from '../../store/movies/actions-movies';
import {getMovie} from '../../config';

const FilterWrapper = styled(motion.section)`
	padding: 10vh 0;
	text-align: center;
	@media (max-width: 1024px){
		padding: 6vh 0;
	}
`
const Text = styled(motion.p)`
	text-align: center;
	margin: 0 auto 40px auto;
	max-width: 900px;

	@media (min-width: 1800px){
		margin: 0 auto 60px auto;
		max-width: 1200px;
	}

	@media (max-width: 1024px){
		margin: 0 auto 20px auto;
	}
`
const List = styled(motion.ul)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 15px;
	@media (min-width: 1800px){
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`

const WordWrapper = styled.span`
	position: relative;
	display: inline-flex;
	overflow: hidden;
`
const WordAnimation = styled(motion.span)`
	position: relative;
	display: block;
	transform: translate(0px, 100%);
	padding: 3px 0;
`
const Filters = {
	title: "Watch your favorite movies online",
	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cup itate dolorem, totam, inventore maiores qui omnis cumque soluta labore corrupti, porro atque unde veniam facere inc id unt vero aspernatur architecto tenetur.",
	item: [
			{
				id: 0,
				title:"All"
			},
			{
				id: 28,
				title:"Action"
			},
			{
				id: 12,
				title:"Adventure"
			},
			{
				id: 35,
				title:"Comedy"
			},
			{
				id: 18,
				title:"Drama"
			},
			{
				id: 10751,
				title:"Family"
			}
  	]
}
const Filter = () => {
	const dispatch = useDispatch();
	const {genreId} = useSelector((state) => state.movies);
	const wordsTitle = Filters.title.split(' ');
	const wordsText = Filters.text.split(' ');


	const handleFilter = async (genre) => {
		fetch(getMovie(1, genre))
		.then(response => response.json())
		.then(data => {
			dispatch(changeGenre(genre));
			dispatch(changeCountLoadMore(2));
			dispatch(writeMoviesFiltered([...data.results]));
		})
	}

	return(
		<FilterWrapper>
			<Container>
				<MTitle initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} type="h2">
					{wordsTitle.map((word, index) => (
						<WordWrapper key={index}>
							<WordAnimation variants={animationWord} custom={index}>{word}&nbsp;</WordAnimation>
						</WordWrapper>
					))}
				</MTitle>
				<Text initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}>
					{wordsText.map((word, index) => (
						<WordWrapper key={index}>
							<WordAnimation variants={animationWord}>{word}&nbsp;</WordAnimation>
						</WordWrapper>
					))}
				</Text>
				<List initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}>
					{Filters.item.map((dataFilter) => (
						<motion.li key={dataFilter.id} variants={animationWord}>
							<MCheckbox
								dark
								magnetic
								handleCheckbox={handleFilter}
								activeCheckox={genreId}
								type='radio'
								{...dataFilter}
							>
								{dataFilter.title}
							</MCheckbox>
						</motion.li>
					))}
				</List>
			</Container>
		</FilterWrapper>
	)
}

export {Filter};