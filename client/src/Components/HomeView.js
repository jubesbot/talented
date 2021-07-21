import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import Axios from "../Util/Axios";
import {Form, Row, Col, Modal, Button} from "react-bootstrap";
import {Slider} from "@material-ui/core";

function HomeView({talentData, setTalentData, setUser}) {
    const form = useRef(null)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        async function setUserStats() {
            try {
                let {data} = await Axios.get("api/users/")
                setUser(data[0])
                setTalentData(prevState => ({...prevState, scout : data[0].id}))
            } catch (e) {
                console.log(e)
            }
        }
        setUserStats()
    },[])

    async function change(name, newValue) {
        try {
            await setTalentData(prevState => ({...prevState, [name]: newValue}))
        } catch (e) {
            console.log(e)
        }
    }

    async function handleChange(e) {
        try {
            await setTalentData(prevState => ({...prevState, [e.target.name]: e.target.value}))
        } catch (e) {
            console.log(e)
        }
    }

    async function submitTalent(e) {
        e.preventDefault(e)
        try {
            let res = await Axios.post(`api/talents/`, talentData, {})
            //get response
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            {/*<Container>*/}
                <h5 className="text-center m-2"> Add a New Talent:</h5>
                <Form ref={form} id="form" onSubmit={submitTalent} method="post">
                    <Row className="justify-content-center mx-auto text-center">
                        <Col className='col-lg-10'>
                            <Form.Group controlId="exampleForm.ControlInput1" className={'col-md-6 mx-auto pb-2'}>
                                <Form.Control name="talent_name" placeholder="Enter talent's name" onChange={handleChange}
                                              required={true}/>
                            </Form.Group>

                            <h5>Rate the talent based on the attributes listed below.</h5>

                            <Row>
                            <Col className='col-md-6 h-auto'>
                            {/*endurance slider*/}
                            <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_endurance', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Endurance</Form.Label>
                                <p>The ability to continue to perform a skill or action for a sustained period
                                    of time.</p>
                            </Form.Group>
                            </Col>

                                <Col className='col-md-6' >
                            {/*strength slider*/}
                            <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_strength', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Strength</Form.Label>
                                <p>The ability to produce large forces.</p>
                            </Form.Group>
                            </Col>
                            </Row>

                            <Row>
                                <Col className='col-md-6 h-auto'>
                                {/*power slider*/}
                                <Form.Group className='border' style={{height:"90%"}}>
                                    <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                            onChangeCommitted={(e, value) => change('attribute_power', value)}/>
                                    <Form.Label style={{fontWeight: "bold"}}>Power</Form.Label>
                                    <p>The ability to produce strength in the shortest possible time.</p>
                                </Form.Group>
                                </Col>

                                <Col className='col-md-6 h-auto'>
                            {/*speed slider*/}
                            <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_speed', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Speed</Form.Label>
                                <p>The ability to cover distance quickly.</p>
                            </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                            <Col className='col-md-6 h-auto'>
                            {/*agility slider*/}
                                <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_agility', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Agility</Form.Label>
                                <p>The ability to change direction quickly.</p>
                            </Form.Group>
                            </Col>

                            <Col className='col-md-6 h-auto'>
                            {/*flexibility slider*/}
                            <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_flexibility', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Flexibility</Form.Label>
                                <p>The ability to move the joints over a wide range of motion.</p>
                            </Form.Group>
                            </Col>
                            </Row>

                            <Row>
                            <Col className='col-md-6 h-auto'>
                            {/*nerve slider*/}
                                <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_nerve', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Nerve</Form.Label>
                                <p>The ability to stay calm and composed in stressful situations.</p>
                            </Form.Group>
                            </Col>

                                <Col className='col-md-6 h-auto'>
                            {/*durability slider*/}
                                    <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_durability', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Durability</Form.Label>
                                <p>The ability to withstand physical punishment over a long period of
                                    time.</p>
                            </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='col-md-6 h-auto'>
                            {/*hand-eye coordination slider*/}
                                    <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_handeye_coordination', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Hand-eye Coordination</Form.Label>
                                <p>The ability to react quickly and accurately to visual stimuli.</p>
                            </Form.Group>
                                </Col>

                                    <Col className='col-md-6 h-auto'>
                            {/*analytic aptitude slider*/}
                                        <Form.Group className='border' style={{height:"90%"}}>
                                <Slider valueLabelDisplay="auto" min={1} max={10} defaultValue={1} step={0.01}
                                        onChangeCommitted={(e, value) => change('attribute_analytic_aptitude', value)}/>
                                <Form.Label style={{fontWeight: "bold"}}>Analytic Aptitude</Form.Label>
                                <p>The ability to evaluate and react appropriately to strategic
                                    situations.</p>
                            </Form.Group>
                                    </Col>
                            </Row>

                            {(talentData && talentData?.talent_name) ?
                                <Button type="submit" className="btn btn-danger text-center btn-sm" onClick={handleShow}>
                                    Submit
                                </Button> :
                                <Button type="submit" className="btn btn-danger text-center btn-sm suggest" disabled={true}>
                                    Submit
                                </Button>
                            }

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Body className={'h3 text-center'}>Successfully
                                    added {talentData?.talent_name}!</Modal.Body>
                                <Modal.Footer>
                                    <Link to='/'>
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
            {/*</Container>*/}
        </div>
    );
}

export default HomeView;