import React from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
//Tutorial used WbnPlayer (author) I'm repalcing with VidPlayer for clarity
const VidPlayer = props => {
	return (
		<>
			<Video />
			<Playlist />
		</>
		)
}

export default VidPlayer;