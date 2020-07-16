import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Overview</Nav.Link>
                    <Nav.Link href="#link">Trend</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;