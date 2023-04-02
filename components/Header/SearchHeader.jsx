import {useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";

import {useSelector, useDispatch} from 'react-redux';
import {actionSearchMenu, setSearch} from '../../store/search/actions-search';


const Button = styled.button`
	padding: 3px;
	height: 30px;
	background:  ${props => !props.active ? `transparent` : `var(--white)`};
	transition: var(--transition-sm);
	border-radius: 0px 15px 15px 0px;
	cursor: pointer;

	@media (min-width: 1800px){
		padding: 5px;
		border-radius: 0px 25px 25px 0px;
		height: 45px;
	};

	@media (max-width: 1024px){
		background: unset;
		padding: 1px;
	}

	svg{
		@media (max-width: 1024px){
			background: transparent;
			:hover{
				color: var(--white);
			}
		}
		background:  ${props => !props.active ? `transparent` : `var(--bg-pink)`};
		@media (any-hover: hover){
			:hover{
				color: ${props => !props.active ? `var(--bg-pink)` : `var(--white)`};
			}
		}
	}
`
const ButtonMobile = styled.button`
	display: none;
	cursor: pointer;
	position: absolute;
	top: 50%;
	right: 5px;
	transform: translateY(-50%);
	width: 35px;
	height: 35px;
	background: var(--bg-dark);
	transition: var(--transition-sm);
	border-radius: 50%;
	z-index: 3;

	@media (max-width: 1024px){
		display: block;
	}

	@media (any-hover: hover){
		:hover{
			svg{
				color: var(--bg-pink);
			}
		}
	}
`

const IoSearch = styled(IoSearchSharp)`
	border-radius: 50%;
	width: 25px;
	height: 25px;
	padding: 5px;
	cursor: pointer;
	font-size: 1rem;
	color: var(--white);
	transition: var(--transition-sm);

	@media (min-width: 1800px){
		width: 35px;
		height: 35px;
		font-size: 1.3rem;
	}

	@media (max-width: 1024px){
		padding: 4px;
	}

	@media (max-width: 767px){
		font-size: 1.3rem;
	}

`
const MenuSearch = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`
const SearchLabel = styled.label`
	will-change: transform;
	transition: var(--animation-primary);
	position: relative;
	height: 30px;
	overflow: hidden;
	width: ${props => !props.active ? `0` : `200px`};
	z-index: 3;

	@media (min-width: 1800px){
		height: 45.5px;
		width: ${props => !props.active ? `0` : `320px`};
	}

	@media (max-width: 1024px){
		position: absolute;
		top: 107px;
		right: 0px;
		height: 40px;
		margin-right: 0;
		width: 350px;
		box-shadow: var(--shadow);
		transform: ${props => !props.active ? `translateY(-70px)` : `translateY(0px)`};
		pointer-events: ${props => !props.active ? `none` : `auto`};
		box-shadow: var(--shadow);
		z-index: -22222;
	}

	@media (max-width: 768px){
		top: 102px;
	};

	@media (max-width: 480px){
		width: 300px;
		right: -50px;
	};

	@media (max-width: 380px){
		width: 290px;
	};
`
const Input = styled.input`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 0px 10px;
	border-radius: 15px 0px 0px 15px;
	border: 2px solid transparent;

	@media (min-width: 1800px){
		font-size: 1.3rem;
		padding: 0px 20px;
		border-radius: 25px 0px 0px 25px;
		::-webkit-input-placeholder {
			font-size: 18px;
		}
		:-ms-input-placeholder {
			font-size: 18px;
		}
	}

	@media (max-width: 1024px){
		font-size: 16px;
		border-radius: 0px;
	}

	:focus{
		
		::-webkit-input-placeholder { /* Chrome/Opera/Safari */
			color: transparent;
		}
		::-moz-placeholder { /* Firefox 19+ */
			color: transparent;
		}
		:-ms-input-placeholder { /* IE 10+ */
			color: transparent;
		}
	}
`

const SearchHeader = () => {
	const openSearch = useSelector(state => state.search.openSearch);
	const search = useSelector(state => state.search.searchState);
	const dispatch = useDispatch();
	const router = useRouter();

	const toggleSearch = async () => {
		if(search === '') {
			dispatch(actionSearchMenu(!openSearch));
		}
		else{
			await router.push('/search');
		}
	};

	const goToSearchPage = async () => {
		if(search !== '') {
			await router.push('/search');
		}
	}


	const searchByString = async (event) => {
		if (router.route !== '/search' && event.key === 'Enter' && search !== '') {
			await router.push('/search');
		}
	}

	return (
		<MenuSearch onClick={(e) => e.stopPropagation()}>
			<SearchLabel active={openSearch} >
				<Input
					type='search'
					placeholder='Search movie'
					value={search}
					onChange={(event) => dispatch(setSearch(event.target.value))}
					onKeyDown={(event) => searchByString(event)}
				/>
				<ButtonMobile onClick={goToSearchPage} type="button">
					<IoSearch/>
				</ButtonMobile>
			</SearchLabel> 
			<Button onClick={toggleSearch} active={openSearch} type="button">
				<IoSearch/>
			</Button>
		</MenuSearch>
	)
}

export {SearchHeader};