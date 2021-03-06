import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from '@auth0/auth0-react'
import { NavDropdown } from "react-bootstrap";
import { MdMoneyOff } from "react-icons/md"
import { FiLogIn } from "react-icons/fi"
import { BsChat } from "react-icons/bs"

export default function Navigation() {

    const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0()
    const isUser = isAuthenticated && user;
    console.log(isUser)
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">Crypto{<MdMoneyOff />}Play</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#link">Resources</Nav.Link>
                        <NavDropdown title="Trade" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Buy/Sell
                </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Switch</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cash out</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Chat</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {isUser ? <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button> : <button onClick={loginWithRedirect}>Loginb</button>}
                        {/* <Nav.Link href="/fave">Login  <FiLogIn /></Nav.Link> */}

                        <Nav.Link href="/chat">Chat  <BsChat /></Nav.Link> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

