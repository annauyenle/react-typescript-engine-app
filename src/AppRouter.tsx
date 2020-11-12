import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import EnginePage from './EnginePage';

function AppRouter() {
	return (
		<Router>
			<Route path='/' exact component={App} />
			<Route path='/engine/:engine' component={EnginePage} />
		</Router>
	);
}

export default AppRouter;