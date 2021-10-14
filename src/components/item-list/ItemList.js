import React, {useEffect, useState} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ItemListView from "../item-list-view";
import SwapiService from "../../swapi-service";
import "./ItemList.css";

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

export default ItemList;