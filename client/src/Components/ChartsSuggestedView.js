import React from 'react';
import Radar from "react-d3-radar";
import {Col} from "react-bootstrap";

function ChartsSuggestedView({sportData, setSportData, allSports, setAllSports, sportId, setSportId, talentData, allTalents, setAllTalents, talentId, setTalentData, setTalentId}) {
    return (
        <div>

            <div className='header'>
                <h4 className='title'>Suggested Sport:</h4>
            </div>
            <div>
                <h2>blank space</h2>
                <h3>blank space</h3>
            </div>

            {(sportData && talentData) &&
            <Radar width={400} height={400} padding={70} domainMax={10} highlighted={null} onHover={(point) => {
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
            }

        </div>
    );
}

export default ChartsSuggestedView;