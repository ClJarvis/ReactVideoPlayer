import React from 'react';
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from '../Nightmode'; 


//Tutorial used WbnPlayer (author) I'm repalcing with VidPlayer for clarity
const PlayList = props => {
	return (
		<>
			<Nightmode />
			<PlaylistHeader />
			<PlaylistItems />
		</>
		)
}

export default PlayList;