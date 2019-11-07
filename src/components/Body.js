import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Body = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <img className='dailyImage' alt='space stuff' src={props.hdurl} onClick={toggle} style={{ marginBottom: '1rem' }}/>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {props.explanation} 
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Body;