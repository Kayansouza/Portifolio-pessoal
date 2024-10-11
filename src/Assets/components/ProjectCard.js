import React from "react";
import { Col } from "react-bootstrap";
import "./Projects.css"; // Adicione aqui o seu CSS de estilo // Adicione aqui o seu CSS de estilo

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4} className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link"> {/* Envolvendo cada projeto com um link */}
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
