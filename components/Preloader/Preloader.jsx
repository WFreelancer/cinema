import styled from 'styled-components';

const PreloaderWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--bg-dark);
	transition: 0.3s;
	z-index: 100;
`
const PreloaderBody = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	svg{
		width: 200px;
		height: 200px;
	}
`

const Preloader = () => {
	return(
		<PreloaderWrapper>
			<PreloaderBody>
				<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 100 100" space="preserve">
						<path fill="#8A2C2C" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
						<animateTransform 
							attributeName="transform" 
							attributeType="XML" 
							type="rotate"
							dur="1s" 
							from="0 50 50"
							to="360 50 50" 
							repeatCount="indefinite" />
					</path>
				</svg>
			</PreloaderBody>
		</PreloaderWrapper>
	)
}

export {Preloader};