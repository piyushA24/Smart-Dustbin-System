module.exports.newBin = function (req, res) {
  return res.render("newBin");
};

const newBin = require("../models/bin");
module.exports.create = function (req, res) {
  newBin.create(
    {
      Location: req.body.location,
      VanID: req.body.vanid,
    },
    function (err, Bin) {
      if (err) {
        console.log("Error in creating a contact!");
        return;
      }
      console.log("******", Bin);
      return res.redirect("back");
    }
  );
};

//const newBin = require("./models/contact");
