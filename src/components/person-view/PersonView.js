import React from "react";
import './PersonView.css';

const PersonView = ({ person, personImageSrc } ) => {
    return (
        <div className="person-details-view bg-dark p-4">
            <div className="row">
                <div className="col">
                    <h3>{person.name}</h3>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <img className="planet-image img-fluid" src={personImageSrc} alt=""/>
                </div>
                <div className="col-sm-8">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5>Gender {person.gender}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Birth Year {person.birthYear}</h5>
                        </li>
                        <li className="list-group-item">
                            <h5>Eye Color {person.eyeColor}</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PersonView;