import styled from 'styled-components'
import Plyr from "plyr-react"
import "plyr-react/plyr.css"


const Loader = styled.h2`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	color: #fff;
	font-size: 42px;
	z-index: 3;
`


const VideoPlayer = (props) => {
	const {src = "yWtFb9LJs3o", provider = "youtube"} = props;

	return (
		<>
			{!Plyr ?
				<Loader>Loading...</Loader>
			:
				<Plyr
					source={{
						type: "video",
						sources: [
							{
								src: src,
								provider: provider
							}
						]
					}}
				/>
			}
		</>
	)
}



export {VideoPlayer};