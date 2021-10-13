import React from "react";

import './RandomPlanet.css';

const RandomPlanet = () => {
    return (
        <div className="random-planet bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>Planet Name</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src="https://starwars-visualguide.com/assets/img/planets/9.jpg" alt=""/>
                </div>
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Population 12345</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Rotation period 43</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Diameter 100</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RandomPlanet;