const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (request, response) => {
  const { id } = request.params;
  axios(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, especies, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          name,
          especies,
          status,
          origin,
          image,
          gender,
        };
        return response.status(200).json(character);
      }
      return response.status(404).send("NOT FOUND");
    })
    .catch((error) => response.status(500).send(error.message));
};

module.exports = { getCharById };
