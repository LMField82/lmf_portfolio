var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = app.listen(app.get("port"), function() {
    var port = server.address().port;
    console.log("Server listening on port " + port);
});

var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    auth: {
        user: "lindsaymfield1.com",
        pass: "####"
    }
}));

app.post("/send-email", function(req, res) {
    var mailOptions = {
        from: " ",
        to: "lindsaymfield1@gmail.com",
        subject: "Request",
        text: req.body.message

    };
    smtpTransport.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        alert("Message sent");
        console.log("Message sent");
    });
    res.redirect("/index.html");
})