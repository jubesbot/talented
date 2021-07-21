import React, {useEffect} from 'react';
import Axios from "../Util/Axios";
import {Button, Form} from "react-bootstrap";
import {Redirect} from "react-router-dom";

function LoginView({loggedIn, setLoggedIn, user, setUser, talentData, setTalentData, allTalents, setAllTalents}) {

    useEffect(() => {
        if (loggedIn){
            setTalentData(prevState => ({...prevState, scout: user.id}))
        }else{
            return < Redirect to="/login" />
        }
    }, [])

    async function login(e){
        e.preventDefault()
        try {
            let {data} = await Axios.post("api/token/", {username: user.username, password:user.password})
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
            setLoggedIn(true)
            setTalentData(prevState => ({...prevState, scout: user.id}))
        } catch (e) {
            console.log(e)
            alert('try again!')
        }
    }

    if (loggedIn === true){

        return < Redirect to="/" />
    }

    async function handleChange(e) {
        try {
            await setUser(prevState => ({...prevState, [e.target.id]: e.target.value}))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div style={{marginTop:"15%"}}>
            <h3>Login</h3>

            <Form onSubmit={login} className='col-md-5 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control id='username' name="username" placeholder="Enter username" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="inputForPassword">Password</Form.Label>
                    <Form.Control id='password' type="password" placeholder="Enter password" onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

            </Form>

        </div>

    );
}

export default LoginView;