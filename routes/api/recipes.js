const router = require("express").Router();
const recipesControllers = require("../../controllers/recipesControllers");

// Matches with "/api/recipes"
router.route("/").post(recipesControllers.create);

router.route("/username/:username").get(recipesControllers.findAll);
// Matches with "/api/recipes/:id"
router
  .route("/:id")
  .get(recipesControllers.findById)
  .put(recipesControllers.update)
  .delete(recipesControllers.remove);

module.exports = router;
