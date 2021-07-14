import React, {useEffect} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {Redirect} from "react-router-dom";

function RegisterView({loggedIn, setLoggedIn, user, setUser, setTalentData, talentData}) {

    useEffect(() => {
        if (loggedIn){
            console.log('logged in cos I got both tokens :)')
            setTalentData(prevState => ({...prevState, scout_id: user.id}))
        }else{
            console.log('not logged in cos I no tokens :(')
            return < Redirect to="/login" />
        }
    }, [])
    console.log(talentData)

    return (
            <div className={'my-auto'}>
            <Form className='col-md-5 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>

    );
}

export default RegisterView;