const vans = require("../models/van");
const bins = require("../models/bin");

module.exports.viewVan = function (req, res) {
  vans.find({}, function (err, vanDetails) {
    if (err) {
      console.log("Error in fetching Vans from db");
      return;
    }
    bins.find({}, function (err, binDetails) {
      if (err) {
        console.log("Error in fetching Vans from db");
        return;
      }
      return res.render("activeVans", {
        van_list: vanDetails,
        bin_list: binDetails,
      });
    });
  });
};

module.exports.delete = function (req, res) {
  console.log(req.query);
  let id = req.query.id;

  vans.findOneAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting the Van");
      return;
    }
    return res.redirect("back");
  });
};
