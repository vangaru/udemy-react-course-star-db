import React, {useEffect, useState} from "react";
import ItemListView from "../item-list-view";
import "./ItemList.css";
import ResultView from "../result-view";

const ItemList = ( { onItemSelected, getItems, renderListItem } ) => {
    const [itemList, setItemList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onError = (err) => {
        setError(true);
        setLoading(false);
        console.error(err);
    }

    useEffect(() => {
        getItems()
            .then((peopleList) => {
                setItemList(peopleList);
                setLoading(false);
            })
            .catch(onError);
    }, []);

    const view = <ItemListView
        items={itemList}
        onItemSelected={onItemSelected}
        render={(item) => renderListItem(item)} />;

    return (
        <ResultView view={view} error={error} loading={loading} />
    );
}

export default ItemList;