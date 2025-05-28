import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Project Image */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      <Card.Body>
        {/* Project Title */}
        <Card.Title>{props.title}</Card.Title>

        {/* Project Description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render multiple file download/view buttons */}
        {props.files && props.files.map((file, idx) => (
          <div key={idx} style={{ marginBottom: "0.3rem" }}>
            <Button
              variant="primary"
              href={file.path}
              target="_blank"
              style={{ marginRight: "0.5rem", marginBottom: "0.2rem" }}
            >
              Download {file.name}
            </Button>
            <Button
              variant="secondary"
              href={file.path}
              target="_blank"
            >
              View {file.name}
            </Button>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

