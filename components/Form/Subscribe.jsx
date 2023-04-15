import { memo } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Container} from '../Container';
import {Title} from '../Title';
import {MButton} from '../Button';
import {CustomInput} from './CustomInput';
import {PopupSuccess} from '../Popups';
import {useDispatch, useSelector} from 'react-redux';
import {openPopupSuccess} from '../../store/popup/actions-popup';

import { useLayoutEffect, useState, useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';


const FormWrapper = styled(motion.div)`
	background-color: var(--bg-dark);
	position: relative;
	padding: 13vh 0 10vh 0;
	overflow: hidden;
	min-height: calc(100vh - 132px);
	display: flex;
	align-items: center;

	@media (min-width: 1800px){
		min-height: calc(100vh - 188px);
	}

	@media (max-width: 1024px){
		padding: 10vh 0 7vh 0;
		min-height: calc(100vh - 128px);
	}

	@media (max-width: 768px){
		min-height: calc(100vh - 124px);
	}

	@media (max-width: 480px){
		padding: 8vh 0 5vh 0;
		min-height: calc(100vh - 115px);
	}
`

const FormContent = styled(motion.div)``


const FormInit = styled.form``
const FormList = styled.ul`
	margin-bottom: 50px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 60px;
	grid-row-gap: 80px;

	li:last-child{
		grid-column: span 2;
	};

	@media (min-width: 1800px){
		margin-bottom: 80px;
		grid-column-gap: 80px;
		grid-row-gap: 120px;
	};

	@media (max-width: 550px){
		display: block;
		li{
			margin-bottom: 60px;
		}
	}
`
const OverlayGradient = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	width: 100%;
	pointer-events: none;
	height: calc(clamp(5em,21vh,12em) * .75);
	background: linear-gradient(to bottom,hsla(225, 7%, 12%) 0%, hsla(225, 7%, 12%, 0.987) 8.1%, hsla(225, 7%, 12%, 0.951) 15.5%, hsla(225, 7%, 12%, 0.896) 22.5%, hsla(225, 7%, 12%, 0.825) 29%, hsla(225, 7%, 12%, 0.741) 35.3%, hsla(225, 7%, 12%, 0.648) 41.2%, hsla(225, 7%, 12%, 0.55) 47.1%, hsla(225, 7%, 12%, 0.45) 52.9%, hsla(225, 7%, 12%, 0.352) 58.8%, hsla(225, 7%, 12%, 0.259) 64.7%, hsla(225, 7%, 12%, 0.175) 71%, hsla(225, 7%, 12%, 0.104) 77.5%, hsla(225, 7%, 12%, 0.049) 84.5%, hsla(225, 7%, 12%, 0.013) 91.9%, hsla(225, 7%, 12%, 0) 100%);
	opacity: .75;
	z-index: 1;
	@media (max-width: 768px){
		top: 10px;
	}
	@media (max-width: 480px){
		top: 0px;
		height: calc(clamp(3em,12vh,7em) * .75);
	}
`
const schema = yup.object().shape({
	firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required('Please enter your firstName.'),
	email: yup.string().email("email should have correct format").required('Please enter your email.'),
	message: yup.string().matches(/^([^0-9]*)$/, "Message should not contain numbers").required('Please enter your message.'),
})

const Subscribe = () => {
	const dispatch = useDispatch();
	const {moviesFiltered} = useSelector((state) => state.movies);
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const { scrollY } = useScroll();
	const ref = useRef(null);
	const initial = elementTop - clientHeight
	const final = elementTop + 50;
	const yRange = useTransform(scrollY, [initial, final], [-100, 0]);

	useLayoutEffect(() => {
		const onResize = () => {
			setElementTop(ref && ref.current.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
		// eslint-disable-next-line
	}, [ref, moviesFiltered]);

	const y = useSpring(yRange, { stiffness: 300, damping: 90 });

	const onSubmit = data => {
		dispatch(openPopupSuccess(true));
		console.log(data);
		reset();
	};

	return(
		<FormWrapper initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
			<OverlayGradient/>
			<Container>
				<FormContent ref={ref} style={{y}}>
					<Title marginBottom="9vh" light>Mail Us</Title>
					<FormInit noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
						<FormList>
							<li>
								<CustomInput
									label="FirstName"
									name="firstName"
									type="text"
									register={register}
									error={!!errors?.firstName}
									helperText={errors?.firstName?.message}
								/>
							</li>
							<li>
								<CustomInput
									label="Email"
									name="email"
									type="text"
									register={register}
									error={!!errors?.email}
									helperText={errors?.email?.message}
								/>
							</li>
							<li>
								<CustomInput
									label="Your Message"
									name="message"
									type="textarea"
									register={register}
									error={!!errors?.message}
									helperText={errors?.message?.message}
								/>
							</li>
						</FormList>
						<MButton magnetic button type="submit" pink>
							Send
						</MButton>
					</FormInit>
				</FormContent>
			</Container>
			{PopupSuccess && <PopupSuccess/>}
		</FormWrapper>
	)
}

export default memo(Subscribe);