import React from "react";
import AccordionSection from "../../resources/elements/accordion-section";

class Upcoming extends React.Component {
  render() {
    const panels = [
      {
        title: "Development",
        items: ["YDKJS", "Frontend Handbook", "Intro to Programming"]
      },
      {
        title: "Catholic",
        items: ["One", "Two", "Three"]
      },
      {
        title: "Self-Development",
        items: ["Four", "Five", "Six"]
      }
    ];

    return (
      <section className="TextCenter SectionContainer">
        <h3 className="SectionTitle">Upcoming Books</h3>

        <AccordionSection panels={panels} />
      </section>
    );
  }
}

export default Upcoming;
