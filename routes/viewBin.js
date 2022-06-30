const express = require("express");

const router = express.Router();
const viewBin_controller = require("../controllers/viewBin_controller");

router.get("/", viewBin_controller.viewBin);
//router.post("/delete-bin", newBin_controller.create);
router.get("/delete-bin/", viewBin_controller.delete);
router.use("/update-van", require("./updateVans"));
module.exports = router;
