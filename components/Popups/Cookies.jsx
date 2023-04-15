import {useEffect, memo} from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image';
import {useSelector, useDispatch} from 'react-redux';
import {openCookies} from '../../store/popup/actions-popup';

import {MButton} from '../Button';
import banner from '../../public/cookies.png';


const CookiesContent = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	z-index: 11;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--white);
	color: #000;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 5vh;
	box-shadow: 0px 2px 15px var(--bg-dark);
	transition: all 0.6s ease;
	transform: translateY(101%);

	@media (max-width: 767px){
		transition: all 0.6s ease-in-out;
		transform: translateY(125%);
		padding: 60px 80px;
	}

	@media (max-width: 480px){
		transform: translateY(130%);
	}

	@media (max-width: 380px){
		padding: 40px 60px;
	}

	${({cookies}) => cookies &&`
			transform: translateY(0);
			@media (max-width: 767px){
				transform: translateY(0);
			}
		`
	}
`
const Body = styled.div`
	position: relative;
	max-width: 600px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (min-width: 1800px){
		max-width: 1000px;
	}
`

const CookiesClose = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	width: 30px;
	height: 30px;

	@media (min-width: 1800px){
		width: 50px;
		height: 50px;
	}
`
const CookiesImageLeft = styled.div`
	position: absolute;
	top: -20px;
	left: -250px;
	width: 200px;
	height: 200px;

	@media (min-width: 1800px){
		width: 300px;
		height: 300px;
	}

	@media (max-width: 1024px){
		width: 180px;
		height: 180px;
		top: 20px;
		left: -100px;
	}

	@media (max-width: 767px){
		width: 140px;
		height: 140px;
		top: -140px;
	}

	@media (max-width: 480px){
		width: 150px;
		height: 150px;
		top: -140px;
	}

	

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

const CookiesImageRight = styled.div`
	position: absolute;
	top: -20px;
	right: -250px;
	width: 200px;
	height: 200px;
	transform: scale(-1, 1);

	@media (min-width: 1800px){
		width: 300px;
		height: 300px;
	}

	@media (max-width: 1024px){
		width: 180px;
		height: 180px;
		right: -130px;
		top: 20px;
		right: -100px;
	}

	@media (max-width: 767px){
		width: 150px;
		height: 150px;
		top: 70px;
		right: -80px;
	}

	@media (max-width: 480px){
		width: 140px;
		height: 140px;
		top: 90px;
		right: -100px;
	}

	@media (max-width: 380px){
		display: none;
	}

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`


const Title = styled.h4`
	margin-bottom: 10px;
	font-weight: var(--fw-bold);
	font-size: 1.4rem;
	text-transform: uppercase;
	text-align: center;
	@media (min-width: 1800px){
		font-size: 2rem;
		margin-bottom: 20px;
	}
`
const Text = styled.p`
	margin-bottom: 20px;
	text-align: center;
	@media (min-width: 1800px){
		font-size: 1.5rem;
		margin-bottom: 30px;
	}
`
const storage = () => {
	const data = localStorage.getItem('cookies')
	return data ? false : true;
}
const Cookies = () => {
	const cookies = useSelector(state => state.popup.cookies);
	const dispatch = useDispatch();


	const handleCookies = () => {
		localStorage.setItem('cookies', true);
		dispatch(openCookies(false));
	}

	useEffect(() =>{
		setTimeout(() => dispatch(openCookies(storage())), 5000);
		// eslint-disable-next-line
	}, [])


	return (
		<CookiesContent cookies={cookies}>
			<CookiesClose onClick={() => dispatch(openCookies(false))}>
				<IoCloseSharp size="100%"/>
			</CookiesClose>
			<Body>
				<CookiesImageLeft>
					<Image src={banner} alt="banner" fill/>
				</CookiesImageLeft>
				<Title>We use cookies</Title>
				<Text>We use cookies to improve our site and your shopping experience, and have recently updated our cookie policy.</Text>
				<MButton magnetic button pink onClick={handleCookies}>
					Accept & close
				</MButton>
				<CookiesImageRight>
					<Image src={banner} alt="banner" fill/>
				</CookiesImageRight>
			</Body>
		</CookiesContent>
	)
}

export default memo(Cookies);