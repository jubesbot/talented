import React from 'react';
import Radar from "react-d3-radar";
import {Col} from "react-bootstrap";

function ChartsTalentView(props) {
    return (
        <div>

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

        </div>
    );
}

export default ChartsTalentView;