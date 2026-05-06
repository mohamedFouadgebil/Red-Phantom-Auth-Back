import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "redphantom626@gmail.com",
      pass: process.env.EMAIL_PASS || "hnpo drge egeq dhvy",
    },
    tls: {
      rejectUnauthorized: false, 
    },
  });

  await transporter.sendMail({
    from: `"Red Phantom" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
