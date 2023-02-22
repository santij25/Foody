const { expect } = require("chai");
const { conn, Recipe } = require("../../src/db");

describe("Recipe Model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  describe("Primer test", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("recipes", () => {
      it("no debe crearse si no se mandan todos los datos", (done) => {
        Recipe.create({name: "fideos", healthScore: 55})
          .then(() => done(new Error("Debe pasar los datos correctos")))
          .catch(() => done());
      });
    });
  });
});
