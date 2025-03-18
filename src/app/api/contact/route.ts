import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nou missatge de contacte de ${name}`,
      text: `
        Has rebut un missatge de contacte:
        Nom: ${name}
        Email: ${email}
        Telèfon: ${phone}
        Missatge: ${message}
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
