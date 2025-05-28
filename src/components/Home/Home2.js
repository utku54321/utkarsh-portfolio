import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../../Assets/Screenshot 2025-05-22 210059.png"; // Your circular profile picture in PNG format
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Utkarsh Anand, a finance enthusiast with a strong foundation in accounting and a growing passion for programming. I’m currently pursuing my PGDM at the Fortune Institute of International Business, New Delhi, and have already gained hands-on experience in financial modeling, data analysis, and creating interactive dashboards using tools like MS Excel, Power BI, and R Studio.
          
              <br />
              <br />
              As a data analyst, I enjoy uncovering insights through structured financial data, developing meaningful visualizations, and translating numbers into strategic decisions. My exposure to programming languages like Python has further strengthened my analytical capabilities, and I’m keen on blending my finance knowledge with modern tech to build dynamic web technologies and data-driven products.
              <br />
              <br />
              Whenever possible, I also like exploring new web frameworks like React.js and Next.js to bring creative ideas to life—whether in the world of finance, blockchain, or beyond!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myPhoto}
                className="img-fluid rounded-circle"
                alt="Utkarsh Anand"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  border: "4px solid #6f42c1",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/utku54321"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Utkarsh2913"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/utkarsh-anand-645034315/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am_utkarsh_anand/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
