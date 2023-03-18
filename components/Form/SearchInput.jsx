import styled from 'styled-components';
import {useData} from '../../store/Context'
import { IoSearchSharp } from "react-icons/io5";

import {useSelector, useDispatch} from 'react-redux';
import {actionSearchMenu, setSearch} from '../../store/search/actions-search';

const MenuSearch = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 30px;
	height: 43px;
	background: var(--grey-dark);
	border-radius: 20px;

	@media (min-width: 1800px){
		height: 55px;
		border-radius: 30px;
	}
`

const Button = styled.button`
	cursor: pointer;
	position: absolute;
	top: 50%;
	right: 7px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
	background: var(--white);
	transition: var(--transition-sm);
	border-radius: 50%;
	z-index: 3;

	@media (min-width: 1800px){
		width: 35px;
		height: 35px;
	}

	@media (max-width: 1024px){
		background: unset;
		padding: 1px;
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
	color: var(--grey-dark);
	transition: var(--transition-sm);

	@media (min-width: 1800px){
		font-size: 1.3rem;
		padding: 2px;
	}

	@media (max-width: 1024px){
		padding: 4px;
	}

	@media (max-width: 767px){
		font-size: 1.3rem;
	}

`

const SearchLabel = styled.label`
	background: transparent;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
`
const Input = styled.input`
	position: relative;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	padding: 0px 20px;
	border-radius: 20px;
	color: var(--color-text);
	transition: var(--transition-sm);

	@media (min-width: 1800px){
		border-radius: 30px;
		font-size: 1.3rem;
		::-webkit-input-placeholder {
			font-size: 18px;
		}
		:-ms-input-placeholder {
			font-size: 18px;
		}
	}

	@media (max-width: 1024px){
		font-size: 16px;

		::-webkit-input-placeholder {
			font-size: 16px;
		}
		:-ms-input-placeholder {
			font-size: 16px;
		}
	}

	:focus{
		box-shadow: 5px 5px 19px -5px #353B48;
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

const SearchInput = () => {
	const search = useSelector(state => state.search.searchState);
	const dispatch = useDispatch();


	// useEffect(() => {
	// 	if (!shopFilterQuery.request.query) {
	// 	setSearch('')
	// 	} else {
	// 	setSearch(shopFilterQuery.request.query)
	// 	}
	// }, [shopFilterQuery.request.query])

	return (
		<MenuSearch>
			<SearchLabel>
				<Input
					type='search'
					placeholder='Search movie'
					value={search}
					onChange={(event) => dispatch(setSearch(event.target.value))}
					onKeyDown={(event) => searchByString(event)}
				/>
			</SearchLabel> 
			<Button type="button">
				<IoSearch/>
			</Button>
		</MenuSearch>
	)
}

export {SearchInput};