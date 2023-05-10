//La logica que necesitan las rutas la tienen los controladores

const { login } = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { getCharById } = require("../controllers/getCharById");

const express = require("express");
const router = express.Router();

router.get("/character/:id", (request, response) => {
  getCharById(request, response);
});

router.get("/login", (request, response) => {
  login(request, response);
});

router.post("/favorites", (request, response) => {
  postFav(request, response);
});

router.delete("/favorites/:id", (request, response) => {
  deleteFav(request, response);
});

module.exports = router;
