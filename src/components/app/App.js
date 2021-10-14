import React, {useState} from 'react';
import './App.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {
    const [selectedPersonId, setSelectedPersonId] = useState(1);

    const onPersonSelected = (id) => {
        setSelectedPersonId(id);
    }

    return (
        <div className="App mb-5">
            <Header />
            <RandomPlanet />
            <div className="row">
                <div className="col-md-6 mt-4">
                    <ItemList onItemSelected={onPersonSelected} />
                </div>
                <div className="col-md-6 mt-4">
                    <PersonDetails personId={selectedPersonId} />
                </div>
            </div>
        </div>
    );
};

export default App;