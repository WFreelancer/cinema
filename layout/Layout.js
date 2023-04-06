import { useEffect } from 'react';
import styled from 'styled-components';
import {OverlayScrollbars} from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css';
import {motion} from 'framer-motion';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Cookies} from '../components/Popups'
import {useSelector, useDispatch} from 'react-redux';
import {actionSearchMenu} from '../store/search/actions-search';

const Wrapper = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`
const Main = styled(motion.main)`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	padding-top: 146px;

	@media (min-width: 1800px){padding-top: 216px;}
	@media (max-width: 1024px){padding-top: 126px;}

	@media (max-width: 768px){
		padding-top: 116px;
	}
`

const Layout = ({children}) => {
	const openSearch = useSelector(state => state.search.openSearch);
	const search = useSelector(state => state.search.searchState);
	const dispatch = useDispatch();
	

	useEffect(() => {
		window.scrollTo(0, 0);
		let scrollBars = OverlayScrollbars(document.querySelector('body'), {});

		return () => {
			scrollBars.destroy();
		}
	}, [])

	return(
		<>
			<Wrapper
				onClick={() => (search === '' && openSearch === true) &&
				dispatch(actionSearchMenu(false))}
			>
				<Header/>
				<Main
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
				>
					{children}
				</Main>
				<Footer/>
				<Cookies/>
			</Wrapper>
		</>
	)
}

export const withLayout = (Component) => {
	return function withLayoutComponent(props){
		return(
			<Layout>
				<Component {...props}/>
			</Layout>
		)
	}
}