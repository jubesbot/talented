import React, {useEffect, useRef} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import Axios from "../Util/Axios";
import { useHistory } from 'react-router-dom';

function RegisterView({loggedIn, setLoggedIn, user, setUser, setTalentData, talentData}) {

    const form = useRef(null)
    const history = useHistory()


    async function register(e) {
        e.preventDefault()
        try {
            let data = await Axios.post("api/users/", {
                email: user.email,
                username: user.username,
                password: user.password
            })
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
            console.log(data)
            history.push('/login')
        } catch (e) {
            console.log(e)
            alert('Please try again!')
        }
    }

    async function handleChange(e) {
        try {
            console.log(e.target.id)
            await setUser(prevState => ({...prevState, [e.target.id]: e.target.value}))
            console.log(user)
        } catch (e) {
            console.log(e)
        }
    }

    return (
    <div>
        <Row>
        <Col className={'col-md-6 mx-auto my-auto'}>
        <h3>Sign up here</h3>

        <Form ref={form} onSubmit={register} className='' >

            <Form.Group className="mb-3" controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                         <Form.Control id='email' type="email" placeholder="Enter email" onChange={handleChange}/>
                         <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                         </Form.Text>
                    </Form.Group>

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
        </Col>
        </Row>
    </div>

    );
}

export default RegisterView;