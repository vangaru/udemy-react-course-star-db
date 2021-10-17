import React, {useState, useEffect} from "react";
import './ItemDetails.css';
import ItemView from "../item-view";
import ResultView from "../result-view";

const ItemDetails = ({ itemId, getItemData, itemImageSrc, renderItemDetails } ) => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onError = (err) => {
        setError(true);
        setLoading(false);
        console.log(err);
    }

    const updateItem = () => {
        if (!itemId) return;
        getItemData(itemId)
            .then((person) => {
                setItem(person);
                setLoading(false);
            })
            .catch(onError);
    }

    useEffect(() => {
        updateItem();
    }, [itemId]);

    const view = <ItemView item={item} itemImageSrc={itemImageSrc} renderItemDetails={renderItemDetails}/>;

    return(
        <ResultView view={view} loading={loading} error={error} />
    );
}

export default ItemDetails;