import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa";
import { SiPowerbi, SiRstudio, SiAnaconda } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiVisualstudiocode } from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // For ChatGPT & Gemini

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFilePowerpoint />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot /> {/* For ChatGPT & Gemini */}
      </Col>
    </Row>
  );
}

export default Toolstack;
