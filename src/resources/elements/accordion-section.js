import React from "react";
import { PanelGroup } from "react-bootstrap";
import Accordion from "./accordion";

const AccordionSection = ({ panels }) => {
  const renderedAccordionSection = panels.map((panel, i) => (
    <Accordion key={i} eventKey={i} title={panel.title} items={panel.items} />
  ));

  return (
    <PanelGroup accordion id="accordion-example">
      {renderedAccordionSection}
    </PanelGroup>
  );
};

export default AccordionSection;
