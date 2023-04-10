import React from 'react'
import {createGlobalStyle} from 'styled-components';
import NextNProgress from "../components/Loader";
import {Provider} from 'react-redux'
import {store} from '../store/index'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400&display=swap');
	* {
		padding: 0px;
		margin: 0px;
		border: 0px;

	}
	
	input[type=checkbox],
	button,
	a{
		-webkit-tap-highlight-color: transparent;
        -webkit-focus-ring-color: transparent;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
	}


	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	:focus,
	:active {
		outline: none;
	}

	a:focus,
	a:active {
		outline: none;
	}

	aside,
	nav,
	footer,
	header,
	section {
		display: block;
	}

	body {
		-webkit-font-smoothing: antialiased;
		line-height: 1;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		font-family: 'Roboto', sans-serif;
		color: var(--bg-dark);
		height: 100%;
		
		::-webkit-scrollbar {
			display: none;
		}
		-scrollbar {
			display: none;
		}
		
	}
	::-moz-selection{
		background: #F74B5C;
	}
	::selection{
		background: #F74B5C;
	}

	html,
	body,
	#__next {
		height: 100%;
		scroll-behavior: smooth;
	}
	
	p{
		font-size: 1em;
		line-height: 1.66;
	}

	input::-ms-clear {
		display: none;
	}

	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button,
	input::-webkit-search-results-button,
	input::-webkit-search-results-decoration { display: none; }

	textarea {
		resize:none
	}

	button {
		font-size: inherit;
		line-height: inherit;
		cursor: pointer;
	}

	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}

	a{
		color: inherit;
	}

	a,
	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	img {
		vertical-align: top;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: inherit;
		font-size: inherit;
		font-family: inherit;
	}

	h5 {
		font-size: .6em;
		line-height: 1.065;
		margin-bottom: 1em;
		text-transform: uppercase;
		letter-spacing: .05em;
		opacity: .5;

		@media (min-width: 1800px){
			font-size: 1em;
			line-height: 1.365;
		}
	}

	#__next {
		--white: #fff;
		--grey: #75797A;
		--grey-dark: #353B48;
		--light-dark: #786B6B;
		--color-text: #F9FAFC;
		--bg-pink: #F73A4C;
		--bg-red: #CA1A2C;
		--bg-dark: #1C1D20;
		--orange: #FF4C1C;
		--color-border-light: rgba(255, 255, 255, 0.2);
		--color-border-dark: rgba(28, 29, 32, 0.175);
		--font-lexend: 'Lexend', sans-serif;

		--fw-light: 300;
		--fw-regular: 400;
		--fw-medium: 500;
		--fw-bold: 700;

		--shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		--transition-sm: all 0.3s ease;
		--transition-md: all 0.8s ease 0s;


		--animation-menu-wrap: transform .8s cubic-bezier(.7, 0, .2, 1);
		--animation-menu-content: all .6s cubic-bezier(.7, 0, .2, 1);
		--animation-menu-slow: all .85s cubic-bezier(.7, 0, .2, 1);

		--animation-primary: all .5s cubic-bezier(.7, 0, .3, 1);
		--animation-fast: all .3s cubic-bezier(.7, 0, .3, 1);
		--animation-smooth: all .7s cubic-bezier(.7, 0, .3, 1);
		--animation-slow: all .9s cubic-bezier(.7, 0, .3, 1);
		--section-padding: clamp(5em, 21vh, 12em);
		--container-padding: clamp(2.5em, 8vw, 8em);
		--gap-padding: clamp(1.5em, 4vw, 2.5em);
	}
	

	.container {
		max-width: 1240px;
		padding: 0 20px;
		margin: 0 auto;
	}

	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.plyr{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.plyr__volume,
	.plyr__progress{
		input[type=range]{
			color: var(--bg-pink);
		}
	}
	.plyr__control.plyr__control--overlaid{
		background: var(--bg-pink);
		width: 70px;
		height: 70px;
		
		svg{
			left: 50%;
			transform: translateX(calc(-50% + 2px));
			width: 22px;
			height: 22px;
		}
	}
	.plyr__control:hover{
		background: var(--bg-pink) !important;
	}
`
export default function App({ Component, pageProps }) {
	if (!process.browser) React.useLayoutEffect = React.useEffect;
	
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<GlobalStyle/>
			<NextNProgress />
		</Provider>
	)
}
