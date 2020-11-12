import React from 'react';
import Engine from './Engine';

const engines: string[] = ['I4', 'I5', 'V6', 'V8', 'V10', 'V12', 'H4', 'H6'];

const renderButtons = () => {
	return engines.map((engine) => {
		return <Engine key={engine} engine={engine} />;
	});
};

const EngineList: React.FC = () => {
	return <div className='engine-list-container'>{renderButtons()}</div>;
};

export default EngineList;