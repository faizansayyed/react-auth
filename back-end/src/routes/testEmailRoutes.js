import { sendEmail } from "../utils/sendEmail"


export const testEmailRoutes = {
    path: "/api/test-email",
    method: "post",
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'faizansayyed0714@gmail.com',
                from: "faizansayyed0714@gmail.com",
                subject: 'Does this work?',
                text: 'If you\'re reading this... yes!'
            })

            res.sendStatus(200)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}