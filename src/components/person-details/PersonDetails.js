import React from "react";

import './PersonDetails.css';

const PersonDetails = () => {
    return(
        <div className="person-details bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>R2-D2</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src="https://starwars-visualguide.com/assets/img/characters/3.jpg" alt=""/>
                </div>
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Gender male</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Birth Year 43</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Eye Color red</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PersonDetails;