import React, {useEffect} from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import radarChart from '../Images/radar-chart.png'
import {NavLink} from "react-router-dom";
import Axios from "../Util/Axios";

function Navigation({setLoggedIn, loggedIn, setUser, user, talentData, allTalents, setAllTalents}) {

    async function logout(){
        setLoggedIn(false)
        setUser(null)
        localStorage.removeItem("refresh")
        localStorage.removeItem("access")
    }

    return (
        <Navbar bg="dark">
            <Navbar.Brand href="/">
                <Image className={'App-logo'} style={{height:'40px',width:'40px'}} src={radarChart}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">

                    {(loggedIn)
                        ? <NavLink to="/" className='nav-link' style={{color:'whitesmoke'}}>Home</NavLink>
                        : <></>
                    }
                    {(allTalents && allTalents.length)
                        ? <NavLink to="/charts" className='nav-link' style={{color:'whitesmoke'}}>Charts</NavLink>
                        : <></>
                    }
                </Nav>

                {(loggedIn && user)
                    ? <Navbar.Text style={{color:'whitesmoke'}}>Signed in as: <span className='font-weight-bold' style={{color:'lime'}}>{user.username}</span>
                        <a onClick={logout} href="/login" className='ml-5' style={{color:'whitesmoke'}}>Logout</a>
                </Navbar.Text>
                    : <Navbar.Text>
                        <a onClick={logout} href="/register" className='ml-5' style={{color:'whitesmoke'}}>Register</a>
                        <a onClick={logout} href="/login" className='ml-5' style={{color:'whitesmoke'}}>Login</a>
                    </Navbar.Text>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;