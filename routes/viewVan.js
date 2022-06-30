const express = require("express");

const router = express.Router();
const viewVan_controller = require("../controllers/viewVan_controller");

router.get("/", viewVan_controller.viewVan);
//router.post("/delete-bin", newBin_controller.create);
router.get("/delete-van/", viewVan_controller.delete);
module.exports = router;
