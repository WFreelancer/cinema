import { useEffect } from 'react';
import styled from 'styled-components';
import {OverlayScrollbars} from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css';

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
const Main = styled.main`
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
	const menuOpen = useSelector(state => state.menu.menuOpen);
	const popupOpen = useSelector(state => state.popup);
	const dispatch = useDispatch();
	
	// useEffect(() => {
	// 	if(menuOpen || popupOpen){
	// 		document.querySelector('.wrapper').style.overflow = 'hidden'
	// 	}else{
	// 		document.querySelector('.wrapper').style.overflow = ''
	// 	}
	// }, [
	// 	menuOpen,
	// 	popupOpen
	// ]);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// 	let scrollBars = OverlayScrollbars(document.querySelector('body'), {
	// 		scrollbars: {
	// 			visibility: 'hidden',
	// 		},
	// 	});

	// 	return () => {
	// 		scrollBars.destroy();
	// 	}
	// }, [])

	return(
		<>
			<Wrapper
				onClick={() => (search === '' && openSearch === true) &&
				dispatch(actionSearchMenu(false))}
			>
				<Header/>
				<Main>
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