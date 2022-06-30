const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);
router.use("/newBin", require("./newBin"));
router.use("/viewBin", require("./viewBin"));
router.use("/newVan", require("./newVan"));
router.use("/viewVan", require("./viewVan"));
router.use("/startMon", require("./startMon"));
//router.use("/config", require("./config"));
//router.get("/newVan", require("./newVan"));
module.exports = router;
