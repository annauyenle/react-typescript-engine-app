import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import IgnitionButton from './IgnitionButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  engine: string;
}

const engines: string[] = ["I4", "I5", "V6", "V8", "V10", "V12", "H4", "H6"];

const clickHandler = (engine:string) => {
  alert(`hello from ${engine}`)
}

const Engine: React.FC<ButtonProps> = ({ engine, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button {...props} variant="outline-light" size="lg" block onClick={() => clickHandler(engine)}>
        {engine}
      </Button>
{/* 
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{engine} Ignition System Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <IgnitionButton />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  )
}

const renderButtons = () => {
  return engines.map(engine => {
    return <Engine key={engine} engine={engine} />
  })
}

const EngineList: React.FC = () => {
  return (
    <div className="engine-list-container">
      {renderButtons()}
    </div>
  )
}

export default EngineList