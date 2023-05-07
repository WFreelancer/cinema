import styled from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";

import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../store/search/actions-search';

const MenuSearch = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 30px;
	height: 50px;
	background: var(--bg-dark);
	border-radius: 35px;

	@media (min-width: 1700px){
		height: 55px;
		border-radius: 35px;
	}
`

const Button = styled.button`
	cursor: pointer;
	position: absolute;
	top: 50%;
	right: 7px;
	transform: translateY(-50%);
	width: 35px;
	height: 35px;
	background: var(--white);
	transition: var(--transition-sm);
	border-radius: 50%;
	z-index: 3;

	@media (min-width: 1700px){
		width: 35px;
		height: 35px;
	}

	@media (max-width: 1024px){
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
	padding: 4px;
	cursor: pointer;
	font-size: 1rem;
	color: var(--grey-dark);
	transition: var(--transition-sm);

	@media (min-width: 1700px){
		font-size: 1.1rem;
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
	border-radius: 35px;
	color: var(--color-text);
	transition: var(--transition-sm);
	font-size: 1rem;
	@media (min-width: 1700px){
		border-radius: 35px;
		font-size: 1.1rem;
		::-webkit-input-placeholder {
			font-size: 16px;
		}
		:-ms-input-placeholder {
			font-size: 16px;
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

const SearchInput = ({ searchMovies = Function.prototype }) => {
	const { searchState } = useSelector(state => state.search);
	const dispatch = useDispatch();


	return (
		<MenuSearch>
			<SearchLabel>
				<Input
					type='search'
					placeholder='Search movie'
					value={searchState}
					onChange={(event) => dispatch(setSearch(event.target.value))}
					onKeyDown={(event) => event.key === 'Enter' && searchMovies(searchState)}
				/>
			</SearchLabel>
			<Button type="button" onClick={() => searchMovies(searchState)}>
				<IoSearch />
			</Button>
		</MenuSearch>
	)
}

export { SearchInput };