import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EnginePage from './EnginePage';
import IgnitionPage from './IgnitionPage';

class App extends React.Component {
	render() {
	return (
		<Router>
			<Route path='/' exact component={EnginePage} />
			<Route path='/engine/:engine' component={IgnitionPage} />
		</Router>
	);
	}
}

export default App;