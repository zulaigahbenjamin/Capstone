import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export function createToken(user) {
    return jwt.sign(
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '3h'
        }
    );
}

export default createToken;
