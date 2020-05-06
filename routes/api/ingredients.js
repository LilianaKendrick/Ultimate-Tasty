const router = require("express").Router();
const ingredientsControllers = require("../../controllers/ingredientsControllers");

// Matches with "/api/ingredients"
router
  .route("/")
  .get(ingredientsControllers.findAll)
  .post(ingredientsControllers.create)
  .put(ingredientsControllers.updateMany);

// Matches with "/api/ingredients/:id"
router
  .route("/:id")
  .get(ingredientsControllers.findById)
  .put(ingredientsControllers.updateById)
  .delete(ingredientsControllers.remove);

// Matches with "/api/ingredients/:id"
router.route("/username/:username").get(ingredientsControllers.findAll);

module.exports = router;
