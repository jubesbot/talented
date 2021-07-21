import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Axios from "../Util/Axios";
import ChartsAllSportsView from "./ChartsAllSportsView";
import ChartsSuggestedView from "./ChartsSuggestedView";

function ChartsView({talentData, setTalentData, allTalents, setAllTalents, setUser}) {

    const [allSports, setAllSports] = useState({})
    const [sportId, setSportId] = useState('1')

    //gets all sports data on page load to be inserted into dropdown bar

    async function getAllSports() {
        try {
            let {data} = await Axios.get(`api/sports/`)
            setAllSports(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    // gets all sports data on page load to be inserted into dropdown bar
    async function getAllTalents() {
        try {
            let {data} = await Axios.get(`api/talents/`)
            setAllTalents(data)
        } catch (e) {
            console.log(e.response)
        }
    }

    // loads the last talent as the default sport

    useEffect(()=>{
        async function setUserStats() {
            try {
                let {data} = await Axios.get("api/users/")
                setUser(data[0])
            } catch (e) {
                console.log(e)
            }
        }
        setUserStats()
    },[])

    useEffect(() => {
        getAllTalents()
        getAllSports()
    }, [])

    return (

        <div>
                <Row className={'d-flex'}>
                    <Col className='my-auto vh-100 col-sm-12 col-xs-12 col-md-9 col-lg-9 border-right border-warning mx-auto'>
                        <ChartsAllSportsView
                            allSports={allSports}
                            sportId={sportId}
                            setSportId={setSportId}
                            talentData={talentData}
                            setTalentData={setTalentData}
                            allTalents={allTalents}
                        />
                    </Col>
                    <Col className='col-sm-12  col-xs-12  col-md-3 col-lg-3 mx-auto'>
                        <ChartsSuggestedView
                            allSports={allSports}
                            talentData={talentData}
                        />
                    </Col>
                </Row>

        </div>
    );
}

export default ChartsView;