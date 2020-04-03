class SwapiService {
  _apiBase = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  getPersonImageUrl = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getPlanetImageUrl = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  getStarshipImageUrl = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = parseInt(item.url.match(idRegExp)[1]);
    return id;
  };

  _transformPlanet = (planet) => {
    const id = this._extractId(planet);
    const imageURL = this.getPlanetImageUrl(id);

    return {
      id,
      imageURL,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformPerson = (person) => {
    const id = this._extractId(person);
    const imageURL = this.getPersonImageUrl(id);

    return {
      id,
      imageURL,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformStarship = (starship) => {
    const id = this._extractId(starship);
    const imageURL = this.getStarshipImageUrl(id);

    return {
      id,
      imageURL,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };
}

export default SwapiService;
