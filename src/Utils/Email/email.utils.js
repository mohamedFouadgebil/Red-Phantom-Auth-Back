import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  const userEmail = process.env.EMAIL_USER || "redphantom626@gmail.com";
  const userPass = process.env.EMAIL_PASS || "hnpo drge egeq dhvy";

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: userEmail,
      pass: userPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: `"Red Phantom" <${userEmail}>`,
    to,
    subject,
    html,
  });
};
