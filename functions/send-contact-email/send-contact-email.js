exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ hell: "Method Not Allowed" }),
      headers: { Allow: "POST" },
    };
  }

  const data = JSON.parse(event.body);
  console.log(data);
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.EMAIL_API_KEY);
  const msg = {
    replyto: data.email,
    to: "tapankumar2576@gmail.com" || process.env.SENDER_EMAIL,
    from: process.env.NO_REPLY_MAIL,
    subject: process.env.MAIL_SUBJECT,
    text: process.env.CONTACT_US_TEXT,
    html: `user submit his informatition email: ${data.email} name: ${data.name} company: ${data.company} phone: ${data.phone} description: ${data.description} domain: ${data.domine}`,
  };

  sgMail
    .send(msg)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    statusCode: 200,
    body: JSON.stringify({ success: "Submit Information Successfully!" }),
  };
};
