import React, {useEffect, useState} from "react";
import SwapiService from "../../swapi-service";
import Spinner from "../spinner";
import './RandomPlanet.css';
import ErrorIndicator from "../error-indicator";

const RandomPlanet = () => {
    const [planet, setPlanet] = useState({});
    const [planetImageSrc, setPlanetImageSrc] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const swapiService = new SwapiService();
    const minPlanetId = 2;
    const maxPlanetId = 18;

    const onError = (err) => {
        setError(true);
        setLoading(false);
        console.error(err);
    }

    const updatePlanet = () => {
        const planetId = Math.floor(Math.random() * maxPlanetId + minPlanetId);
        swapiService
            .getPlanet(planetId)
            .then((planet) => {
                setPlanet(planet);
                setPlanetImageSrc(`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`);
                setLoading(false);
            })
            .catch(onError);
    }

    useEffect((() => {
        updatePlanet();
        setInterval(updatePlanet, 5000);
    }), []);

    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} planetImageSrc={planetImageSrc} /> : null;

    return (
        <div className="random-planet bg-dark p-4">
            {errorIndicator}
            {spinner}
            {content}
        </div>
    );
}

const PlanetView = ( { planet, planetImageSrc } ) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default RandomPlanet;