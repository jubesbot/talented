import React, {useState} from 'react';
import Radar from "react-d3-radar";
import {Button, Col} from "react-bootstrap";

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

    const [search, setSearch] = useState({})

    function filterSearch() {
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

         function suggestedSports(arr,count){
            return [...new Set(arr)].filter(x =>
                arr.filter(a => a === x).length >= count
            )
        }
        setSearch(suggestedSports(temp,5))
    }
    console.log(search)

return (
    <div>
        <Button onClick={filterSearch}>Button</Button>
        <div className='header'>
            <h4 className='title'>Based on {talentData.talent_name}'s top attributes,<br/> the suggested sports are:</h4>
            {(search && search.length > 0) &&
            search.map((sport) => (
                <ul key={sport.id}>{sport}</ul>
            ))}
        </div>
        <div>
        </div>

        {/*{(sportData && talentData && talentData.id) ?*/}
        {/*    <Radar width={400} height={400} padding={70} domainMax={10} highlighted={null} onHover={(point) => {*/}
        {/*        if (point) {*/}
        {/*            console.log('hovered over a data point');*/}
        {/*        } else {*/}
        {/*            console.log('not over anything');*/}
        {/*        }*/}
        {/*    }}*/}
        {/*           data={{*/}
        {/*               variables: [*/}
        {/*                   {key: 'attribute_endurance', label: 'Endurance'},*/}
        {/*                   {key: 'attribute_strength', label: 'Strength'},*/}
        {/*                   {key: 'attribute_power', label: 'Power'},*/}
        {/*                   {key: 'attribute_speed', label: 'Speed'},*/}
        {/*                   {key: 'attribute_agility', label: 'Agility'},*/}
        {/*                   {key: 'attribute_flexibility', label: 'Flexibility'},*/}
        {/*                   {key: 'attribute_nerve', label: 'Nerve'},*/}
        {/*                   {key: 'attribute_durability', label: 'Durability'},*/}
        {/*                   {key: 'attribute_handeye_coordination', label: 'Hand-eye Coordination'},*/}
        {/*                   {key: 'attribute_analytic_aptitude', label: 'Analytic Aptitude'},*/}
        {/*               ],*/}
        {/*               sets: [*/}
        {/*                   {*/}
        {/*                       key: '',*/}
        {/*                       label: '',*/}
        {/*                       values: {},*/}
        {/*                   },*/}
        {/*                   {*/}
        {/*                       key: 'talent',*/}
        {/*                       label: 'Talent',*/}
        {/*                       values: {*/}
        {/*                           attribute_endurance: talentData.attribute_endurance,*/}
        {/*                           attribute_strength: talentData.attribute_strength,*/}
        {/*                           attribute_power: talentData.attribute_power,*/}
        {/*                           attribute_speed: talentData.attribute_speed,*/}
        {/*                           attribute_agility: talentData.attribute_agility,*/}
        {/*                           attribute_flexibility: talentData.attribute_flexibility,*/}
        {/*                           attribute_nerve: talentData.attribute_nerve,*/}
        {/*                           attribute_durability: talentData.attribute_durability,*/}
        {/*                           attribute_handeye_coordination: talentData.attribute_handeye_coordination,*/}
        {/*                           attribute_analytic_aptitude: talentData.attribute_analytic_aptitude,*/}
        {/*                       },*/}
        {/*                   },*/}
        {/*                   {*/}
        {/*                       key: 'sport',*/}
        {/*                       label: 'Sport',*/}
        {/*                       values: {*/}
        {/*                           attribute_endurance: 10,*/}
        {/*                           attribute_strength: 9,*/}
        {/*                           attribute_power: 3,*/}
        {/*                           attribute_speed: 4,*/}
        {/*                           attribute_agility: 5,*/}
        {/*                           attribute_flexibility: 3,*/}
        {/*                           attribute_nerve: 2,*/}
        {/*                           attribute_durability: 8,*/}
        {/*                           attribute_handeye_coordination: 9,*/}
        {/*                           attribute_analytic_aptitude: 4,*/}
        {/*                       },*/}
        {/*                   },*/}

        {/*               ],*/}
        {/*           }}*/}

        {/*    />*/}
        {/*    : <>Rendering...</>*/}
        {/*}*/}

    </div>
);
}

export default ChartsSuggestedView;