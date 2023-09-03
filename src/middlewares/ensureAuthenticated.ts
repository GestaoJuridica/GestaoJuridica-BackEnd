import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { verify } from 'jsonwebtoken';

function authenticated(request:Request, response:Response, next:NextFunction) {

    const authTokenType = z.object({
        bearer: z.any(),
        token: z.string(),
    })

    const authToken = request.headers.authorization;
    const { bearer, token } = authTokenType.parse(authToken?.split(" ")); 

    if (!authToken) {
        response.status(400).send({
            message: 'Token not found',
            status: 'alert'
        })
    }

    try {
        const secretKey:string | undefined = process.env.SECRET_KEY

        verify(token, String(secretKey));
        next();
    } catch (error) {
        response.status(500).send({
            message: 'Internal Server Error',
            status: 'error'
        })
    }


}

export { authenticated };