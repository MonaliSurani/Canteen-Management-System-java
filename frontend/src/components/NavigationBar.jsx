/*import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { isAuthenticated } from "../services/TokenUtil";

export function NavigationBar() {
  const navigate = useNavigate();

  // Retrieve user role from storage
  const userRole = localStorage.getItem("userRole");

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole"); // Make sure to clear the role on sign out
    navigate("/");
  }

  return (
    <Navbar className="bar" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="textcolor">Canteen Management</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isAuthenticated() && userRole === "employee" && (
              <LinkContainer to="/book-appointment">
                <Nav.Link className="textcolor">Menu</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && userRole === "admin" && (
              <LinkContainer to="/ItemList">
                <Nav.Link className="textcolor">Item List</Nav.Link>
              </LinkContainer>
            )}
            
            <LinkContainer to="/about">
              <Nav.Link className="textcolor">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="textcolor">Contact Us</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/admin/login">
              <Nav.Link className="textcolor">Admin</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {isAuthenticated() ? (
              <Button variant="light" onClick={signOut}>
                Sign Out
              </Button>
            ) : (
              <NavDropdown title="Employee" id="employee-dropdown">
                <LinkContainer to="/signup">
                  <NavDropdown.Item>Sign Up</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/employeesignin">
                  <NavDropdown.Item>Sign In</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}*/

import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { isAuthenticated } from "../services/TokenUtil";

export function NavigationBar() {
  const navigate = useNavigate();

  // Retrieve user role from storage
  const userRole = localStorage.getItem("userRole");

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole"); // Make sure to clear the role on sign out
    navigate("/");
  }

  return (
    <Navbar expand="lg" >
      <Container style={{marginTop:'2px',marginBottom:'0px',marginLeft:'35px',border:'none'}}>
        <Link to="/">
          <Navbar.Brand className="logo">Canteen Management</Navbar.Brand>
        </Link>
        <div className="bar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isAuthenticated() && userRole === "employee" && (
              <LinkContainer to="/book-appointment">
                <Nav.Link className="textcolor">Menu</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && userRole === "admin" && (
              <LinkContainer to="/MemberList">
                <Nav.Link className="textcolor">Member List</Nav.Link>
              </LinkContainer>
            )}
            {isAuthenticated() && userRole === "admin" && (
              <LinkContainer to="/owner/signup">
                <Nav.Link className="textcolor">Register Owner</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && userRole === "owner" && (
              // Assuming 'owner-dashboard' is the route for the owner's dashboard or relevant page
              <LinkContainer to="/ItemList">
                <Nav.Link className="textcolor">Item List</Nav.Link>
              </LinkContainer>
            )}

            {isAuthenticated() && userRole === "owner" && (
              // Assuming 'owner-dashboard' is the route for the owner's dashboard or relevant page
              <LinkContainer to="/pending">
                <Nav.Link className="textcolor">Pending for Approval</Nav.Link>
              </LinkContainer>
            )}
            
            <LinkContainer to="/about">
              <Nav.Link className="textcolor">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="textcolor">Contact Us</Nav.Link>
            </LinkContainer>
            
            {!isAuthenticated() && (
              <>
                <LinkContainer to="/admin/login">
                  <Nav.Link className="textcolor">Admin</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/owner/login">
                  <Nav.Link className="textcolor">Owner</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          <Nav>
            {isAuthenticated() ? (
              <Button variant="light" onClick={signOut}>
                Sign Out
              </Button>
            ) : (
              <NavDropdown title="Employee" id="employee-dropdown">
                <LinkContainer to="/signup">
                  <NavDropdown.Item>Sign Up</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/employeesignin">
                  <NavDropdown.Item>Sign In</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

