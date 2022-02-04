var express = require("express");
var app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.post("/new", async function (req, res) {
  const adata = JSON.stringify(req.body);
  const data = JSON.parse(adata);
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.EMAIL_API_KEY);
  const msg = {
    to: data.email,
    from: process.env.SENDER_EMAIL,
    subject: process.env.MAIL_SUBJECT,
    text: process.env.CONTACT_US_TEXT,
    html: `user submit his informatition email: ${data.email} name: ${data.name} company: ${data.company} phone: ${data.phone} description: ${data.description} domain: ${data.domine}`,
  };

  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).send({ success: true });
    })
    .catch((err) => {
      res.status(err.code).send(err);
    });
});

app.post("/download", async function (req, res) {
  const adata = JSON.stringify(req.body);
  const data = JSON.parse(adata);
  console.log(data);
  const mailjet = require("node-mailjet").connect(
    "d335fc2ec4796007ca50c3a9fbad84cf",
    "2e3a959a0778ba55f7fd912e0ca19055"
  );
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL,
          Name: process.env.SENDER_NAME,
        },
        To: [
          {
            Email: `${data.email}`,
            Name: `${data.name}`,
          },
        ],
        Subject: process.env.MAIL_SUBJECT,
        TextPart: process.env.CONTACT_US_TEXT,
        HTMLPart: `user Download Whitepaper
email: ${data.email}
name: ${data.name}
      `,
        CustomID: "AppGettingStartedTest",
      },
    ],
  });
  request
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });
  res.status(200).send("hello world");
});

let port = process.env.PORT || 8090;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
