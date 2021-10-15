import React, {useState, useEffect} from "react";
import './PersonDetails.css';
import SwapiService from "../../swapi-service";
import PersonView from "../person-view";
import ResultView from "../swapi-item-result-view";

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

    const view = <PersonView person={person} personImageSrc={personImageSrc} />;

    return(
        <ResultView view={view} loading={loading} error={error} />
    );
}

export default PersonDetails;