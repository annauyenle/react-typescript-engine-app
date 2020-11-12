import React from 'react';

interface engineProp {
	engine: string;
}

const IgnitionButton = ({ engine }: engineProp): JSX.Element => {
	const [start, setStart] = React.useState(false);
	const [stop, setStop] = React.useState(false);

	return (
		<div>
			<input
				type='radio'
				value='Start'
				checked={start}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
					alert(`ALERT! ${engine} ENGINE STARTED.`);
					setStart(true);
					setStop(false);
				}}
			/>{' '}
			<label className="button-text button-start">Start Ignition</label>
			<br />
			<input
				type='radio'
				value='Stop'
				checked={stop}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
					alert(`ALERT! ${engine} ENGINE STOPPED.`);
					setStart(false);
					setStop(true);
				}}
			/>{' '}
			<label className="button-text button-stop">Stop Ignition</label>
		</div>
	);
};

export default IgnitionButton;