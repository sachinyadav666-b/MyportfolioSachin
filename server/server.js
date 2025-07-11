import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";          // pulls variables from .env

const app = express();

// ---------- middleware ----------
app.use(cors());                 // allow requests from your React domain
app.use(express.json());         // parse JSON bodies

// ---------- mailer ----------
console.log(process.env.EMAIL_USER);
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
  console.log(name, email, message);

  // quick validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }

  const mailOptions = {
    from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,        // send it to yourself
    replyTo: email,                    // makes Gmail’s “Reply” point to visitor
    subject: ` New message from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Mail not sent." });
  }
});

// ---------- start server ----------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API ready on http://localhost:${PORT}`));
