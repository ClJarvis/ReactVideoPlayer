import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistItem active={active} played={played}>
  <div classname="wbn-player_video-nz">{video.num}</div>
   <div classname="wbn-player_video-name">{video.title}</div>
    <div classname="wbn-player_video-time">{video.duration}</div>
  </StyledPlaylistItem>
);

export default PlaylistItem;