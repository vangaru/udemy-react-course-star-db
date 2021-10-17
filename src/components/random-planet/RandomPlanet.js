import React, {useEffect, useState} from "react";
import SwapiService from "../../swapi-service";
import './RandomPlanet.css';
import ResultView from "../result-view";
import ItemView from "../item-view";

const RandomPlanet = ( { renderPlanetDetails } ) => {
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
        const interval = setInterval(() => {
            updatePlanet();
        }, 5000);
        return () => clearInterval(interval);
    }), []);

    const view = <ItemView item={planet} itemImageSrc={planetImageSrc} renderItemDetails={renderPlanetDetails} />

    return (
        <ResultView view={view} error={error} loading={loading} />
    );
}

export default RandomPlanet;