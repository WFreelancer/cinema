import styled from 'styled-components'
import { motion } from 'framer-motion'
import { animationCard } from '../../helpers/Animations';
import { MCard } from '../Card'

const MoviesBody = styled(motion.div)`
	position: relative;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	grid-gap: 30px;
	display: grid;
	margin-bottom: 70px;

	@media (min-width: 1700px){
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}

	@media (max-width: 1024px){
		margin-bottom: 50px;
	}
`


const MoviesList = ({ movies = [] }) => {
	return (
		<MoviesBody>
			{movies.map((movie) => {
				return <MCard
					layout
					key={movie.id}
					{...movie}
					variants={animationCard}
					initial="hidden"
					exit={{ opactiy: 0 }}
					whileInView="visible"
					viewport={{ once: true }}
				/>
			})}
		</MoviesBody>
	)
}

export { MoviesList }