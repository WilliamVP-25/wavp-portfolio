import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = "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"

const sendEmail = async ({name, email, subject, message}) => {
    console.log("sendEmail.js")
    try {
        await fetch(SENDGRID_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${SENDGRID_API_KEY}`,
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{
                            email
                        }],
                        subject: subject
                    }
                ],
                from: {
                    email: 'wavp25@gmail.com',
                    name: 'William Viteri'
                },
                content: [
                    {
                        type: 'text/html',
                        value: `<b>name: ${name} ${message}</b>`
                    }
                ]
            })
        })
    } catch (e) {
        console.log(e)
    }
}

export {sendEmail};