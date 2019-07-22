import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

//Tutorial used WbnPlayer (author) I'm repalcing with VidPlayer for clarity
const NightMode = ({ nightModeCallback, nightMode}) => (
		<StyledNightmode>
			<span>Nightmode: </span>
			<label classname="switch">
				<input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
				<span classname="slider round" />
			</label>
		</StyledNightmode>
	)

export default NightMode;