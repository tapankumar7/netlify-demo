exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.EMAIL_API_KEY);
  const msg = {
    replyto: data.email,
    to: process.env.SENDER_EMAIL,
    from: process.env.NO_REPLY_MAIL,
    subject: process.env.MAIL_SUBJECT,
    text: process.env.CONTACT_US_TEXT,
    html: `<p>user submit his informatition <br/>email: ${data.email} <br/>name: ${data.name} <br/>company: ${data.company} <br/>phone: ${data.phone} <br/>description: ${data.description} <br/>domain: ${data.domine}</p>`,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Submit Information Successfully!",
        senderEmail: process.env.SENDER_EMAIL,
        noReplyEmail: process.env.NO_REPLY_MAIL,
      }),
    };
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        success: false,
        err: error,
        senderEmail: process.env.SENDER_EMAIL,
        noReplyEmail: process.env.NO_REPLY_MAIL,
      }),
    };
  }
};
