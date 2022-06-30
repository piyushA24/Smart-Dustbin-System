const vans = require("../models/van");
const bins = require("../models/bin");

const nodemailer = require("nodemailer");

var small = "75";
var large = "95";

module.exports.config = function (req, res) {
  return res.render("config");
};

console.log(small);
console.log(large);

module.exports.update = function (req, res) {
  small = req.body.small;
  large = req.body.large;
  console.log(small);
  console.log(large);
  return res.redirect("back");
};

module.exports.start = function (req, res) {
  //For Need To be Cleaned
  bins.find({ perFilled: { $gte: small } }, function (err, trashcans) {
    trashcans.forEach(getVanID);
    function getVanID(item) {
      var vanID = item.VanID;
      vans.find({ VanId: vanID }, function (err, van_req) {
        van_req.forEach(sendMail);
        function sendMail(key) {
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "ankitjha779@gmail.com",
              pass: "ankitjha01",
            },
          });
          //console.log(key.mailId);
          var id = item._id;
          var location = item.Location;
          var type = item.Type;
          var mailOptions = {
            from: "ankitjha779@gmail.com",
            to: key.mailId,
            subject: "Clean The Dustbin",
            text:
              "Clean the Bin with Details\n" +
              "Bin ID: " +
              id +
              "\n" +
              "Location: " +
              location +
              "\n" +
              "Type of Trash: " +
              type,
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err);
            } else {
              console.log("Mail Sent");
            }
          });
        }
      });
    }
  });

  //Overdue
  bins.find({ perFilled: { $gte: large } }, function (err, trashcans) {
    trashcans.forEach(getVanID);
    function getVanID(item) {
      var vanID = item.VanID;
      vans.find({ VanId: vanID }, function (err, van_req) {
        van_req.forEach(sendMail);
        function sendMail(key) {
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "ankitjha779@gmail.com",
              pass: "ankitjha01",
            },
          });
          //console.log(key.mailId);
          var id = item._id;
          var location = item.Location;
          var type = item.Type;
          var mailOptions = {
            from: "ankitjha779@gmail.com",
            to: key.mailId,
            cc: "iit2020042@iiita.ac.in",
            subject: "Clean The Dustbin",
            text:
              "Clean the Bin Urgently as it is on Verge of Overflow with Details\n" +
              "Bin ID: " +
              id +
              "\n" +
              "Location: " +
              location +
              "\n" +
              "Type of Trash: " +
              type,
          };

          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err);
            } else {
              console.log("Mail Sent");
            }
          });
        }
      });
    }
  });

  bins.find({}, function (err, binDetails) {
    if (err) {
      console.log("Error in fetching Vans from db");
      return;
    }
    return res.render("startMon", {
      bin_list: binDetails,
      small_req: small,
      large_req: large,
    });
  });
};
