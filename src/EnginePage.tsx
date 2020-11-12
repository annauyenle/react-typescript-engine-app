import React from 'react';
import EngineList from './EngineList';

class EnginePage extends React.Component {
	render() {
		return (
			<div className='center-screen'>
				<h1 className='display-4 page-title'>Select Your Automobile Engine</h1>
				<EngineList />
			</div>
		);
	}
}

export default EnginePage;