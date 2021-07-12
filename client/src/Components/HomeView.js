import React, {useState, useEffect, useRef} from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";
import {Form, Row, Col, Container} from "react-bootstrap";

function HomeView(props) {
    const form = useRef(null)
    const [user, setUser] = useState({})
    const [talentData, setTalentData] = useState({})

    useEffect(() => {
        async function setUserStats() {
            try {
                let {data} = await axios.get("http://localhost:8000/users/", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                console.log(data)
                setUser(data.user)

            } catch (e) {
                setUser({})
                localStorage.removeItem("token")
            }
        }

        setUserStats()
    }, [])


    useEffect(() =>{
        setTalentData({scout : user})
        // console.log(post)
    },[user])

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
            let res = await axios.post(`http://localhost:8000/talents/`, talentData, {
            })
            console.log(res)
            //get response
        } catch (e) {
            console.log(e)
        }
    }

    function change(e) {
        setTalentData(prevState => ({...prevState, [e.target.name]: e.target.value}))
        console.log(talentData)
    }

    return (
        <div>
            <Container>
            <h3 className="text-center mt-2"> Add a Talent:</h3>
            <Form ref={form} id="form" onSubmit={submitTalent} method="post">
                <Row className="justify-content-center mx-auto text-center">
                    <Col className='col-md-4'>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="talent_name" placeholder="Xiao Ming" onChange={change} required={true}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Endurance</Form.Label>
                        <Form.Control as="select" name="attribute_endurance" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Strength</Form.Label>
                        <Form.Control as="select" name="attribute_strength" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Power</Form.Label>
                        <Form.Control as="select" name="attribute_power" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Speed</Form.Label>
                        <Form.Control as="select" name="attribute_speed" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Agility</Form.Label>
                        <Form.Control as="select" name="attribute_agility" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Flexibility</Form.Label>
                        <Form.Control as="select" name="attribute_flexibility" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Nerve</Form.Label>
                        <Form.Control as="select" name="attribute_nerve" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Durability</Form.Label>
                        <Form.Control as="select" name="attribute_durability" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Hand-eye Coordination</Form.Label>
                        <Form.Control as="select" name="attribute_handeye_coordination" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                   <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Analytic Aptitude</Form.Label>
                        <Form.Control as="select" name="attribute_analytic_aptitude" onChange={change}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>

                    <button type="submit" className="btn border-dark text-center m-2">
                        <h4>Submit</h4>
                    </button>
                        </Col>
                </Row>
            </Form>
            </Container>
        </div>
    );
}

export default HomeView;