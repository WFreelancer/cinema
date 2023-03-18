import { forwardRef } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'

import error from '../../assets/images/image-not-found.png';

const CardWrapper = styled(NavLink)`
	height: 100%;
	display: flex;
	flex-direction: column;
`
const Figure = styled.figure`
	min-height: 280px;
	position: relative;
	margin-bottom: 10px;
	overflow: hidden;

	@media (min-width: 1800px){
		min-height: 380px;
	}

	@media (max-width: 480px){
		min-height: 350px;
	}

	img{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		object-fit: cover;
		transition: transform .4s linear;

		@media (any-hover: hover){
			${CardWrapper}:hover & {
				transform: scale(1.1);
			}
		}
	}
`

const Figcaption = styled.figcaption`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding:  0 10px 10px 10px;
`

const Body = styled.div`
	backdrop-filter: blur(9px);
	background: rgba(77, 77, 77, 0.067);
	padding: 1em 1em;
	width: 100%;
	border-radius: 5px;
	min-height: 79px;
`

const TitleEl = styled.h3`
	color: var(--white);
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.8rem;
	line-height: 1.1rem;
	margin-bottom: 10px;
	font-weight: var(--fw-bold);

	@media (min-width: 1800px){
		font-size: 1.5rem;
		line-height: 2rem;
	}
`

const Info = styled.div`
	opacity: 0.9;
	color: var(--white);
	font-size: 0.9rem;
	line-height: 1.2rem;
	text-align: left;

	@media (min-width: 1800px){
		font-size: 1.3rem;
		line-height: 1.5rem;
	}
`
const CardSm = forwardRef((props, ref) => {
	const {backdrop_path, title, id, release_date, dark} = props;

	return(
		<CardWrapper dark={dark} ref={ref} to={`/movie/${id}`}>
			<Figure>
				<img src={backdrop_path ? 'https://image.tmdb.org/t/p/w500' + backdrop_path : error} alt={title} />
				 <Figcaption>
					<Body>
						<TitleEl>{title}</TitleEl>
						<Info>
							{release_date}
						</Info>
					</Body>
				</Figcaption> 
			</Figure>
		</CardWrapper>
	)
})

const MCardSm = motion(CardSm);

export {CardSm, MCardSm}