const { Router } = require("express");
const dietsRoutes = require("./dietsRoutes");
const recipesRoutes = require("./recipeRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRoutes);
router.use("/diets", dietsRoutes);

module.exports = router;
