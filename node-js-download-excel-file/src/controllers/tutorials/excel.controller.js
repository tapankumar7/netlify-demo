
const dotenv = require("dotenv");
dotenv.config();

const download = (req, res) => {
  const data = JSON.parse(req.body)
  console.log(data)
  const mailjet = require('node-mailjet')
    .connect('d335fc2ec4796007ca50c3a9fbad84cf', '2e3a959a0778ba55f7fd912e0ca19055')
  const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": process.env.SENDER_EMAIL,
            "Name": process.env.SENDER_NAME,
          },
          "To": [
            {
              "Email": `${data.email}`,
              "Name": `${data.name}`
            }
          ],
          "Subject": process.env.MAIL_SUBJECT,
          "TextPart": process.env.CONTACT_US_TEXT,
          "HTMLPart": `user submit his informatition
email: ${data.email}

name: ${data.name}

company: ${data.company}

phone: ${data.phone}

description: ${data.description}

domine: ${data.domine}
        `,
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
  request
    .then((result) => {
      console.log("hello world")
    })
    .catch((err) => {
      console.log(err, ">>>>>>>>>>")
    })
  return workbook.xlsx.write(res).then(function () {
    res.status(200).end();
  });

};

module.exports = {
  download,
};
