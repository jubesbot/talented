import React, {useState} from 'react';
import Radar from "react-d3-radar";
import {Button, Col, ListGroup} from "react-bootstrap";

function ChartsSuggestedView({
                                 sportData,
                                 setSportData,
                                 allSports,
                                 setAllSports,
                                 sportId,
                                 setSportId,
                                 talentData,
                                 allTalents,
                                 setAllTalents,
                                 talentId,
                                 setTalentData,
                                 setTalentId
                             }) {

    const [filter, setFilter] = useState({})

    function suggestSport() {
        let temp = []

        for (let i = 0; i < allSports.length; i++) {
            if (Math.abs((talentData.attribute_endurance) - (allSports[i].attribute_endurance)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_strength) - (allSports[i].attribute_strength)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_power) - (allSports[i].attribute_power)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_speed) - (allSports[i].attribute_speed)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_agility) - (allSports[i].attribute_agility)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_flexibility) - (allSports[i].attribute_flexibility)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_nerve) - (allSports[i].attribute_nerve)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_durability) - (allSports[i].attribute_durability)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_handeye_coordination) - (allSports[i].attribute_handeye_coordination)) < 2){
                temp.push(allSports[i].sport)
            }
            if (Math.abs((talentData.attribute_analytic_aptitude) - (allSports[i].attribute_analytic_aptitude)) < 2){
                temp.push(allSports[i].sport)
            }
        }

         function setLeniency(arr,count){
            return [...new Set(arr)].filter(x =>
                arr.filter(a => a === x).length >= count
            )
        }
        setFilter(setLeniency(temp,5))
    }
    console.log(filter)

return (
    <div>
        <div className='header'>
            <h4 className='title m-3'>Find out what are some of {talentData.talent_name}'s suggested sports!</h4>
            <Button className='btn text-center btn-sm suggest' onClick={suggestSport}>Get Suggestions</Button>
            <div className='scroll mt-3'>
            {(filter && filter.length > 0) &&
            filter.map((sport) => (
                <ListGroup className='p-2'>
                <ListGroup.Item variant='danger' key={sport.id}>{sport}</ListGroup.Item>
                </ListGroup>
            ))}
            </div>
        </div>
        <div>
        </div>

    </div>
);
}

export default ChartsSuggestedView;