import React from 'react'

const IgnitionButton = (): JSX.Element => {
  const [start, setStart] = React.useState(false)
  const [stop, setStop] = React.useState(false)

  return (
    <div>
      <input
        type="radio"
        value="Start"
        checked={start}
        onChange={(
          ev: React.ChangeEvent<HTMLInputElement>,
        ): void => {alert(`ALERT! ENGINE STARTED.`); setStart(true); setStop(false)}}
      /> Start Ignition
      <br />
      <input
        type="radio"
        value="Stop"
        checked={stop}
        onChange={(
          ev: React.ChangeEvent<HTMLInputElement>,
        ): void => {alert("ALERT! ENGINE STOPPED."); setStart(false); setStop(true)}}
      /> Stop Ignition
    </div>


  );
};

export default IgnitionButton;