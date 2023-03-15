import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
      <img className={`mb-3 ${data.link ? 'hover' : ''}`} src={data.companylogo} alt="" onClick={`${data.link}` ? () => window.open(`${data.link}`, "_blank", "noreferrer") : ''}/>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;