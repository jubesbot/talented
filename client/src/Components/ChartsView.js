import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Axios from "../Util/Axios";
import ChartsAllSportsView from "./ChartsAllSportsView";
import ChartsSuggestedView from "./ChartsSuggestedView";
import {Redirect} from "react-router-dom";

function ChartsView({talentData, setTalentData, user, setUser, loggedIn, setLoggedIn}) {

    const [allTalents, setAllTalents] = useState({})
    const [allSports, setAllSports] = useState({})
    const [sportId, setSportId] = useState('61')
    const [talentId, setTalentId] = useState('1')
    const [sportData, setSportData] = useState({
        id: 61,
        sport: "Boxing",
        attribute_endurance: 8.63,
        attribute_strength: 8.13,
        attribute_power: 8.63,
        attribute_agility: 6.25,
        attribute_flexibility: 4.38,
        attribute_nerve: 8.88,
        attribute_durability: 8.50,
        attribute_handeye_coordination: 7.00,
        attribute_analytic_aptitude: 5.63,
        total: 72.38,
    })

    //gets all sports data on page load to be inserted into dropdown bar
    async function getAllSports() {

        try {
            let {data} = await Axios.get(`http://localhost:8000/sports/`)
            await setAllSports(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    //loads 'Boxing' as the default sport
    async function getSport() {
        try {
            let {data} = await Axios.get(`http://localhost:8000/sports/${sportId}`)
            console.log(data)
            await setSportData(data)
        } catch (e) {
            console.log(e)
        }
    }

    //gets all sports data on page load to be inserted into dropdown bar
    async function getAllTalents() {

        try {
            let {data} = await Axios.get(`http://localhost:8000/talents/`)
            await setAllTalents(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    // loads the last talent as the default sport
    async function getTalent() {
        try {
            let {data} = await Axios.get(`http://localhost:8000/talents/${talentId}`)
            console.log(data)
            await setTalentData(data)
        } catch (e) {
            console.log(e)
        }
    }

    console.log(talentData)

    useEffect(() => {
        if (loggedIn){
            console.log('logged in cos I got both tokens :)')
            setTalentData(prevState => ({...prevState, scout_id: user.id}))
        }else{
            console.log('not logged in cos I no tokens :(')
            return < Redirect to="/login" />
        }
        getAllTalents()
        getSport()
        getAllSports()
        getTalent()

    }, [])

    console.log(talentId)
    console.log(sportId)
    console.log(sportData)
    console.log(talentData)
    console.log(allSports.length)
    console.log(allTalents.length)

    return (
        <div>

            <Row className='border border-warning'>
                <Col className='col-sm-12 col-xs-12 col-md-12 col-lg-9 border border-primary mx-auto'>
                    <ChartsAllSportsView
                        sportData={sportData}
                        setSportData={setSportData}
                        allSports={allSports}
                        setAllSports={setAllSports}
                        sportId={sportId}
                        setSportId={setSportId}
                        talentId={talentId}
                        setTalentId={setTalentId}
                        talentData={talentData}
                        setTalentData={setTalentData}
                        allTalents={allTalents}
                        setAllTalents={setAllTalents}
                    />
                </Col>
                <Col className='col-sm-12  col-xs-12  col-md-12 col-lg-3 border border-primary mx-auto'>
                    <ChartsSuggestedView
                        sportData={sportData}
                        setSportData={setSportData}
                        allSports={allSports}
                        setAllSports={setAllSports}
                        sportId={sportId}
                        setSportId={setSportId}
                        talentId={talentId}
                        setTalentId={setTalentId}
                        talentData={talentData}
                        setTalentData={setTalentData}
                        allTalents={allTalents}
                        setAllTalents={setAllTalents}
                    />
                </Col>
            </Row>

        </div>
    );
}

export default ChartsView;