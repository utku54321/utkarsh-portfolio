import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">UTKARSH ANAND </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am currently pursuing my PGDM at the Fortune Institute of International Business.
            <br />
            My journey has seen me explore diverse roles—finance analyst, equity research enthusiast, portfolio manager, and data analyst.
            <br />
            I’ve completed my B.Com in Accounts from Ranchi University and have actively worked on financial modeling, data visualization, and portfolio building. I love analyzing markets, developing interactive dashboards in Power BI and Excel, and exploring the potential of Python for financial data analytics.
            <br />
            Apart from Finance, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the gym daily to stay fit and healthy
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports and staying active
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           “Strive to blend finance with technology to build data-driven solutions!” {" "}
          </p>
          <footer className="blockquote-footer">Utkarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
