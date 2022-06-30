const express = require("express");

const router = express.Router();
const viewBin_controller = require("../controllers/viewBin_controller");

router.get("/", viewBin_controller.update);
//router.post("/delete-bin", newBin_controller.create);
router.post("/updateVan", viewBin_controller.updateVan);
module.exports = router;
