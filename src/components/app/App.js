import React from 'react';
import './App.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {
    return (
        <div className="App">
            <Header />
            <RandomPlanet />
            <div className="row">
                <div className="col-md-6 mt-4">
                    <ItemList />
                </div>
                <div className="col-md-6 mt-4">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;