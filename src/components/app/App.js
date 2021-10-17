import React, {useEffect, useState} from 'react';
import './App.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Spinner from "../spinner";
import SwapiService from "../../swapi-service";
import ItemListRow from "../item-list-row";

const App = () => {
    const [selectedPersonId, setSelectedPersonId] = useState(1);



    const onPersonSelected = (id) => {
        setSelectedPersonId(id);
    }

    const swapiService = new SwapiService();

    const personItemList = <ItemList
        onItemSelected={onPersonSelected}
        getItems={() => swapiService.getAllPeople()}
        renderListItem={(item) => `${item.name} (${item.birthYear}, ${item.gender})`}
    />;

    const personDetails = <PersonDetails personId={selectedPersonId} />;

    return (
        <div className="App mb-5">
            <Header />
            <RandomPlanet />
            <ItemListRow itemList={personItemList} itemDetails={personDetails} />
            <div className="row mt-4">
                <div className="col-md-4">
                    <ItemList
                        onItemSelected={null}
                        getItems={() => swapiService.getAllPlanets()}
                        renderListItem={(item) => `${item.name} (diameter: ${item.diameter})`}
                    />
                </div>
                <div className="col-md-8">
                    <Spinner />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <ItemList
                        onItemSelected={null}
                        getItems={() => swapiService.getAllStarships()}
                        renderListItem={(item) => `${item.name} (${item.model})`}
                    />
                </div>
                <div className="col-md-8">
                    <Spinner />
                </div>
            </div>
        </div>
    );
};

export default App;