import React, {useEffect} from 'react';
import {Radar} from 'react-chartjs-2';
import Axios from "../Util/Axios";

function ChartsView(props) {

    async function getTalents(username, password){
        try{
            let {data} = await Axios.get(`http://localhost:8000/talents/`)
            console.log(data)
        }catch (e) {
            console.log(e.response)
        }
    }

    async function getSports(username, password){
        try{
            let {data} = await Axios.get(`http://localhost:8000/sports/`)
            console.log(data[0].sport)
        }catch (e) {
            console.log(e.response)
        }

    }

    const data = {
        labels: [
            'Endurance',
            'Strength',
            'Power',
            'Speed',
            'Agility',
            'Flexibility',
            'Nerve',
            'Durability',
            'Hand-eye Coordination',
            'Analytical Aptitude'
        ],
        datasets: [
            {
                label: 'Score',
                data: [1,3,4,3,2,3,4,2,1,2],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };

    return (
        <div>
            <h3>Charts</h3>
            <button onClick={() => getTalents()}>Get Talents</button>
            <button onClick={() => getSports()}>Get Sports</button>

            <div className='header'>
                <h1 className='title'>Radar Chart</h1>
            </div>
            <Radar data={data} options={options} />

        </div>
    );
}

export default ChartsView;