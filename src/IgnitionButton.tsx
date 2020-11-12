import React from 'react';
import { Modal } from 'react-bootstrap';

interface engineProp {
	engine: string;
}

const IgnitionButton = ({ engine }: engineProp): JSX.Element => {
	const [start, setStart] = React.useState(false);
	const [stop, setStop] = React.useState(false);
	const [modal, setModal] = React.useState(false);
	const [engineState, setEngineState] = React.useState("");

	const handleStart = () => {
		setStart(true);
		setStop(false);
		setModal(true)
		setEngineState("STARTED")
	}

	const handleStop = () => {
		setStart(false);
		setStop(true);
		setModal(true);
		setEngineState("STOPPED")
	}

	const closeModal = () => setModal(false);

	return (
		<div>
			<input
				type='radio'
				value='Start'
				checked={start}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {handleStart()}}
			/>{' '}
			<label className="button-text button-start">Start Ignition</label>
			<br />
			<input
				type='radio'
				value='Stop'
				checked={stop}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {handleStop()}}
			/>{' '}
			<label className="button-text button-stop">Stop Ignition</label>

			<Modal show={modal} onHide={closeModal} centered>
				<Modal.Body>ALERT! YOU JUST {engineState} THE <b>{engine}</b> ENGINE.</Modal.Body>
			</Modal>
		</div>
	);
};

export default IgnitionButton;