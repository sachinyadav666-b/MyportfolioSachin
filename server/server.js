import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();

//  middleware 
//Use frontend domain from environment variable
app.use(cors({
  origin: process.env.cors_origin,  // e.g. https://myportfolio-sachin.vercel.app
}));

app.use(express.json());


console.log("Email will be sent from:", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ---------- API route ----------
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming message:", name, email, message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }

  const mailOptions = {
    from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail send error:", err);
    return res.status(500).json({ error: "Mail not sent." });
  }
});

// ---------- start server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` API running at http://localhost:${PORT}`);
});
