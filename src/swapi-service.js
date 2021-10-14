export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _idRegExp = /\/([0-9]*)\/$/;

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`could not fetch ${url}, received ${response.status}`);
        }

        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getResource('/people/');
        return response.results.map((p) => this._transformPersonToCamelCaseFormat(p));
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPersonToCamelCaseFormat(person);
    }

    _transformPersonToCamelCaseFormat(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    async getAllPlanets() {
        const response = await this.getResource('/planets/');
        return response.results.map((p) => this._transformPlanetToCamelCaseFormat(p));
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanetToCamelCaseFormat(planet);
    }

    _transformPlanetToCamelCaseFormat(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    async getAllStarships() {
        const response = await this.getResource('/starships/');
        return response.results.map((p) => this._transformStarshipToCamelCaseFormat(p));
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarshipToCamelCaseFormat(starship);
    }

    _transformStarshipToCamelCaseFormat(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    }

    _extractId(apiItem) {
        return apiItem.url.match(this._idRegExp)[1];
    }
}