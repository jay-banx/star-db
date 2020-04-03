export default class DummySwapiService {
  _people = [
    {
      id: 1,
      imageURL: `https://placeimg.com/400/500/people`,
      name: "Bilbo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
    },

    {
      id: 2,
      imageURL: `https://placeimg.com/400/500/people`,
      name: "Frodo Baggins [TEST DATA]",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown",
    },
  ];

  _planets = [
    {
      id: 1,
      imageURL: `https://placeimg.com/400/400/nature`,
      name: "Earth [TEST DATA]",
      population: "7.530.000.000",
      rotationPeriod: "23 hours 56 seconds",
      diameter: "12.742 km",
    },
    {
      id: 2,
      imageURL: `https://placeimg.com/400/400/nature`,
      name: "Venus [TEST DATA]",
      population: "not known",
      rotationPeriod: "243 days",
      diameter: "12.104 km",
    },
  ];

  _starships = [
    {
      id: 1,
      imageURL: `https://placeimg.com/600/400/tech`,
      name: "USS Enterprise [TEST DATA]",
      model: "NCC-1701-C",
      manufacturer: "Northrop Grumman Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
    },
    {
      id: 2,
      imageURL: `https://placeimg.com/600/400/tech`,
      name: "Death Star [TEST DATA]",
      model: "NCC-UK-R5",
      manufacturer: "Horistic Shipbuilding",
      costInCredits: "not known",
      length: "approx 300 meters",
      crew: 2000,
      passengers: 60,
      cargoCapacity: 700000,
    },
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async (id) => {
    return this._people.find((item) => item.id === id);
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async (id) => {
    return this._planets.find((item) => item.id === id);
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async (id) => {
    return this._starships.find((item) => item.id === id);
  };
}
