import React from "react";

import "./ItemList.css";

const ItemList = () => {
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