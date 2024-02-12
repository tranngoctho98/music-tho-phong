// functions/sendEmail.ts
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tho66535@gmail.com",
    pass: "th0ng0c@",
  },
});

export const sendEmail = functions.https.onCall(async (data, context) => {
  const { to, subject, text } = data;

  const mailOptions = {
    from: "tho66535@gmail.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError("internal", "Email sending failed");
  }
});
