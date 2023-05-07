import { forwardRef } from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { IoEyeSharp, IoTimeOutline, IoHeartSharp } from "react-icons/io5";
import error from '../../public/image-not-found.png';
import { format, parse } from "date-fns";

const CardWrapper = styled.a`
	position: relative;
	display: grid;
	grid-template-rows: auto 1fr auto auto;
	cursor: pointer;
`
const Figure = styled.figure`
	min-height: 250px;
	position: relative;
	padding-bottom: 145%;
	margin-bottom: 10px;
	overflow: hidden;
	border-radius: 15px;
`

const ImageEl = styled(Image)`
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
`

const TitleEl = styled.h3`
	font-family: var(--font-lexend);
	font-size: 1.1rem;
	margin-bottom: 5px;
	line-height: 1.5rem;
	font-weight: 500;

	@media (max-width: 767px){
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`
const YearEl = styled.span`
	font-family: var(--font-lexend);
	font-size: 0.9rem;
	color: var(--light-dark);

	span{
		color: var(--bg-dark);
	}

	@media (min-width: 1700px){
		font-size: 1rem;
	}

	@media (max-width: 768px){
		font-size: 1rem;
	};
`
const Text = styled.p`
	font-family: var(--font-lexend);
	color: var(--light-dark);
	font-size: 0.85rem;
	margin-bottom: 10px;

	@media (min-width: 1700px){
		font-size: 1rem;
		line-height: 1.4rem;
	}
	@media (max-width: 768px){
		font-size: 1rem;
	};
`

const Figcaption = styled.figcaption`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;

	:before{
		content: '';
		background: rgba(31, 35, 36, 0.4);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: all ease 0.3s;
	}

	@media (any-hover: hover){
		${CardWrapper}:hover & {
			:before{
				opacity: 1;
			}
		}
	}
	
`

const Body = styled.div`
	color: var(--white);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 1.5em 1em;
	width: 100%;
	opacity: 0;
	transform: translate3d(0,10px,0);
	transition-delay: 0.05s;
	transition-duration: 0.35s;

	@media (any-hover: hover){
		${CardWrapper}:hover & {
			opacity: 1;
			transform: translate3d(0,0,0);
		}
	}
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	span{
		display: inline-flex;
		margin-bottom: 5px;
	}
`
const getReleaseDate = (date) => {
	const releaseDate = parse(date, 'yyyy-MM-d', new Date());

	return `${format(releaseDate, 'MMM d')}, ${format(releaseDate, 'yyyy')}`;
}
// eslint-disable-next-line
const Card = forwardRef((props, ref) => {
	const { poster_path, title, release_date, overview, popularity, id } = props;
	const popular = parseInt(popularity, 10);

	return (
		<Link href={`/movie/${id}`} legacyBehavior>
			<CardWrapper ref={ref}>
				<Figure>
					<ImageEl src={poster_path ? 'https://image.tmdb.org/t/p/w500' + poster_path : error} alt={title} fill sizes="100%" />
					<Figcaption>
						<Body>
							<Column>
								<span>{popular}</span>
								<IoEyeSharp size={20} />
							</Column>
							<Column>
								<span>01:24</span>
								<IoTimeOutline size={20} />
							</Column>
							<Column>
								<span>367</span>
								<IoHeartSharp size={20} />
							</Column>
						</Body>
					</Figcaption>
				</Figure>
				<TitleEl>{title}</TitleEl>
				<Text>{overview && overview.slice(0, 60)}...</Text>
				{release_date && <YearEl><span>Release</span> {getReleaseDate(release_date)}</YearEl>}
			</CardWrapper>
		</Link>
	)
})

const MCard = motion(Card);

export { Card, MCard }