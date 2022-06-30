const bins = require("../models/bin");

module.exports.viewBin = function (req, res) {
  bins.find({}, function (err, trashcan) {
    if (err) {
      console.log("Error in fetching Bins from db");
      return;
    }
    return res.render("installedBins", {
      bin_list: trashcan,
    });
  });
};

module.exports.delete = function (req, res) {
  console.log(req.query);
  let id = req.query.id;

  bins.findOneAndDelete({ _id: id }, function (err) {
    if (err) {
      console.log("Error in deleting the Bin");
      return;
    }
    return res.redirect("back");
  });
};

var param = 0;
module.exports.update = function (req, res) {
  /*bins.findByIdAndUpdate(req.params.vanId, req.body, function (err, user) {
    return res.redirect("back");
  });*/
  param = req.query.id;
  return res.render("updateVan");
};

module.exports.updateVan = function (req, res) {
  bins.findByIdAndUpdate(
    param,
    { VanID: req.body.vanId },
    function (err, user) {
      return res.redirect("/viewBin");
    }
  );
};
