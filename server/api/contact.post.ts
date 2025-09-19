import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    // Récupérer les données envoyées par le formulaire
    const body = await readBody(event)

    console.log(body)

    // Créer un transporteur SMTP (ici exemple avec Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER, // ton email
            pass: process.env.SMTP_PASS, // mot de passe ou app password
        },
        tls: {
            rejectUnauthorized: false, // pour dev local
        },
    })

    // Configurer l’email
    const mailOptions = {
        from: body.email, // adresse de l’expéditeur
        to: process.env.SMTP_TO, // où tu veux recevoir les mails
        subject: `Nouveau message de ${body.name}`,
        text: body.message,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true, message: 'Email envoyé avec succès ✅' }
    } catch (error: any) {
        console.error(error)
        return { success: false, message: 'Erreur lors de l’envoi ❌' }
    }
})
