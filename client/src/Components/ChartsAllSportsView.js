import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import Radar from "react-d3-radar";
import Axios from "../Util/Axios";

function ChartsAllSportsView({allSports, sportId, setSportId, talentData, allTalents, setTalentData}) {
    //to work with the form selector
    const [talentId, setTalentId] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [sportData, setSportData] = useState({
        id: 61,
        sport: "Boxing",
        attribute_endurance: 8.63,
        attribute_strength: 8.13,
        attribute_power: 8.63,
        attribute_speed: 6.38,
        attribute_agility: 6.25,
        attribute_flexibility: 4.38,
        attribute_nerve: 8.88,
        attribute_durability: 8.50,
        attribute_handeye_coordination: 7.00,
        attribute_analytic_aptitude: 5.63,
        total: 72.38,
    })

    async function getSport() {
        try {
            let {data} = await Axios.get(`api/sports/${sportId}`)
            console.log(data)
            setSportData(data)
        } catch (e) {
            console.log(e)
        }
    }


    async function getOneSport(e) {
        e.preventDefault()
        try {
            let {data} = await Axios.get(`api/sports/${sportId}`)
            console.log(data)
            await setSportData(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function handleTalentChange(e){
        let data = allTalents.find(talent => talent.id === parseInt(e.target.value))
        setTalentData(data)
        }



    async function handleSportChange(e){
        setSportId(e.target.value);
        setIsLoading(true)
        try {
            let {data} = await Axios.get(`/api/sports/${e.target.value}`)
            console.log(data)
            await setSportData(data)
        } catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {

        getSport()


    }, [])

    useEffect(()=>{
        setTalentData(allTalents[0])
    },[allTalents])

    return (
        <div>
            <Row className='p-3'>
                <Col className='md-6'>
                <Form method="get" >
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className='h4'>Select Talent<span className='circle talent'></span></Form.Label>
                                <Form.Control as="select" onChange={handleTalentChange} disabled={isLoading ? "disabled":""}>
                                    {(allTalents && allTalents.length > 0) &&
                                    allTalents.map((talent) => (
                                        <option key={talent.id} value={talent.id}>{talent?.talent_name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                </Col>
                <Col className='md-6'>
                <Form method="get" onSubmit={getOneSport}>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className='h4'>Select Sport<span className='circle sport'></span></Form.Label>
                                <Form.Control as="select" value={sportId} onChange={handleSportChange}
                                >
                                    {(allSports && allSports.length > 0) &&
                                    allSports.map((sport) => (
                                        <option key={sport.id} value={sport.id}>{sport.sport}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Row>

            <Row className='h-auto'>
                <Col className='col-md-7 mx-auto'>
                    {(talentData) ?
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
            /> :
                    <>
                        CONTENT LOADING
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" size="sm" />
                        <Spinner animation="grow" size="sm" />
                    </>}
                    </Col>
                </Row>

        </div>
    );
}

export default ChartsAllSportsView;