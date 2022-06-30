const express = require("express");

const router = express.Router();
const newBin_controller = require("../controllers/newBin_controller");

router.get("/", newBin_controller.newBin);
router.post("/create-bin", newBin_controller.create);
module.exports = router;
