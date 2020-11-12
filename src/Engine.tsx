import React from 'react';
import { Button } from 'react-bootstrap';

interface EngineProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	engine: string;
}

const Engine: React.FC<EngineProp> = ({ engine, ...props }) => {
	return (
		<>
			<Button
				{...props}
				variant='outline-light'
				size='lg'
				block
				onClick={() => (window.location.href = `/engine/${engine}`)}
			>
				{engine}
			</Button>
		</>
	);
};

export default Engine;