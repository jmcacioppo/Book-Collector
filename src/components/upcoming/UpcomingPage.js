import React from 'react';
import AccordionSectionComponent from "../../resources/elements/AccordionSectionComponent";

class Upcoming extends React.Component {
  render() {
    const panels = [
      {
        title: 'Development',
        items: ['YDKJS', 'Frontend Handbook', 'Intro to Programming']
      },
      {
        title: 'Catholic',
        items: ['One', 'Two', 'Three']
      },
      {
        title: 'Self-Development',
        items: ['Four', 'Five', 'Six']
      },
    ];

    return (
      <section className="TextCenter SectionContainer">
        <h3 className="SectionTitle">Upcoming Books</h3>

        <AccordionSectionComponent panels={panels}></AccordionSectionComponent>
      </section>
    )
  }
}

export default Upcoming;
