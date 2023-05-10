const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (request, response) => {
  try {
    const { id } = request.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw new Error("ID not found!");

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      status: data.status,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return response.status(200).json(character);
  } catch (error) {
    error.message.includes("ID")
      ? response.status(404)
      : response.status(500).send(error.response.data.error);
  }
};

module.exports = { getCharById };
