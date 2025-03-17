import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Crea el transporte SMTP con tus credenciales
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Envía el correo
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remitente (puede ser el usuario)
      to: process.env.CONTACT_EMAIL, // Destinatario (tu correo)
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Has recibido un mensaje de contacto:
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone}
        Mensaje: ${message}
      `,
      html: `
        <p>Algú vol contactar amb vosaltres desde la pàgina web:</p>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telèfon:</strong> ${phone}</p>
        <p><strong>Missatge:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email enviat correctament" });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { message: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
