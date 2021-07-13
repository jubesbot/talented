import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Radar from "react-d3-radar";
import axios from "axios";

function ChartsAllSportsView({sportData, setSportData, allSports, setAllSports, sportId, setSportId, talentData, allTalents, setAllTalents, talentId, setTalentData, setTalentId}) {
    //to work with the form selector

    async function getOneSport(e) {
        e.preventDefault()
        try {
            let {data} = await axios.get(`http://localhost:8000/sports/${sportId}`)
            console.log(data)
            await setSportData(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>

            <Form method="get" onSubmit={getOneSport}>
                <Row>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className='h4'>Select Sport</Form.Label>
                            <Form.Control as="select" value={sportId} onChange={e => {
                                // console.log("e.target.value", typeof e.target.value);
                                // getOneSport(e)
                                setSportId(e.target.value);
                            }}>
                                {(allSports && allSports.length > 0) &&
                                allSports.map((sport) => (
                                    <option key={sport.id} value={sport.id}>{sport.sport}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <button type="submit" className="btn border-dark text-center btn-sm">Get Sport
                        </button>
                    </Col>
                </Row>
            </Form>

            {(sportData && talentData) &&
            <Radar
                width={400} height={400} padding={70} domainMax={10} highlighted={null} onHover={(point) => {
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
                                attribute_endurance: sportData.attribute_endurance,
                                attribute_strength: sportData.attribute_strength,
                                attribute_power: sportData.attribute_power,
                                attribute_speed: sportData.attribute_speed,
                                attribute_agility: sportData.attribute_agility,
                                attribute_flexibility: sportData.attribute_flexibility,
                                attribute_nerve: sportData.attribute_nerve,
                                attribute_durability: sportData.attribute_durability,
                                attribute_handeye_coordination: sportData.attribute_handeye_coordination,
                                attribute_analytic_aptitude: sportData.attribute_analytic_aptitude,
                            },
                        },
                        {
                            key: 'talent',
                            label: 'Talent',
                            values: {
                                attribute_endurance: talentData.attribute_endurance,
                                attribute_strength: talentData.attribute_strength,
                                attribute_power: talentData.attribute_power,
                                attribute_speed: talentData.attribute_speed,
                                attribute_agility: talentData.attribute_agility,
                                attribute_flexibility: talentData.attribute_flexibility,
                                attribute_nerve: talentData.attribute_nerve,
                                attribute_durability: talentData.attribute_durability,
                                attribute_handeye_coordination: talentData.attribute_handeye_coordination,
                                attribute_analytic_aptitude: talentData.attribute_analytic_aptitude,
                            },
                        },
                    ],
                }}
            />
            }

        </div>
    );
}

export default ChartsAllSportsView;