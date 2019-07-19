import React from 'react';
import PlaylistItem from "../PlaylistItem";
import StyledPlaylistitems from '../styles/StyledPlaylistitems';

//Tutorial used WbnPlayer (author) I'm repalcing with VidPlayer for clarity
const PlaylistItems = ({ videos, active }) => (
	<StyledPlaylistitems>
			{videos.map(video => (
				<PlaylistItem
					key={video.id}
					video={video}
					active={video.id === active.id ? true : false}
					played={video.played}
					/>
				))}
	</StyledPlaylistitems>
)

export default PlaylistItems;