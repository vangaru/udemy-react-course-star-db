import React, {useEffect, useState} from 'react';
import './App.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../swapi-service";
import Spinner from "../spinner";

const App = () => {
    const [selectedPersonId, setSelectedPersonId] = useState(1);

    const onPersonSelected = (id) => {
        setSelectedPersonId(id);
    }

    const swapiService = new SwapiService();

    return (
        <div className="App mb-5">
            <Header />
            <RandomPlanet />
            <div className="row">
                <div className="col-md-6 mt-4">
                    <ItemList onItemSelected={onPersonSelected} getItems={() => swapiService.getAllPeople()} />
                </div>
                <div className="col-md-6 mt-4">
                    <PersonDetails personId={selectedPersonId} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <ItemList onItemSelected={null} getItems={() => swapiService.getAllPlanets()} />
                </div>
                <div className="col-md-6 mt-4">
                    <Spinner />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <ItemList onItemSelected={null} getItems={() => swapiService.getAllStarships()} />
                </div>
                <div className="col-md-6 mt-4">
                    <Spinner />
                </div>
            </div>
        </div>
    );
};

export default App;