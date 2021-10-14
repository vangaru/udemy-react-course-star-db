import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./ItemList.css";
import SwapiService from "../../swapi-service";

const ItemList = ( {onItemSelected} ) => {
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
    const content = hasData ? <ItemListView people={itemList} onItemSelected={onItemSelected} /> : null;

    return (
        <React.Fragment>
            {errorIndicator}
            {spinner}
            {content}
        </React.Fragment>
    );
}

const ItemListView = ( { people, onItemSelected } ) => {
    const renderItems = (items) => {
        return items.map(({id, name}) => renderItem(id, name));
    }

    const renderItem = (id, name) => {
        return (
            <li className="list-group-item"
                key={id} onClick={ () => onItemSelected(id) }>
                {name}
            </li>
        );
    }

    return (
        <ul className="item-list list-group">
            { renderItems(people) }
        </ul>
    );
}

export default ItemList;