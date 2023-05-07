import styled from 'styled-components';
import { memo } from 'react';
import {HeaderTop} from './HeaderTop'
import {HeaderBottom} from './HeaderBottom'


const HeaderWrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	user-select: none;
	z-index: 10;
`;

const Header = () => {
	return(
		<HeaderWrapper>
			<HeaderTop/>
			<HeaderBottom/>
		</HeaderWrapper>
	)
}

export default memo(Header);