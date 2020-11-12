import * as React from 'react';
import EngineList from './EngineList';

class App extends React.Component {
	render() {
		return (
			<div className='center-screen'>
				<h1 className='display-4'>Select Your Automobile Engine</h1>
				<br />
				<EngineList />
			</div>
		);
	}
}

export default App;