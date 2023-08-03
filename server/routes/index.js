const authRouter = require("./api/authRoutes.js");
const userRouter = require("./api/userRoutes.js");

const router = require("express").Router();

router.use("/Auth", authRouter);
router.use("/User", userRouter);

module.exports = router;
