const { Router } = require("express");
const { getDietsHandler } = require("../Handlers/dietsHandlers");

const dietsRoutes = Router();

dietsRoutes.get("/", getDietsHandler);

module.exports = dietsRoutes;
