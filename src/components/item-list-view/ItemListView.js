import React from "react";

const ItemListView = ( { items, onItemSelected } ) => {
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
            { renderItems(items) }
        </ul>
    );
}

export default ItemListView;