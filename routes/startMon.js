const express = require("express");

const router = express.Router();
const startMon_controller = require("../controllers/startMon_controller");

router.get("/", startMon_controller.start);
//router.post("/create-van", newVan_controller.createVan);
router.get("/config", startMon_controller.config);
router.post("/config/update", startMon_controller.update);
module.exports = router;
