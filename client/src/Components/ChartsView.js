import React, {useEffect, useState} from 'react';
// import {Radar} from 'react-chartjs-2';
import Axios from "../Util/Axios";
import {Card, CardDeck, Col, Form, Row} from "react-bootstrap";
import Radar from 'react-d3-radar';
import axios from "axios";
import ChartsAllSportsView from "./ChartsAllSportsView";
import ChartsTalentView from "./ChartsTalentView";
import ChartsMappedView from "./ChartsMappedView";

function ChartsView({talentData, setTalentData, user, setUser}) {

    return (
        <div >

            <Row className='border border-warning'>
                <Col className='col-sm-12 col-xs-12 col-md-12 col-lg-6 border border-primary mx-auto'>
                    <ChartsAllSportsView />
                </Col>
                <Col className='col-sm-12  col-xs-12  col-md-12 col-lg-6 border border-primary mx-auto'>
                    <ChartsMappedView />
                </Col>
            </Row>

        </div>
    );
}

export default ChartsView;