import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from "styled-components";

const DailyImage = styled.img`
    min-height: 50%;
    /* min-width: 1024px; */

    width: 100%;
    height: auto;

    /* position: fixed; */
    top: 0;
    left: 0;
`

const Body = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <DailyImage alt='space stuff' src={props.hdurl} onClick={toggle} style={{ marginBottom: '1rem' }}/>
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