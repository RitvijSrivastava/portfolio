import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const GITHUB_URL = "https://www.github.com/RitvijSrivastava";
const LINKEDIN_URL = "https://www.linkedin.com/in/ritvij-srivastava-b4257717b/";
const MAIL_ID = "mailto: ritvijsrivastava99@gmail.com";

const Link = (link, icon, className) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        color="grey"
        className={className}
      />
    </a>
  );
};

const Home = () => {
  return (
    <Container className="center">
      <h1>Ritvij Srivastava</h1>
      <Row className="justify-content-center">
        {Link(GITHUB_URL, faGithub, "github")}
        {Link(LINKEDIN_URL, faLinkedin, "linkedin")}
        {Link(MAIL_ID, faEnvelope, "mail")}
      </Row>
    </Container>
  );
};

export default Home;
