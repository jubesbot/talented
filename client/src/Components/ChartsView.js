import React, {useEffect, useState} from 'react';
// import {Radar} from 'react-chartjs-2';
import Axios from "../Util/Axios";
import {Card, CardDeck, Col, Form, Row} from "react-bootstrap";
import Radar from 'react-d3-radar';
import axios from "axios";

function ChartsView({talentData, setTalentData, user, setUser}) {
    const [allSports, setAllSports] = useState({})
    const [sportData, setSportData] = useState({})

    //nothing yet

    //to work with the form selector
    async function getOneSport() {
        let sportName = ''
        try {
            let {data} = await Axios.get(`http://localhost:8000/sports/?sport=${sportName}`)
            console.log(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    //renders one sport for the chart on page load
    useEffect(() => {
        let sportName = 'Archery'

        async function getSport() {
            try {
                let {data} = await axios.get(`http://localhost:8000/sports/?sport=${sportName}`)
                setSportData(data)
            } catch (e) {
                console.log(e.response)
            }
        }
        getSport()

        async function getAllSports() {
            try {
                let {data} = await axios.get(`http://localhost:8000/sports/`)
                setAllSports(data)
            } catch (e) {
                console.log(e.response)
            }
        }
        getAllSports()

    }, [])

    console.log('SINGLE SPORT' + " " + JSON.stringify(sportData))
    console.log('ALL SPORTS' + " " + JSON.stringify(allSports))

    // const data = {
    //     labels: [
    //         'Endurance',
    //         'Strength',
    //         'Power',
    //         'Speed',
    //         'Agility',
    //         'Flexibility',
    //         'Nerve',
    //         'Durability',
    //         'Hand-eye Coordination',
    //         'Analytical Aptitude'
    //     ],
    //     datasets: [
    //         {
    //             label: 'Score',
    //             data: [1, 3, 4, 3, 2, 3, 4, 2, 1, 2],
    //             backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //             borderColor: 'rgba(255, 99, 132, 1)',
    //             borderWidth: 1,
    //         },
    //     ],
    // };
    //
    // const options = {
    //     scale: {
    //         ticks: {beginAtZero: true},
    //     },
    // };

    return (
        <div>

            {/*<Row xs={2} md={3} lg={4} className='border border-warning'>*/}

            {/*     <Col className='col-6 border border-primary mx-auto'>*/}
            {/*         <div className='header'>*/}
            {/*             <h3 className='title'>Pick a Sport:</h3>*/}
            {/*         </div>*/}
            {/*         <Radar data={data} options={options}/>*/}

            {/*     </Col>*/}

            {/*     <Col className='col-6 border border-primary mx-auto'>*/}

            {/*         <div className='header'>*/}
            {/*             <h3 className='title'>Talent's Stats:</h3>*/}
            {/*         </div>*/}
            {/*         <Radar data={data} options={options}/>*/}

            {/*     </Col>*/}

            {/* </Row>*/}

            {/* <Row xs={2} md={3} lg={4} className='border border-warning'>*/}

            {/*     <Col className='col-6 border border-primary mx-auto'>*/}
            {/*         <div className='header'>*/}
            {/*             <h3 className='title'>Suggested Sport:</h3>*/}
            {/*         </div>*/}
            {/*         <Radar data={data} options={options}/>*/}

            {/*     </Col>*/}

            {/* </Row>*/}

            {/* <button onClick={() => getTalents()}>Get Talents</button>*/}
            {/* <button onClick={() => getSports()}>Get Sports</button>*/}
            <Row xs={2} md={2} lg={3} className='border border-warning'>
                <Col className='col-6 border border-primary mx-auto'>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label className='h4'>Select Sport</Form.Label>
                                    <Form.Control as="select" name="sport">

                                        {/*{allSports.map((sport) => (*/}
                                        {/*    <option value={sport.id}>{sport.sport}</option>*/}
                                        {/*))}*/}

                                        <option>avc</option>
                                        <option>avc</option>
                                    </Form.Control>
                                </Form.Group>
                                <button type="submit" className="btn border-dark text-center btn-sm"
                                        onClick={() => getOneSport()}>Get Sport
                                </button>
                            </Col>
                        </Row>
                    </Form>
                    <Radar
                        width={500} height={500} padding={70} domainMax={10} highlighted={null} onHover={(point) => {
                        if (point) {
                            console.log('hovered over a data point');
                        } else {
                            console.log('not over anything');
                        }
                    }}
                        data={{
                            variables: [
                                {key: 'attribute_endurance', label: 'Endurance'},
                                {key: 'attribute_strength', label: 'Strength'},
                                {key: 'attribute_power', label: 'Power'},
                                {key: 'attribute_speed', label: 'Speed'},
                                {key: 'attribute_agility', label: 'Agility'},
                                {key: 'attribute_flexibility', label: 'Flexibility'},
                                {key: 'attribute_nerve', label: 'Nerve'},
                                {key: 'attribute_durability', label: 'Durability'},
                                {key: 'attribute_handeye_coordination', label: 'Hand-eye Coordination'},
                                {key: 'attribute_analytic_aptitude', label: 'Analytic Aptitude'},
                            ],
                            sets: [
                                {
                                    key: 'sport',
                                    label: 'Sport',
                                    values: {
                                        attribute_endurance: 10,
                                        attribute_strength: 9,
                                        attribute_power: 3,
                                        attribute_speed: 4,
                                        attribute_agility: 5,
                                        attribute_flexibility: 3,
                                        attribute_nerve: 2,
                                        attribute_durability: 8,
                                        attribute_handeye_coordination: 9,
                                        attribute_analytic_aptitude: 4,
                                    },
                                },
                            ],
                        }}
                    />
                </Col>

                <Col className='col-6 border border-primary mx-auto'>
                    <div className='header'>
                        <h4 className='title'>Talent's Stats:</h4>
                    </div>
                    <Radar width={500} height={500} padding={70} domainMax={10} highlighted={null} onHover={(point) => {
                        if (point) {
                            console.log('hovered over a data point');
                        } else {
                            console.log('not over anything');
                        }
                    }}
                           data={{
                               variables: [
                                   {key: 'attribute_endurance', label: 'Endurance'},
                                   {key: 'attribute_strength', label: 'Strength'},
                                   {key: 'attribute_power', label: 'Power'},
                                   {key: 'attribute_speed', label: 'Speed'},
                                   {key: 'attribute_agility', label: 'Agility'},
                                   {key: 'attribute_flexibility', label: 'Flexibility'},
                                   {key: 'attribute_nerve', label: 'Nerve'},
                                   {key: 'attribute_durability', label: 'Durability'},
                                   {key: 'attribute_handeye_coordination', label: 'Hand-eye Coordination'},
                                   {key: 'attribute_analytic_aptitude', label: 'Analytic Aptitude'},
                               ],
                               sets: [
                                   {
                                       key: '',
                                       label: '',
                                       values: {},
                                   },

                                   {
                                       key: 'talent',
                                       label: 'Talent',
                                       values: {
                                           attribute_endurance: 4,
                                           attribute_strength: 6,
                                           attribute_power: 7,
                                           attribute_speed: 2,
                                           attribute_agility: 8,
                                           attribute_flexibility: 1,
                                           attribute_nerve: 2,
                                           attribute_durability: 8,
                                           attribute_handeye_coordination: 1,
                                           attribute_analytic_aptitude: 1,
                                       },
                                   },
                               ],
                           }}
                    />
                </Col>

            </Row>

            <Row>

                <Col className='col-6 border border-primary mx-auto'>
                    <div className='header'>
                        <h4 className='title'>Recommended Sport:</h4>
                    </div>
                    <Radar width={500} height={500} padding={70} domainMax={10} highlighted={null} onHover={(point) => {
                        if (point) {
                            console.log('hovered over a data point');
                        } else {
                            console.log('not over anything');
                        }
                    }}
                           data={{
                               variables: [
                                   {key: 'attribute_endurance', label: 'Endurance'},
                                   {key: 'attribute_strength', label: 'Strength'},
                                   {key: 'attribute_power', label: 'Power'},
                                   {key: 'attribute_speed', label: 'Speed'},
                                   {key: 'attribute_agility', label: 'Agility'},
                                   {key: 'attribute_flexibility', label: 'Flexibility'},
                                   {key: 'attribute_nerve', label: 'Nerve'},
                                   {key: 'attribute_durability', label: 'Durability'},
                                   {key: 'attribute_handeye_coordination', label: 'Hand-eye Coordination'},
                                   {key: 'attribute_analytic_aptitude', label: 'Analytic Aptitude'},
                               ],
                               sets: [

                                   {
                                       key: 'talent',
                                       label: 'Talent',
                                       values: {
                                           attribute_endurance: 10,
                                           attribute_strength: 9,
                                           attribute_power: 3,
                                           attribute_speed: 4,
                                           attribute_agility: 5,
                                           attribute_flexibility: 3,
                                           attribute_nerve: 2,
                                           attribute_durability: 8,
                                           attribute_handeye_coordination: 9,
                                           attribute_analytic_aptitude: 4,
                                       },
                                   },
                                   {
                                       key: 'sport',
                                       label: 'Sport',
                                       values: {
                                           attribute_endurance: 4,
                                           attribute_strength: 6,
                                           attribute_power: 7,
                                           attribute_speed: 2,
                                           attribute_agility: 8,
                                           attribute_flexibility: 1,
                                           attribute_nerve: 2,
                                           attribute_durability: 8,
                                           attribute_handeye_coordination: 1,
                                           attribute_analytic_aptitude: 1,
                                       },
                                   },
                               ],
                           }}
                    />
                </Col>

            </Row>

        </div>
    );
}

export default ChartsView;