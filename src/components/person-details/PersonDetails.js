import React, {useState, useEffect} from "react";

import './PersonDetails.css';
import SwapiService from "../../swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const PersonDetails = ( { personId } ) => {
    const [person, setPerson] = useState(null);
    const [personImageSrc, setPersonImageSrc] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const swapiService = new SwapiService();

    const onError = (err) => {
        setError(true);
        setLoading(false);
        console.log(err);
    }

    const updatePerson = () => {
        if (!personId) return;
        swapiService
            .getPerson(personId)
            .then((person) => {
                setPerson(person);
                setPersonImageSrc(`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`);
                setLoading(false);
            })
            .catch(onError);
    }

    useEffect(() => {
        updatePerson();
    }, [personId]);

    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonDetailsView person={person} personImageSrc={personImageSrc} /> : null;

    return(
        <React.Fragment>
            {errorIndicator}
            {spinner}
            {content}
        </React.Fragment>
    );
}

const PersonDetailsView = ( { person, personImageSrc } ) => {
    return (
        <div className="person-details bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>{person.name}</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src={personImageSrc} alt=""/>
                </div>
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Gender {person.gender}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Birth Year {person.birthYear}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Eye Color {person.eyeColor}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PersonDetails;