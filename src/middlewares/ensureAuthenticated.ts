import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

async function authenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;


    if (authToken) {
        const [bearer, token] = authToken.split(" ")

        if (!authToken) {
            response.status(400).send({
                message: 'Token not found',
                status: 'alert'
            })
        }

        if (!authToken) {

        }
        try {

            const secretKey: string | undefined = process.env.SECRET_KEY

            if (!secretKey) {
                throw new Error('Secret key not found');
            }

            verify(token, String(secretKey));

            next();
        } catch (error) {
            response.status(500).send({
                message: 'Failed to authenticated user',
                status: 'error'
            })
        }
    }
}
export { authenticated };