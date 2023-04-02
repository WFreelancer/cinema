import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import {SearchHeader} from './SearchHeader';
import {Container} from '../Container';

import {Logo} from '../Logo';
import {Burger, BurgerFixed} from '../Button';
import {FixedMenu} from '../Menu';
import {Menu} from '../Menu';
import axios from 'axios';


const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const HeaderTopWrapper = styled.div`
	background-color: var(--bg-dark);
	padding: 20px 0;

	@media (min-width: 1800px){
		padding: 30px 0;
	}

	@media (max-width: 767px){
		padding: 15px 0;
	}
`;

const HeaderBody = styled.div`
	display: flex;
	align-items: center;
`

const HeaderTop = () => {
	const [links, setLinks] = useState([]);
	const router = useRouter();

	const loadMenuLink = async () => {
		const response = await axios.get('http://localhost:5000/TopLinks');

		setLinks(response.data);
	}

	useEffect(() => {
		loadMenuLink();
	}, [])

	return (
		<HeaderTopWrapper>
			<Container>
				<HeaderContent>
					<Logo/>
					<HeaderBody>
						<Menu links={links}/>
						{router.route !== '/search' && <SearchHeader/>}
						<Burger/>
						<FixedMenu links={links}/>
						<BurgerFixed/>
					</HeaderBody>
				</HeaderContent>
			</Container>
		</HeaderTopWrapper>
		
	)
}

export {HeaderTop};