module.exports.newVan = function (req, res) {
  return res.render("newVan");
};

const newVan = require("../models/van");
module.exports.createVan = function (req, res) {
  newVan.create(
    {
      DriverName: req.body.driverName,
      mailId: req.body.mailId,
    },
    function (err, Van) {
      if (err) {
        console.log("Error in Registering a Van!");
        return;
      }
      console.log("******", Van);
      return res.redirect("back");
    }
  );
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
