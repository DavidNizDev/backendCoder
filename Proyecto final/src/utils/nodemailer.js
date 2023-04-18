import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp-mail.outlook.com", 
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const sendMailTo = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.NODEMAILER_FROM || "Tu Comercio",
    to,
    subject,
    text,
  };
  return await transporter.sendMail(mailOptions);
};

export default sendMailTo;
