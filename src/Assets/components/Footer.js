import { Container, Row, Col } from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm";
import logo from "../img/logo.svg";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from '../img/github.svg';
import navIcon3 from "../img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <MailchimpForm />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/richard-kayan-de-souza-91a532204/" aria-label="Link to social media 1">
                <img src={navIcon1} alt="Social Icon 1" />
              </a>
              <a href="https://github.com/Kayansouza" aria-label="Link to GitHub">
                <img src={navIcon2} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
