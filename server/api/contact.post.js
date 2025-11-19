import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { name, email, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Missing fields' })
    }

    // Configure ton transporteur mail
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou un autre provider SMTP
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        tls: process.env.NODE_ENV === 'development'
            ? { rejectUnauthorized: false }
            : undefined, // rien en prod, sécurisé par défaut
    })

    // Définir le contenu du mail
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: 'Nouveau message depuis le formulaire de contact',
        text: message,
        html: `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong><br>${message}</p>
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true, message: 'Message envoyé avec succès !' }
    } catch (error) {
        console.error(error)
        throw createError({ statusCode: 500, statusMessage: 'Erreur lors de l’envoi du mail' })
    }
})
