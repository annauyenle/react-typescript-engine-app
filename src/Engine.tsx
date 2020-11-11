import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import IgnitionButton from './IgnitionButton';

interface EngineProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	engine: string;
}

const Engine: React.FC<EngineProp> = ({ engine, ...props }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button
				{...props}
				variant='outline-light'
				size='lg'
				block
				onClick={handleShow}
			>
				{engine}
			</Button>

			<Modal show={show} onHide={handleClose} animation={true}>
				<Modal.Header closeButton>
					<Modal.Title>{engine} Ignition System Test</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<IgnitionButton />
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' size='sm' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Engine;
