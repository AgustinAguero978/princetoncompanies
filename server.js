const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send-email", (req, res) => {
  const { fullName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Aquí debes configurar los datos de tu servidor SMTP
    port: 587,
    secure: false,
    auth: {
      user: "tu_usuario",
      pass: "tu_contraseña",
    },
  });

  const mailOptions = {
    from: email,
    to: "destinatario@example.com", // Aquí debes configurar la dirección de correo electrónico del destinatario
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al enviar el correo electrónico");
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.status(200).send("Correo electrónico enviado");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
