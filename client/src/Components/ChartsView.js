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

    //gets all sports data on page load to be inserted into dropdown bar
    async function getAllTalents() {
        try {
            let {data} = await Axios.get(`http://localhost:8000/talents/`)
                setAllTalents(data)
            console.log(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    // loads the last talent as the default sport

    console.log(talentData)

    useEffect(() => {

        getAllTalents()
        getAllSports()

    }, [])

    console.log(sportId)
    console.log(talentData)
    console.log(allSports.length)
    console.log(allTalents.length)

    return (

        <div>
            {(loggedIn) ?
                <Row className='border border-warning'>
                    <Col className='col-sm-12 col-xs-12 col-md-12 col-lg-9 border border-primary mx-auto'>
                        <ChartsAllSportsView
                            allSports={allSports}
                            setAllSports={setAllSports}
                            sportId={sportId}
                            setSportId={setSportId}
                            talentData={talentData}
                            setTalentData={setTalentData}
                            allTalents={allTalents}
                        />
                    </Col>
                    <Col className='col-sm-12  col-xs-12  col-md-12 col-lg-3 border border-primary mx-auto'>
                        <ChartsSuggestedView
                            allSports={allSports}
                            setAllSports={setAllSports}
                            sportId={sportId}
                            setSportId={setSportId}
                            talentData={talentData}
                            setTalentData={setTalentData}
                            allTalents={allTalents}
                            setAllTalents={setAllTalents}
                        />
                    </Col>
                </Row>
                :
                < Redirect to="/"/>
            }

        </div>
    );
}

export default ChartsView;