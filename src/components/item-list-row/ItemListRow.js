import React from "react";
import "./ItemListRow.css";

const ItemListRow = ( { itemList, itemDetails } ) => {
    return (
        <div className="item-list-row row mt-4">
            <div className="col col-md-4">
                {itemList}
            </div>
            <div className="col col-md-8">
                {itemDetails}
            </div>
        </div>
    );
}

export default ItemListRow;