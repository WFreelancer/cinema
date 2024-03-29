import { memo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { openPopupTrailer } from '../../store/popup/actions-popup';
import { Overlay } from '../Overlay';
import { IoCloseSharp } from "react-icons/io5";
import VideoPlayer from '../Player/VideoPlayer';

const Popup = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	visibility: hidden;
	overflow-y: auto;
	overflow-x: hidden;
	transition: var(--transition-md);
	pointer-events: none;
	z-index: 11;

	::-webkit-scrollbar {
		display: none;
	}
	-scrollbar {
		display: none;
	}

	${({ openPopup }) => openPopup && `
			pointer-events: all;
			opacity: 1;
			visibility: visible;
		`
	}
`

const PopupBody = styled.div`
	min-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 30px 20px;
	transition: var(--transition-md);
	position: relative;
	z-index: 11;

	@media (max-width: 480px){
		padding: 30px 0px;
	};
`

const PopupContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 800px;
	width: 100%;
	position: relative;
	transition: var(--transition-md);
	transform: translateY(200px);
	padding-bottom: 30%;
	min-height: 370px;

	@media (min-width: 1700px){
		max-width: 1200px;
		padding-bottom: 40%;
	}

	@media (max-width: 480px){
		min-height: 300px;
	};

	${({ openPopup }) => openPopup && `
			transform: translateY(0);
		`
	}
`

const PopupClose = styled.div`
	position: absolute;
	top: -40px;
	right: -40px;
	cursor: pointer;
	width: 40px;
	height: 40px;

	@media (min-width: 1800px){
		width: 60px;
		height: 60px;
		top: -60px;
		right: -60px;
	}

	@media (max-width: 900px){
		right: -5px;
	}
	@media (max-width: 480px){
		right: 0px;
	};
`
const IconClose = styled(IoCloseSharp)`
	color: var(--white);
	transition: var(--transition-sm);

	@media (any-hover: hover){
		:hover{
			color: var(--bg-pink);
		}
	}
`

const PopupVideo = ({ src, provider }) => {
	const popupOpen = useSelector(state => state.popup.trailer);
	const dispatch = useDispatch();

	return (
		<Popup openPopup={popupOpen} onClick={() => dispatch(openPopupTrailer(!popupOpen))}>
			<PopupBody>
				<PopupContent openPopup={popupOpen} onClick={(e) => e.stopPropagation()}>
					<PopupClose onClick={() => dispatch(openPopupTrailer(!popupOpen))}>
						<IconClose size="100%" />
					</PopupClose>
					<VideoPlayer src={src} provider={provider} />
				</PopupContent>
			</PopupBody>
			<Overlay active={popupOpen} />
		</Popup>
	)
}

export default memo(PopupVideo);