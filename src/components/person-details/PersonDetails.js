import React, {useState, useEffect} from "react";

import './PersonDetails.css';
import SwapiService from "../../swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import PersonView from "../person-view";

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
    const content = hasData ? <PersonView person={person} personImageSrc={personImageSrc} /> : null;

    return(
        <React.Fragment>
            {errorIndicator}
            {spinner}
            {content}
        </React.Fragment>
    );
}

export default PersonDetails;