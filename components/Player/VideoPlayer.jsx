import { memo } from 'react';
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const VideoPlayer = (props) => {
	const {src = "yWtFb9LJs3o", provider = "youtube"} = props;

	return (
		<>
			{Plyr &&
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



export default memo(VideoPlayer);