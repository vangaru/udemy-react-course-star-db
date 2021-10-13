export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`could not fetch ${url}, received ${response.status}`);
        }

        return await response.json();
    }

    async getAllPeople() {
        const response = await this.getResource('/people/');
        return response.results;
    }

    async getPerson(id) {
        return await this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const response = await this.getResource('/planets/');
        return response.results;
    }

    async getPlanet(id) {
        return await this.getResource(`/planets/${id}`);
    }

    async getAllStarships() {
        const response = await this.getResource('/starships/');
        return response.results;
    }

    async getStarship(id) {
        return await this.getResource(`/starships/${id}`);
    }
}