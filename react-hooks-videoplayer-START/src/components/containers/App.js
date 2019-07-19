import React from 'react';
import VidPlayer from './VidPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
  	<Switch>
  		<Route exact path="/" component={VidPlayer} />
  		<Route exact path="/:activeVideo"  component={VidPlayer} />
  	</Switch>
  </BrowserRouter>
)

export default App;