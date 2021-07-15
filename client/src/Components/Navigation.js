import React from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import radarChart from '../Images/radar-chart.png'
import {NavLink} from "react-router-dom";

function Navigation({setLoggedIn, loggedIn, setUser, user, talentData, allTalents, setAllTalents}) {

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
                    <NavLink to="/register" className='nav-link'>Register</NavLink>
                    {(loggedIn)
                        ? <NavLink to="/" className='nav-link'>Home</NavLink>
                        : <></>
                    }
                    {(allTalents && allTalents.length)
                        ? <NavLink to="/charts" className='nav-link'>Charts</NavLink>
                        : <></>
                    }
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