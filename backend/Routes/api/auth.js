const express = require("express");
const { registrationController, verficationController, loginController } = require("../../Controllers/userController");
const router = express.Router();

router.post("/registration", registrationController);
router.post("/activate", verficationController);
router.post("/login", loginController);

module.exports = router;
