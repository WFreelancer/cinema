import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useData} from '../../store/Context';

import {Container} from '../Container';
import {MCheckbox} from '../Form';
import {MTitle} from '../Title';

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
		font-size: 1.8rem;
		line-height: 2.3rem;
		margin: 0 auto 60px auto;
		max-width: 1200px;
	}

	@media (max-width: 1024px){
		margin: 0 auto 20px auto;
	}
`
const List = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	gap: 15px;
	@media (min-width: 1800px){
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`

const Filter = ({Filters}) => {
	const { handleСheckbox, filterCount} = useData();

	return(
		<FilterWrapper>
			<Container>
				<MTitle>{Filters.title}</MTitle>
				<Text>{Filters.text}</Text>
				<List>
					{Filters.item.map((dataFilter, ) => {
						return <MCheckbox
							dark
							key={dataFilter.id}
							handleСheckbox={handleСheckbox}
							filterCount={filterCount}
							type='radio'
							{...dataFilter}
						>
							{dataFilter.title}
						</MCheckbox>
					})}
				</List>
			</Container>
		</FilterWrapper>
	)
}

export {Filter};