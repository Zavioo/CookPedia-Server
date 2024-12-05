const express = require("express");
const recipesController = require("../controllers/recipesController");
const textiMonialController = require('../controllers/textimanilasController')
const router = new express.Router();

// To get all recipes

router.get("/recipes",recipesController.getAllRecipesController)

module.exports = router;

// To add Textimony
router.post("/add-textimony",textiMonialController.addTextimonialController );
