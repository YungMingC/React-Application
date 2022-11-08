import {useEffect, useState} from 'react';

function Activities()
{
    function LoadActivity()
    {
        fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((data) => setActivity(data.activity))
    }

    const [activity, setActivity] = useState();

    useEffect(
        () =>{
            LoadActivity();
        },[]
    );

    return(
        <div className="card shadow p-3">
            <h1 className="card-title">Activities</h1>
            <div className="card-text">{activity}</div>
        </div>
        
    );
}

export default Activities;