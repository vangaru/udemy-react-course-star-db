import React from "react";

const PlanetView = ( { planet, planetImageSrc } ) => {
    return (
        <React.Fragment>
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
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Population {planet.population}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Rotation period {planet.rotationPeriod}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Diameter {planet.diameter}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PlanetView;