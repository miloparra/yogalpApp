import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const resend = new Resend(process.env.RESEND_API_KEY)

    try {
        await resend.emails.send({
            from: 'Yogalp',
            to: process.env.MAIL_TO, // adresse où tu reçois les mails
            subject: '📩 Nouveau message',
            html: `
            <p><strong>Nom:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Message:</strong><br>${body.message}</p>
        `
        })

        return { success: true }
    } catch (error) {
        console.error(error)
        return { success: false, error: 'Envoi impossible' }
    }
})
