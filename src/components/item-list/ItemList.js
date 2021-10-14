import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./ItemList.css";
import SwapiService from "../../swapi-service";

const ItemList = () => {
    const [itemList, setItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const swapiService = new SwapiService();

    const onError = (err) => {
        setError(true);
        setLoading(false);
        console.error(err);
    }

    useEffect(() => {
        swapiService
            .getAllPeople()
            .then((peopleList) => {
                setItemList(peopleList);
                setLoading(false);
            })
            .catch(onError);
    }, []);

    const hasData = !(loading || error);

    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <ItemListView people={itemList} /> : null;

    return (
        <React.Fragment>
            {errorIndicator}
            {spinner}
            {content}
        </React.Fragment>
    );
}

const ItemListView = ( { people } ) => {
    return (
        <ul className="item-list list-group">
            <li className="list-group-item">
                <h5>Luke Skywalker</h5>
            </li>
            <li className="list-group-item">
                <h5>Darth Vader</h5>
            </li>
            <li className="list-group-item">
                <h5>R2-D2</h5>
            </li>
        </ul>
    );
}

export default ItemList;