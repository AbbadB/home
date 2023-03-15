import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Certification = ({ certifications }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  return (
    //<section className="section">
    <Jumbotron className="bg-light">
      <Container>
        
          <h2 className="display-4 mb-5 text-center">
            {certifications.heading}
          </h2>
          <Row>
            {
              certifications.data.map((data, index) => {
                return <ExperienceCard style="background:none" key={index} data={data} />
              })
            }
          </Row>
      </Container>
      </Jumbotron>
    //</section>
  );
}

export default Certification;