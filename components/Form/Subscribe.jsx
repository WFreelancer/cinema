import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Container} from '../Container'
import {MTitle} from '../Title'
import {MButton} from '../Button'
import {CustomInput} from './CustomInput'
import {PopupSuccess} from '../Popups'
import {useData} from '../../store/Context'
import {animationContent} from '../../helpers/Animations';

const FormWrapper = styled(motion.section)`
	position: relative;
	padding: 13vh 0;
	overflow: hidden;
`
const FormBg = styled(motion.div)`
	position: absolute;
	top:0;
	right: 0;
	width: 100%;
	height: 100%;
	user-select: none;
	background-color: var(--bg-dark);
`
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
const schema = yup.object().shape({
	firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required('Please enter your firstName.'),
	email: yup.string().email("email should have correct format").required('Please enter your email.'),
	message: yup.string().matches(/^([^0-9]*)$/, "Message should not contain numbers").required('Please enter your message.'),
})

const Subscribe = () => {
	const {setMessageSuccess} = useData();
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		setMessageSuccess(true);
		console.log(data);
		reset();
	};

	return(
		<FormWrapper initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
			<FormBg/>
			<Container>
				<MTitle marginBottom="9vh" light>Mail Us</MTitle>
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
			</Container>
			<PopupSuccess/>
		</FormWrapper>
	)
}

export {Subscribe};