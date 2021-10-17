import React, {useState} from 'react';
import './App.css';

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ItemListRow from "../item-list-row";
import SwapiService from "../../swapi-service";

const App = () => {
    const [selectedPersonId, setSelectedPersonId] = useState(1);
    const [selectedPlanetId, setSelectedPlanetId] = useState(2);
    const [selectedStarshipId, setSelectedStarshipId] = useState(10);

    const onPersonSelected = (id) => {
        setSelectedPersonId(id);
    }

    const onPlanetSelected = (id) => {
        setSelectedPlanetId(id);
    }

    const onStarshipSelected = (id) => {
        setSelectedStarshipId(id);
    }

    const renderPersonDetails = (person) => {
        return (
            <div className="col-sm-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>Gender: {person.gender}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Birth year: {person.birthYear}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Eye color: {person.eyeColor}</h5>
                    </li>
                </ul>
            </div>
        );
    }

    const renderPlanetDetails = (planet) => {
        return (
            <div className="col-sm-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>Population: {planet.population}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Rotation period: {planet.rotationPeriod}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Diameter: {planet.diameter}</h5>
                    </li>
                </ul>
            </div>
        );
    }

    const renderStarshipDetails = (starship) => {
        return (
            <div className="col-sm-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5>Model: {starship.model}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Manufacturer: {starship.manufacturer}</h5>
                    </li>
                    <li className="list-group-item">
                        <h5>Length: {starship.length}</h5>
                    </li>
                </ul>
            </div>
        );
    }

    const swapiService = new SwapiService();

    const personItemList = <ItemList
        onItemSelected={onPersonSelected}
        getItems={() => swapiService.getAllPeople()}
        renderListItem={(person) => `${person.name} (${person.birthYear}, ${person.gender})`}
    />;

    const personDetails = <ItemDetails
        itemId={selectedPersonId}
        getItemData={(id) => swapiService.getPerson(id)}
        itemImageSrc={`https://starwars-visualguide.com/assets/img/characters/${selectedPersonId}.jpg`}
        renderItemDetails={(person) => renderPersonDetails(person)}
    />;

    const planetItemList = <ItemList
        onItemSelected={onPlanetSelected}
        getItems={() => swapiService.getAllPlanets()}
        renderListItem={(planet) => `${planet.name} (diameter: ${planet.diameter}, population: ${planet.population})`}
    />;

    const planetDetails = <ItemDetails
        itemId={selectedPlanetId}
        getItemData={(id) => swapiService.getPlanet(id)}
        itemImageSrc={`https://starwars-visualguide.com/assets/img/planets/${selectedPlanetId}.jpg`}
        renderItemDetails={(planet) => renderPlanetDetails(planet)}
    />;

    const starshipItemList = <ItemList
        onItemSelected={onStarshipSelected}
        getItems={() => swapiService.getAllStarships()}
        renderListItem={(starship) => `${starship.name} (${starship.manufacturer}, ${starship.length})`}
    />;

    const starshipDetails = <ItemDetails
        itemId={selectedStarshipId}
        getItemData={(id) => swapiService.getStarship(id)}
        itemImageSrc={`https://starwars-visualguide.com/assets/img/starships/${selectedStarshipId}.jpg`}
        renderItemDetails={(starship) => renderStarshipDetails(starship)}
    />;

    return (
        <div className="App mb-5">
            <Header />
            <RandomPlanet renderPlanetDetails={(planet) => renderPlanetDetails(planet)} />
            <ItemListRow
                itemList={personItemList}
                itemDetails={personDetails}
            />
            <ItemListRow
                itemList={planetItemList}
                itemDetails={planetDetails}
            />
            <ItemListRow
                itemList={starshipItemList}
                itemDetails={starshipDetails}
            />
        </div>
    );
};

export default App;