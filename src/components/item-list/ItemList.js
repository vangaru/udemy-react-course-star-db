import React, {useEffect, useState} from "react";
import ItemListView from "../item-list-view";
import SwapiService from "../../swapi-service";
import "./ItemList.css";
import ResultView from "../swapi-item-result-view";

const ItemList = ( { onItemSelected } ) => {
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

    const view = <ItemListView items={itemList} onItemSelected={onItemSelected} />;

    return (
        <ResultView view={view} error={error} loading={loading} />
    );
}

export default ItemList;