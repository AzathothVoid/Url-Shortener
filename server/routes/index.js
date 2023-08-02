const authRouter = require("./api/authRoutes");
const userRouter = require("./api/userRoutes");
const express = require("express");

const router = express.Router();

router.use("/Auth", authRouter);
router.use("/User", userRouter);

module.exports = router;
