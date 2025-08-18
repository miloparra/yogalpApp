import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER, // stocke ton email en variable d'env
            pass: process.env.SMTP_PASS  // mot de passe ou app password
        },
        tls: {
            rejectUnauthorized: false, // pour dev local
        },
    })

    try {
        await transporter.sendMail({
            from: `"Site Web" <${process.env.SMTP_USER}>`,
            to: "miloparra1531.mp@exemple.com", // destinataire
            subject: body.subject || "Nouveau message",
            text: body.message,
            html: `<p>${body.message}</p>`,
        })

        return { success: true }
    } catch (error) {
        console.error('Erreur envoi mail:', error)
        throw createError({ statusCode: 500, message: 'Erreur lors de l’envoi de l’email' })
    }
})
