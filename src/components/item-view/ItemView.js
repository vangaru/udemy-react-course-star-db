import React from "react";
import './ItemView.css';

const ItemView = ({ item, itemImageSrc, renderItemDetails } ) => {
    return (
        <div className="person-details-view bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>{item.name}</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src={itemImageSrc} alt=""/>
                </div>
                {renderItemDetails(item)}
            </div>
        </div>
    );
}

export default ItemView;