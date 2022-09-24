import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db.js';
import pkg from 'mongodb';
const { ObjectID } = pkg;
import { v4 as uuid } from 'uuid'
import { sendEmail } from '../utils/sendEmail.js';

export const forgotPasswordRoute = {
    path: '/api/forgot-password',
    method: 'put',
    handler: async (req, res) => {
        const { emailValue: email } = req.body;
        const db = getDbConnection('react-auth-db');

        const passwordResetCode = uuid()
        const result = await db.collection('users').updateOne({ email }, { $set: { passwordResetCode } });

        if (!result.nModified > 0) {
            try {
                await sendEmail({
                    to: email,
                    from: process.env.DEFAULT_EMAIL,
                    subject: 'Password Reset',
                    text: `
                        To reset password, click this link:
                        http://localhost:3000/reset-password/${passwordResetCode}
                    `,
                });
            } catch (error) {
                console.log(error);
                res.sendStatus(500)
            }
        };

        res.sendStatus(200)
    }
}