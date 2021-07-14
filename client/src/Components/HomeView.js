import React, {useState, useEffect, useRef} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {Form, Row, Col, Container, Modal, Button} from "react-bootstrap";
import {Slider, Typography} from "@material-ui/core";

function HomeView({talentData, setTalentData, user, setUser}) {
    const form = useRef(null)
    const target = useRef(null)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // useEffect(() => {
    //     async function setUserStats() {
    //         try {
    //             let {data} = await axios.get("http://localhost:8000/users/", {
    //                 headers: {
    //                     authorization: `Bearer ${localStorage.token}`
    //                 }
    //             })
    //             console.log(data.user)
    //             setUser(data.user)
    //
    //         } catch (e) {
    //             setUser({})
    //             localStorage.removeItem("token")
    //         }
    //     }
    //
    //     setUserStats()
    // }, [])
    //
    //
    // // useEffect(() =>{
    // //     setTalentData({scout : user})
    // //     // console.log(post)
    // // },[user])

    // useEffect(() => {
    //     async function getUser() {
    //         let {data} = await axios.get(`http://localhost:8000/${user._id}`)
    //         if(data.user.pitches){
    //             setPitch(data.user.pitches.reverse())
    //         }else {
    //             setPitch(null)
    //         }
    //     }
    //
    //     getPitch()
    // }, [user, pitch])


    async function submitTalent(e) {
        e.preventDefault(e)
        try {
            let res = await axios.post(`http://localhost:8000/talents/`, talentData, {})
            console.log(res)
            //get response
        } catch (e) {
            console.log(e)
        }
    }

    async function change(name, newValue) {
        // console.log(document.querySelector("input[name=attribute_endurance]"))
        console.log(newValue)
        try {
            await setTalentData(prevState => ({...prevState, [name]: newValue}))
            console.log(talentData)
        } catch (e) {
            console.log(e)
        }
    }

    async function handleChange(e) {
        try {
            await setTalentData(prevState => ({...prevState, [e.target.name]: e.target.value}))
            console.log(talentData)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <Container>
                <h3 className="text-center mt-2"> Add a Talent:</h3>
                <Form ref={form} id="form" onSubmit={submitTalent} method="post">
                    <Row className="justify-content-center mx-auto text-center">
                        <Col className='col-md-6'>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="talent_name" placeholder="Xiao Ming" onChange={handleChange}
                                              required={true}/>
                            </Form.Group>

                            <h6>Rate the talent based on the attributes listed below.</h6>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_endurance', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Endurance</Form.Label>
                                <p>The ability to continue to perform a skill or action for a sustained period
                                    of time.</p>
                            </Form.Group>


                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_strength', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Strength</Form.Label>
                                <p>The ability to produce large forces.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_power', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Power</Form.Label>
                                <p>The ability to produce strength in the shortest possible time</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_speed', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Speed</Form.Label>
                                <p>The ability to cover distance quickly.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_agility', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Agility</Form.Label>
                                <p>The ability to change direction quickly.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_flexibility', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Flexibility</Form.Label>
                                <p>The ability to move the joints over a wide range of motion.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_nerve', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Nerve</Form.Label>
                                <p>The ability to stay calm and composed in stressful situations.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_durability', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Durability</Form.Label>
                                <p>The ability to withstand physical punishment over a long period of
                                    time.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_handeye_coordination', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Hand-eye Coordination</Form.Label>
                                <p>The ability to react quickly and accurately to visual stimuli.</p>
                            </Form.Group>

                            <Form.Group className='border'>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChange={(e, value) => change('attribute_analytic_aptitude', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Analytic Aptitude</Form.Label>
                                <p>The ability to evaluate and react appropriately to strategic
                                    situations.</p>
                            </Form.Group>

                            {(talentData && talentData.talent_name)?
                            <Button type="submit" className="btn text-center btn-sm" onClick={handleShow}>
                                Submit
                            </Button> :
                                <Button type="submit" className="btn text-center btn-sm suggest" disabled={true}>
                                    Submit
                                </Button>
                            }

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Body className={'h3 text-center'}>Successfully
                                    added {talentData.talent_name}!</Modal.Body>
                                <Modal.Footer>
                                    <Link to='/talents'>
                                    <Button variant="danger" onClick={handleClose}>
                                        Submit another talent
                                    </Button>
                                    </Link>
                                    <Link to='/charts'>
                                    <Button variant="success" onClick={handleClose}>
                                        Go to charts
                                    </Button>
                                    </Link>
                                </Modal.Footer>
                            </Modal>



                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default HomeView;