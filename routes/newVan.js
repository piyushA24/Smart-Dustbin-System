const express = require("express");

const router = express.Router();
const newVan_controller = require("../controllers/newVan_controller");

router.get("/", newVan_controller.newVan);
router.post("/create-van", newVan_controller.createVan);
module.exports = router;
