import React from 'react';
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from '../Nightmode'; 
import StyledPlaylist from '../styles/StyledPlaylist'


//Tutorial used WbnPlayer (author) I'm repalcing with VidPlayer for clarity
const PlayList = props => {
	return (
		<StyledPlaylist>
			<Nightmode />
			<PlaylistHeader />
			<PlaylistItems />
		</StyledPlaylist>
		)
}

export default PlayList;