import { forwardRef } from "react";
import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";



const TextFieldEl = styled(TextField)`
	color: #fff;
	width: 100%;
	font-family: inherit;

	.MuiFormLabel-root{
		color: #fff;
		&.Mui-focused{
			color: #fff;
		}
	}

	input{
		color: #fff;
	}

	.MuiInput-underline{
		&:before{
			border-bottom: 1px solid #fff;
		}
		&:after{
			border-bottom: 1px solid #F73A4C;
		}
		&:hover{
			&:not(.Mui-disabled)::before{
				border-bottom: 1px solid #fff;
			}
		}
	}
`


const InputWrapper = styled.div`
	position: relative;
	cursor:pointer;
	height: 40px;
	width: 100%;
	@media (min-width: 1800px){
		height: 55px;
	}
`

const InputError = styled.span`
	position: absolute;
	top: calc(100% + 12px);
	right: 0;
	color: var(--bg-pink);

	@media (min-width: 1800px){
		font-size: 1.5rem;
	};
`

// eslint-disable-next-line
const CustomInput = forwardRef(({label, error, name, type, helperText, register, ...props}, ref) => {
	return(
		<InputWrapper>
			<TextFieldEl
				{...register(name)}
				{...props}
				type={type}
				name={name}
				label={label}
				inputRef={ref}
			/>
			{error && <InputError>{helperText || 'This field is required'}</InputError>}
		</InputWrapper>
	)
})

export {CustomInput};