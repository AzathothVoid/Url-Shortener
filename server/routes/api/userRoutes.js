const router = require("express").Router();
const UserController = require("../../controllers/User/userController.js");

//router.post("/create", UserController.create);
//  router.get("/:userid", UserController.getById);
router.get("/users", UserController.getAll);

module.exports = router;
