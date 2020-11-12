import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Ignition from './Ignition';

interface EngineInfo {
	engine: string;
}

interface EngineProps extends RouteComponentProps<EngineInfo> {}

class IgnitionPage extends React.Component<EngineProps> {
	render() {
		return (
			<div className='center-screen'>
				<h1 className='display-4 page-title'>
					Test The {this.props.match.params.engine} Engine
				</h1>
				<Ignition engine={this.props.match.params.engine} />
				<div className='engine-list-container'>
					<br />
					<Button
						variant='outline-light'
						size='lg'
						block
						onClick={() => (window.location.href = '/')}
					>
						Return to List
					</Button>
				</div>
			</div>
		);
	}
}

export default IgnitionPage;