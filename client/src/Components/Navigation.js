import React from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import radarChart from '../Images/radar-chart.png'

function Navigation({setLoggedIn, loggedIn, setUser, user}) {

    async function logout(){
        setLoggedIn(false)
        setUser(null)
        localStorage.removeItem("refresh")
        localStorage.removeItem("access")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <Image className={'App-logo'} style={{height:'50px',width:'50px'}} src={radarChart}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/charts">Charts</Nav.Link>
                </Nav>

                {(loggedIn && user.username) ?
                <Navbar.Text>
                    Signed in as: <span className='font-weight-bold' style={{color:'green'}}>{user.username}</span>
                    <a onClick={logout} href="/login" className='ml-5'>Logout</a>
                </Navbar.Text> :
                    <Navbar.Text>
                        <a onClick={logout} href="/login" className='ml-5'>Login</a>
                    </Navbar.Text>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;