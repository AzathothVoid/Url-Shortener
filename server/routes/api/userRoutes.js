const express = require("express");
const router = express.Router();

router.post("/create");
router.get("/:userid");

module.exports = router;
