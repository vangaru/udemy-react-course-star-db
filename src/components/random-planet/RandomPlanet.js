import React, {useEffect, useState} from "react";

import SwapiService from "../../swapi-service";

import './RandomPlanet.css';

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [planetImageSrc, setPlanetImageSrc] = useState('');

    const swapiService = new SwapiService();

    const updatePlanet = () => {
        const planetId = Math.floor(Math.random() * 25 + 2);
        swapiService
            .getPlanet(planetId)
            .then((planet) => {
                setPlanet(planet);
                setPlanetImageSrc(`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`);
            });
        console.log(planetId);
    }

    useEffect((() => {
        updatePlanet();
    }), []);

    return (
        <div className="random-planet bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>{planet.name}</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src={planetImageSrc} alt=""/>
                </div>
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Population {planet.population}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Rotation period {planet.rotationPeriod}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Diameter {planet.diameter}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RandomPlanet;