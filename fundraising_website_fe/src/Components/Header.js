import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-header">
      {user && (
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/fundraising-pages">Fundraising Pages</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto points-text" style={{ paddingRight: "20px" }}>
            ID: {user?.id}
          </Nav>
          <Nav className="ms-auto points-text">
            Remaining Points: {user?.points_remaining}
          </Nav>
        </Container>
      )}
    </Navbar>
  );
};

export default Header;
