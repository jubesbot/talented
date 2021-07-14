import React from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import radarChart from '../Images/radar-chart.png'

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <Image className={'App-logo'} style={{height:'50px',width:'50px'}} src={radarChart}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/charts">Charts</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Signed in as: <span className='font-weight-bold' style={{color:'green'}}>Scout</span>
                    <a href="/login" className='ml-5'>Logout</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;