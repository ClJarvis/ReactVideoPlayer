import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';

//Tutorial used WbnPlayer ( author) I'm repalcing with VidPlayer for clarity
const Video = props => (
		<StyledVideo>
			<StyledVideoWrapper>
				<ReactPlayer
					width="100%"
					height="100%"
					style={{ position: "absolute", top: "0"}}
					playing={autoplay}
					controls={true}
					url={active.video}
					onEnded={endCallback}
					onProgress={progessCallback}
				/>
			</StyledVideoWrapper>
		</StyledVideo>
		)

export default Video;