import React from "react";
import "./PlanetView.css";

const PlanetView = ( { planet, planetImageSrc, renderPlanetDetails } ) => {
    return (
        <div className="planet-view spinner-view bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>{planet.name}</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src={planetImageSrc} alt=""/>
                </div>
                {renderPlanetDetails(planet)}
            </div>
        </div>
    );
}

export default PlanetView;