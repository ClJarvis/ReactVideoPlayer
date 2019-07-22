import React, { useState, useEffect } from 'react';
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
const VidPlayer = ({ match, history, location }) => {

	const videos = JSON.parse(document.querySelector('[name="videos"]').value);

	const [state, setState] = useState({
		videos: videos.playlist,
		activeVideo: videos.playlist[0],
		nightMode: true,
		playlistId: videos.playlistId,
		autoplay: false,
	});

	useEffect(() => {
		localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
	}, [state]);

	useEffect(() => {
		const videoId = match.params.activeVideo;
		if (videoId !== undefined) {
			const newActiveVideo = state.videos.findIndex(
				video => video.id === videoId,
				);
				setState(prev => ({
					...prev,
					activeVideo: prev.videos[newActiveVideo],
					autoplay: location.autoplay,
				}));
		} else {
			history.push({
				pathname: `/${state.activeVideo.id}`,
				autoplay: false,
			});
		}
	}, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos]);

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