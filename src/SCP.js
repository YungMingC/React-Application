import {useEffect, useState} from 'react';

function SCP()
{
    const [state, setState] = useState([]);

    function getData()
    {
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            // console.log(this.responseText);
            const scpData = JSON.parse(this.responseText);
            setState(scpData);
        }
        });

        xhr.open("GET", "https://scpdatabase-6ea6.restdb.io/rest/scpdatabase");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "6363acb1e9a77f598422063f");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    }

    useEffect(
        ()=>{
            getData();
        }, [state]
    );

    return(
        <div>
            {
                state && state.map(
                    scp => 
                    <div className="row mb-5" key = "{scp.Item}">
                        <div className="col-15">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h2>{scp.Item}</h2>
                                    <h2>{scp.Class}</h2>
                                    <p>{scp.Description}</p>
                                    <p>{scp.Containment}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default SCP;