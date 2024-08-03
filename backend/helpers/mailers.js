// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const { OAuth2 } = google.auth;
// const oauth_link = "https://developer.google.com/oauthplayground";
// const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

// const auth = new OAuth2(
//   MAILING_ID,
//   MAILING_SECRET,
//   MAILING_REFRESH,
//   oauth_link
// );

// exports.sendVerifyEmail = (email, name, url) => {
//   auth.setCredentials({
//     refresh_token: MAILING_REFRESH,
//   });
//   const accessToken = auth.getAccessToken();
//   const smtp = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: EMAIL,
//       clientId: MAILING_ID,
//       clientSecret: MAILING_SECRET,
//       refreshToken: MAILING_REFRESH,
//       accessToken,
//     },
//   });
//   const mailOptions = {
//     from: EMAIL,
//     to: email,
//     subject: "Social App Verification",
//     html: `${url}`,
//   };
//   smtp.sendMail(mailOptions, (err, res) => {
//     if (err) return err;
//     return res;
//   });
// };

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const oauth_link = "https://developer.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerifyEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const smtp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Social App Verification",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px; background-color: #f9f9f9;">
        <div style="text-align: center; padding-bottom: 20px;">
          <img src="https://your-logo-url.com/logo.png" alt="App Logo" style="width: 100px; margin-bottom: 20px;">
          <h2 style="color: #333;">Verify Your Email Address</h2>
        </div>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for signing up for <strong>Social Media</strong>! Please click the button below to verify your email address:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${url}" style="background-color: #007bff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Verify Your Email</a>
        </div>
        <p>If the button above doesn’t work, copy and paste the following link into your web browser:</p>
        <p style="word-wrap: break-word;"><a href="${url}" style="color: #007bff;">${url}</a></p>
        <p>If you did not sign up for a <strong>Social Media</strong> account, please ignore this email or <a href="mailto:support@yourapp.com" style="color: #007bff;">contact support</a>.</p>
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 40px;">Social Media | Address | Unsubscribe</p>
      </div>
    `,
  };

  smtp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
