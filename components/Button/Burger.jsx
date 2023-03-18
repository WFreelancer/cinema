import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux'
import {actionOpenMenu} from '../../store/menu/actions-menu'

const BurgerEl = styled.div`
	display: none;
	flex-direction:column;
	width:30px;
	margin-left: 15px;
	cursor:pointer;

	@media (max-width: 767px){
		display:flex;
	}

	span{
		background: var(--white);
		border-radius:10px;
		height:2px;
		margin: 3px 0;
		transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

		:nth-of-type(1){
			width: 50%;
		}
		:nth-of-type(2){
			width: 100%;
		}
		:nth-of-type(3){
			width: 75%;
		}

		${({menuOpen}) => menuOpen &&`
			:nth-of-type(1){
				transform-origin:bottom;
				transform:rotatez(45deg) translate(4px,0px)
			}

			:nth-of-type(2){
				transform-origin:top;
				transform:rotatez(-45deg)
			}

			:nth-of-type(3){
				transform-origin:bottom;
				width:50%;
				transform: translate(13px,-5px) rotatez(45deg);
			}`
		}
	}
`

const Burger = () => {
	const menuOpen = useSelector(state => state.menu.menuOpen);
	const dispatch = useDispatch();

	return (
		<BurgerEl onClick={() => dispatch(actionOpenMenu(!menuOpen))} menuOpen={menuOpen}>
			<span></span>
			<span></span>
			<span></span>
		</BurgerEl>
	)
}

export {Burger}