import React from 'react';
import { Panel } from 'react-bootstrap';

const Accordion = ({ eventKey, title, items }) => {
  const renderedItems = items.map((item, i) => <div key={i}>{item}</div>);

  return (
    <Panel eventKey={eventKey}>
      <Panel.Heading>
        <Panel.Title toggle>{title}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>{renderedItems}</Panel.Body>
    </Panel>
  );
};

export default Accordion;
