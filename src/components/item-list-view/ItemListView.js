import React from "react";

const ItemListView = ( { items, onItemSelected, render } ) => {
    const renderItems = (items) => {
        return items.map((item) => renderItem(item));
    }

    const renderItem = (item) => {
        return (
            <li className="list-group-item"
                key={item.id} onClick={ () => onItemSelected(item.id) }>
                {render(item)}
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