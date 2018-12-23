import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import AccordionComponent from "./AccordionComponent";

const AccordionSectionComponent = ({ panels }) => {
  const renderedAccordionSection = panels.map((panel, i) => <AccordionComponent key={i} eventKey={i} title={panel.title} items={panel.items}></AccordionComponent>);

  return (
    <PanelGroup accordion id="accordion-example">
      {renderedAccordionSection}
    </PanelGroup>
  );
}

export default AccordionSectionComponent
