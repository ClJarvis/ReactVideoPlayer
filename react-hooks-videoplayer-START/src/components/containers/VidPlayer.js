import React, {useState, useFffect} from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledVidPlayer from '../styles/StyledVidPlayer';

const theme = {
	bgcolor: "#353535",
	bgcolorItem: "#414141",
	bgcolorItemActice: "#495c63",
	bgcolorPlayed: "#526d4e",
	border: "none",
	borderPlayed: "none",
	color: "#fff",
}


const themeLight = {
	bgcolor: "#fff",
	bgcolorItem: "#fff",
	bgcolorItemActice: "#801fb1",
	bgcolorPlayed: "#7d9979",
	border: "1x solid #353535",
	borderPlayed: "none",
	color: "#353535",
}


//Tutorial used WbnPlayer (author) I'm replacing with VidPlayer for clarity
const VidPlayer = props => {

	const videos = JSON.parse(document.querySelector('[name="videos"]').value);

	const [state, setState] = useState({
		videos: videos.playlist,
		activeVideo: videos.playlist[0],
		nightMode: true,
		playlistId: videos.playlistId,
		autoplay: false,
	});

	const nightModeCallback = () => {

	}

	const endCallback = () => {
		
	}

	const progressCallback = () => {
		
	}

	return (
		<ThemeProvider theme={ state.nightMode ? theme: themeLight}>
		{state.videos !== null ? (
			<StyledVidPlayer>
				<Video 
				active={state.activeVideo}
				autoplay={state.autoplay}
				endCallback={endCallback}
				progressCallback={progressCallback}
				/> 
				<Playlist 
					videos={state.videos}
					active={state.activeVideo}
					nightModeCallback={nightModeCallback}
					nightMode={state.nightMode}
				/>
			</StyledVidPlayer>
		) : null}
		</ThemeProvider>
	)
}

export default VidPlayer;