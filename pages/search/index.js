import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {withLayout} from "../../layout/Layout";
import {Container} from '../../components/Container';
import {SearchInput} from '../../components/Form';

import {useSelector, useDispatch} from 'react-redux';
import {setSearch} from '../../store/search/actions-search';

const SearchWrapper = styled(motion.div)`
	padding: 70px 0;

	@media (min-width: 1800px){
		font-size: 1.3rem;
	}
`

const Search = () => {
	const search = useSelector(state => state.search.searchState);
	const dispatch = useDispatch();

	return(
		<SearchWrapper
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			<Container>
				<SearchInput/>
				Search: {search}
			</Container>
		</SearchWrapper>
	)
}

export default withLayout(Search);