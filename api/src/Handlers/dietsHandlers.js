const { Diets } = require("../db.js");
const axios = require("axios");
const { API_KEY } = process.env;

// const getDietsHandler = async (req, res, next) => {
//   try {
//     const diets = await Diets.findAll();
//     if (!diets.length) {
//       let diets = ["Vegetarian"];
//       const dietsApi = await axios.get(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
//       );
//       let data = await dietsApi.data.results; //data Es Un Array De Objetos De Recetas

//       data.forEach((elem) => {
//         diets = [...diets, ...elem.diets];
//       });
//       diets = [...new Set(diets)];
//       for (let name of diets) {
//         await Diets.create({ Nombre: name });
//       }
//       // return recetas;
//       const dietas = await Diets.findAll();
//       res.status(201).json(dietas);
//     } else {
//       res.status(200).json(diets);
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const getDietsHandler1 = async (req, res, next) => {
//   const allDiets = await Diets.findAll();
//   try {
//     if (!allDiets.length) {
//       const newDiets = [
//         "Gluten Free",
//         "Ketogenic",
//         "Vegetarian",
//         "Lacto-Vegetarian",
//         "Ovo-Vegetarian",
//         "Vegan",
//         "Pescetarian",
//         "Paleo",
//         "Primal",
//         "Low FODMAP",
//         "Whole30",
//       ];
//       const dietsCreate = newDiets.map((el) => Diets.create({ Nombre: el }));
//       await Promise.all(dietsCreate);
//       const allDietsDb = await Diets.findAll();
//       res.status(201).json(allDietsDb);
//     }
//     res.status(200).json(allDiets);
//   } catch (error) {
//     next(error);
//   }
// };

const getDietsHandler = async (req, res, next) => {
  try {
    const { data } = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const dietas = data.results.map((e) => e.diets).flat();

    const dietasUnicas = ["Vegetarian"];
    for (var i = 0; i < dietas.length; i++) {
      if (!dietasUnicas.includes(dietas[i])) {
        dietasUnicas.push(dietas[i]);
      }
    }
    for (let name of dietasUnicas) {
      await Diets.create({ Nombre: name });
    }
    const result = await Diets.findAll();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: "Ocurrio un error al obtener las Dietas" });
  }
};

module.exports = { getDietsHandler };
