import React from 'react';
import Axios from "../Util/Axios";
import {Button, Container, Form} from "react-bootstrap";

function LoginView(props) {

    async function login(username, password){
        try{
            let {data} = await Axios.post(`http://localhost:8000/api/token/`, {username, password})
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
            console.log(data)
        }catch (e) {
            console.log(e.response)
        }
    }

    return (
        <div>
            <h3>Login</h3>

            <Form className='col-md-5 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>

            </Form>

            <Button onClick={() => login("admin", "admin")}>Login</Button>
        </div>

    );
}

export default LoginView;