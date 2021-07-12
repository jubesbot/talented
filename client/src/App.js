import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import './App.css';
import Axios from './Util/Axios';
import { Navbar, Container, Nav, Form, Button, } from 'react-bootstrap'
import Navigation from "./Components/Navigation";
import HomeView from "./Components/HomeView";
import LoginView from "./Components/LoginView";
import RegisterView from "./Components/RegisterView";
import ChartsView from "./Components/ChartsView";

function App() {

  return (

    <div className="App">

        <BrowserRouter>
            <Navigation />
            <div>
                <Switch>
                    <Route path="/register" exact>
                        <RegisterView/>
                    </Route>

                    <Route path="/login" exact>
                        <LoginView/>
                    </Route>

                    <Route path="/" exact>
                        <HomeView/>
                    </Route>

                    <Route path="/charts" >
                        <ChartsView/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>



      {/*<Container >*/}
      {/*      <Form className='col-md-5 mx-auto'>*/}
      {/*        <Form.Group className="mb-3" controlId="formBasicEmail">*/}
      {/*          <Form.Label>Email address</Form.Label>*/}
      {/*          <Form.Control type="email" placeholder="Enter email" />*/}
      {/*          <Form.Text className="text-muted">*/}
      {/*            We'll never share your email with anyone else.*/}
      {/*          </Form.Text>*/}
      {/*        </Form.Group>*/}

      {/*        <Form.Group className="mb-3" controlId="formBasicUsername">*/}
      {/*          <Form.Label>Username</Form.Label>*/}
      {/*          <Form.Control type="username" placeholder="Enter username" />*/}
      {/*        </Form.Group>*/}

      {/*        <Form.Group className="mb-3" controlId="formBasicPassword">*/}
      {/*          <Form.Label>Password</Form.Label>*/}
      {/*          <Form.Control type="password" placeholder="Password" />*/}
      {/*          <Form.Text className="text-muted">*/}
      {/*            We'll never share your email with anyone else.*/}
      {/*          </Form.Text>*/}
      {/*        </Form.Group>*/}

      {/*        <Button variant="primary" type="submit">*/}
      {/*          Submit*/}
      {/*        </Button>*/}
      {/*      </Form>*/}
      {/*</Container>*/}

      {/*  <button onClick={() => login("admin", "admin")}>Login</button>*/}


    </div>
  );
}

export default App;

